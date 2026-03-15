export default async function handler(request, response) {
    if (request.method !== 'GET') {
        return response.status(405).json({ error: 'Method Not Allowed' });
    }

    try {
        const { category = 'technology', search, query = 'artificial intelligence' } = request.query;
        const searchQuery = search || query;
        const apiKey = process.env.NEWS_API_KEY;

        if (!apiKey) {
            console.warn('NEWS_API_KEY is not configured in environment variables. Falling back to mock data.');
            return response.status(200).json({
                categories: ['All', 'Technology', 'Business', 'Products'],
                articles: [
                    { id: 1, title: 'The Future of AI Hardware', summary: 'New chips are coming (No API Key)', content: '...', category: 'Technology', author: 'AI Weekly', date: '2024-03-15', readTime: '3 min', image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1000&auto=format&fit=crop', tags: ['Hardware', 'AI'], link: '#' },
                    { id: 2, title: 'Enterprise AI Adoption Surges', summary: 'More companies are using AI (No API Key)', content: '...', category: 'Business', author: 'Tech Insider', date: '2024-03-14', readTime: '5 min', image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1000&auto=format&fit=crop', tags: ['Enterprise', 'AI'], link: '#' }
                ]
            });
        }

        const url = `https://newsapi.org/v2/everything?q=${encodeURIComponent(searchQuery)}&language=en&sortBy=publishedAt&pageSize=15&apiKey=${apiKey}`;

        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 5000);

        let res;
        try {
            res = await fetch(url, {
                headers: {
                    'User-Agent': 'Vercel-Serverless-Function'
                },
                signal: controller.signal
            });
            clearTimeout(timeoutId);
        } catch (fetchErr) {
            console.warn('NewsAPI fetch failed or timed out:', fetchErr);
            // Force mock data on timeout
            res = { ok: false, status: 504 };
        }

        if (!res || !res.ok) {
            console.warn(`NewsAPI error: ${res ? res.status : 'unknown'}. Falling back to mock data.`);
            return response.status(200).json({
                categories: ['All', 'Technology', 'Business', 'Products'],
                articles: [
                    { id: 1, title: 'The Future of AI Hardware', summary: 'New chips are coming', content: '...', category: 'Technology', author: 'AI Weekly', date: '2024-03-15', readTime: '3 min', image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1000&auto=format&fit=crop', tags: ['Hardware', 'AI'], link: '#' },
                    { id: 2, title: 'Enterprise AI Adoption Surges', summary: 'More companies are using AI', content: '...', category: 'Business', author: 'Tech Insider', date: '2024-03-14', readTime: '5 min', image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1000&auto=format&fit=crop', tags: ['Enterprise', 'AI'], link: '#' },
                    { id: 3, title: 'Generative Models Getting Faster', summary: 'Latency drops in new LLMs', content: '...', category: 'Products', author: 'Code Daily', date: '2024-03-13', readTime: '4 min', image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1000&auto=format&fit=crop', tags: ['LLM', 'AI'], link: '#' }
                ]
            });
        }

        const data = await res.json();

        // Transform NewsAPI format to match what the frontend expects
        const categories = ['Technology', 'Business', 'Products'];
        const articles = (data.articles || []).map((article, index) => ({
            id: index + 1,
            title: article.title,
            summary: article.description || 'No description available.',
            content: article.content || '',
            category: categories[index % categories.length],
            author: article.author || article.source?.name || 'Unknown',
            date: article.publishedAt ? article.publishedAt.split('T')[0] : new Date().toISOString().split('T')[0],
            readTime: Math.max(2, Math.floor((article.content?.length || 500) / 1000)) + ' min',
            image: article.urlToImage || 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1000&auto=format&fit=crop',
            tags: ['AI', 'News'],
            link: article.url
        }));

        return response.status(200).json({ articles, categories: ['All', ...categories] });
    } catch (error) {
        console.error('Error in /api/news:', error);
        return response.status(500).json({ error: error.message || 'Internal Server Error' });
    }
}
