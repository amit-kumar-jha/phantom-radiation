export default function handler(req, res) {
    if (req.method !== 'GET') return res.status(405).json({ error: 'Method Not Allowed' });

    // Mock analytics data for the Brand Intelligence page
    const brandData = {
        overview: {
            totalMentions: 12450,
            mentionChange: 15.2,
            reach: '4.2M',
            engagement: '18.5%',
            sentiment: {
                positive: 65,
                neutral: 25,
                negative: 10
            },
            topPlatforms: [
                { name: 'Twitter', mentions: 5400 },
                { name: 'Reddit', mentions: 3200 },
                { name: 'LinkedIn', mentions: 2100 }
            ]
        },
        mentionTrend: [
            { date: 'Mon', count: 1200 },
            { date: 'Tue', count: 1900 },
            { date: 'Wed', count: 1500 },
            { date: 'Thu', count: 2200 },
            { date: 'Fri', count: 2800 },
            { date: 'Sat', count: 2100 },
            { date: 'Sun', count: 1700 }
        ],
        competitors: [
            { name: 'cipherhub.io', share: 45, color: '#8B5CF6' },
            { name: 'AI Directory', share: 30, color: '#06B6D4' },
            { name: 'TopAI Tools', share: 15, color: '#F59E0B' },
            { name: 'Others', share: 10, color: '#64748B' }
        ],
        topTopics: [
            { topic: 'LLMs', count: 4500 },
            { topic: 'Pricing', count: 3200 },
            { topic: 'Integration', count: 2800 },
            { topic: 'Performance', count: 1950 }
        ],
        recentMentions: [
            { id: 1, source: 'Twitter', content: 'Just discovered cipherhub.io. It\'s the best AI directory out there! 🔥', sentiment: 'positive', date: '2 hours ago', url: '#' },
            { id: 2, source: 'Reddit', content: 'Has anyone compared the new Gemini models on cipherhub? Their benchmarks page is super useful.', sentiment: 'positive', date: '5 hours ago', url: '#' },
            { id: 3, source: 'Hacker News', content: 'The UI is a bit dark for my taste, but the data is solid.', sentiment: 'neutral', date: '1 day ago', url: '#' }
        ]
    };

    res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate');
    return res.status(200).json(brandData);
}
