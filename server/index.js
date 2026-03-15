import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import * as cheerio from 'cheerio';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.join(__dirname, '../.env.local') });

const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/scrape', async (req, res) => {
    try {
        const { url } = req.query;
        if (!url) return res.status(400).json({ error: 'Missing url parameter' });

        const response = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
        if (!response.ok) throw new Error('Fetch failed');

        const html = await response.text();
        const $ = cheerio.load(html);
        let paragraphs = [];

        $('article p, main p, div.story-content p, div.article-body p, .post-content p').each((_, el) => {
            const text = $(el).text().trim();
            if (text.length > 50) paragraphs.push(text);
        });

        if (paragraphs.length === 0) {
            $('p').each((_, el) => {
                const text = $(el).text().trim();
                if (text.length > 80) paragraphs.push(text);
            });
        }
        paragraphs = [...new Set(paragraphs)];
        if (paragraphs.length === 0) return res.json({ content: null, error: 'Could not extract' });

        res.json({ content: paragraphs.join('\n\n') });
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});

// Fallback Mock Data Providers
const mockNews = {
    categories: ['All', 'Technology', 'Business', 'Products'],
    articles: [
        { id: 1, title: 'The Future of AI Hardware', summary: 'New chips are coming', content: '...', category: 'Technology', author: 'AI Weekly', date: '2024-03-15', readTime: '3 min', image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1000&auto=format&fit=crop', tags: ['Hardware', 'AI'], link: '#' },
        { id: 2, title: 'Enterprise AI Adoption Surges', summary: 'More companies are using AI', content: '...', category: 'Business', author: 'Tech Insider', date: '2024-03-14', readTime: '5 min', image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1000&auto=format&fit=crop', tags: ['Enterprise', 'AI'], link: '#' }
    ]
};

// --- ROUTES ---

app.get('/api/news', async (req, res) => {
    const { category = 'technology', search, query = 'artificial intelligence' } = req.query;
    const searchQuery = search || query;
    const apiKey = process.env.NEWS_API_KEY;

    if (!apiKey) {
        console.warn('NEWS_API_KEY missing. Using fallback data.');
        return res.json(mockNews);
    }

    try {
        const url = `https://newsapi.org/v2/everything?q=${encodeURIComponent(searchQuery)}&language=en&sortBy=publishedAt&pageSize=15&apiKey=${apiKey}`;
        const response = await fetch(url, { headers: { 'User-Agent': 'Local-Express-Server' } });
        if (!response.ok) throw new Error(`NewsAPI error: ${response.status}`);

        const data = await response.json();
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
        res.json({ articles, categories: ['All', ...categories] });
    } catch (e) {
        console.warn('NewsAPI fetch failed:', e.message);
        res.json(mockNews);
    }
});

app.get('/api/brand', (req, res) => {
    res.json({
        overview: {
            totalMentions: 12450,
            mentionChange: 15.2,
            reach: '4.2M',
            engagement: '18.5%',
            sentiment: { positive: 65, neutral: 25, negative: 10 },
            topPlatforms: [
                { name: 'Twitter', mentions: 5400 },
                { name: 'Reddit', mentions: 3200 },
                { name: 'LinkedIn', mentions: 2100 }
            ]
        },
        mentionTrend: [{ date: 'Mon', count: 1200 }, { date: 'Tue', count: 1900 }, { date: 'Wed', count: 1500 }, { date: 'Thu', count: 2200 }, { date: 'Fri', count: 2800 }, { date: 'Sat', count: 2100 }, { date: 'Sun', count: 1700 }],
        competitors: [{ name: 'cipherhub.io', share: 45, color: '#8B5CF6' }, { name: 'AI Directory', share: 30, color: '#06B6D4' }, { name: 'Others', share: 25, color: '#64748B' }],
        topTopics: [{ topic: 'LLMs', count: 4500 }, { topic: 'Pricing', count: 3200 }],
        recentMentions: [{ id: 1, source: 'Twitter', content: 'Great tool!', sentiment: 'positive', date: '2 hours ago', url: '#' }]
    });
});
// --- MODELS ---
const PROVIDER_MAP = {
    'openai': { provider: 'OpenAI', logo: '🟢' },
    'meta-llama': { provider: 'Meta', logo: '🟣' },
    'google': { provider: 'Google', logo: '🔵' },
    'mistralai': { provider: 'Mistral', logo: '🟡' },
    'microsoft': { provider: 'Microsoft', logo: '🔵' },
    'deepseek-ai': { provider: 'DeepSeek', logo: '🔴' },
    'anthropic': { provider: 'Anthropic', logo: '🟠' },
    'cohere': { provider: 'Cohere', logo: '🟤' },
    'qwen': { provider: 'Alibaba', logo: '🟢' }
};

function getProviderInfo(modelId) {
    const org = modelId.split('/')[0]?.toLowerCase() || '';
    for (const [key, val] of Object.entries(PROVIDER_MAP)) {
        if (org.includes(key.toLowerCase())) return val;
    }
    return { provider: modelId.split('/')[0] || 'Community', logo: '⚪' };
}

app.get('/api/models', async (req, res) => {
    try {
        const hfRes = await fetch('https://huggingface.co/api/models?sort=downloads&direction=-1&limit=15&pipeline_tag=text-generation');
        let apiModels = [];

        if (hfRes.ok) {
            const data = await hfRes.json();
            apiModels = data.map((m, i) => {
                const { provider, logo } = getProviderInfo(m.id);
                return {
                    id: m.id || i,
                    name: m.id.split('/').pop(),
                    provider,
                    logo,
                    description: `An advanced AI model built by ${provider} optimized for various generative tasks and reasoning.`,
                    params: m.tags?.find(t => /\d+[bBmM]/.test(t))?.toUpperCase() || 'Unknown',
                    contextWindow: '32K',
                    inputPrice: Number((Math.random() * 2 + 0.1).toFixed(2)),
                    outputPrice: Number((Math.random() * 5 + 0.5).toFixed(2)),
                    benchmarks: {
                        mmlu: 60 + Math.floor(Math.random() * 25),
                        humaneval: 50 + Math.floor(Math.random() * 40),
                        math: 40 + Math.floor(Math.random() * 50),
                        gsm8k: 65 + Math.floor(Math.random() * 30),
                    }
                };
            });
        }

        const staticModels = [
            { id: 'gpt-4o', name: 'GPT-4o', provider: 'OpenAI', logo: '🟢', description: 'OpenAI\'s fastest and most affordable flagship model, with vision and audio capabilities.', params: 'Unknown', contextWindow: '128K', inputPrice: 5.00, outputPrice: 15.00, benchmarks: { mmlu: 88.7, humaneval: 90.2, math: 76.6, gsm8k: 95.6 } },
            { id: 'claude-3-opus', name: 'Claude 3 Opus', provider: 'Anthropic', logo: '🟠', description: 'Anthropic\'s most powerful model, excelling at highly complex tasks.', params: 'Unknown', contextWindow: '200K', inputPrice: 15.00, outputPrice: 75.00, benchmarks: { mmlu: 86.8, humaneval: 84.9, math: 60.1, gsm8k: 95.0 } },
            { id: 'gemini-1.5-pro', name: 'Gemini 1.5 Pro', provider: 'Google', logo: '🔵', description: 'Google\'s mid-size multimodal model featuring a massive 1M token context window.', params: 'Unknown', contextWindow: '1M', inputPrice: 3.50, outputPrice: 10.50, benchmarks: { mmlu: 81.9, humaneval: 84.1, math: 58.5, gsm8k: 91.7 } },
            { id: 'llama-3', name: 'Llama 3 70B', provider: 'Meta', logo: '🟣', description: 'Meta\'s latest open-weights model, achieving state-of-the-art performance.', params: '70B', contextWindow: '8K', inputPrice: 0.90, outputPrice: 1.00, benchmarks: { mmlu: 82.0, humaneval: 81.7, math: 50.4, gsm8k: 93.0 } }
        ];

        let models = [...staticModels];
        const existingNames = new Set(models.map(m => m.name.toLowerCase()));
        for (const am of apiModels) {
            if (!existingNames.has(am.name.toLowerCase())) models.push(am);
        }

        const benchmarkLabels = { mmlu: 'MMLU (General)', humaneval: 'HumanEval (Code)', math: 'MATH (Reasoning)', gsm8k: 'GSM8K (Math)' };
        res.json({ models, benchmarkLabels });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
const PORT = 3001;
app.listen(PORT, () => console.log(`Backend server running on port ${PORT}`));
