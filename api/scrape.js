import * as cheerio from 'cheerio';

export default async function handler(request, response) {
    if (request.method !== 'GET') {
        return response.status(405).json({ error: 'Method Not Allowed' });
    }

    try {
        const { url } = request.query;
        if (!url) {
            return response.status(400).json({ error: 'Missing url parameter' });
        }

        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 8000);

        try {
            const res = await fetch(url, {
                headers: {
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36'
                },
                signal: controller.signal
            });
            clearTimeout(timeoutId);

            if (!res.ok) {
                return response.status(res.status).json({ error: 'Failed to fetch article' });
            }

            const html = await res.text();
            const $ = cheerio.load(html);

            // Basic heuristic: select paragraph tags inside an article tag, or just main paragraph tags
            let paragraphs = [];
            $('article p, main p, div.story-content p, div.article-body p, .post-content p').each((_, el) => {
                const text = $(el).text().trim();
                // Filter out short noise links/captions
                if (text.length > 50) {
                    paragraphs.push(text);
                }
            });

            // Fallback if the specific selectors yielded nothing
            if (paragraphs.length === 0) {
                $('p').each((_, el) => {
                    const text = $(el).text().trim();
                    if (text.length > 80) paragraphs.push(text);
                });
            }

            // Remove duplicates
            paragraphs = [...new Set(paragraphs)];

            if (paragraphs.length === 0) {
                return response.status(200).json({ content: null, error: 'Could not extract article content' });
            }

            return response.status(200).json({
                content: paragraphs.join('\n\n')
            });

        } catch (fetchErr) {
            console.warn('Scraping url failed/timed out:', fetchErr.message);
            return response.status(504).json({ error: 'Scraping timed out' });
        }

    } catch (error) {
        console.error('Error in /api/scrape:', error);
        return response.status(500).json({ error: 'Internal Server Error' });
    }
}
