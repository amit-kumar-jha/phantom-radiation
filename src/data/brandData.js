export const brandData = {
    overview: {
        totalMentions: 48250,
        mentionChange: 12.5,
        sentiment: { positive: 68, neutral: 22, negative: 10 },
        topPlatforms: [
            { name: 'Twitter/X', mentions: 18500 },
            { name: 'Reddit', mentions: 12300 },
            { name: 'LinkedIn', mentions: 8400 },
            { name: 'YouTube', mentions: 5200 },
            { name: 'News Sites', mentions: 3850 }
        ]
    },
    mentionTrend: [
        { month: 'Sep', mentions: 28000, sentiment: 62 },
        { month: 'Oct', mentions: 31000, sentiment: 64 },
        { month: 'Nov', mentions: 35000, sentiment: 65 },
        { month: 'Dec', mentions: 38000, sentiment: 63 },
        { month: 'Jan', mentions: 42000, sentiment: 66 },
        { month: 'Feb', mentions: 45000, sentiment: 67 },
        { month: 'Mar', mentions: 48250, sentiment: 68 }
    ],
    competitors: [
        { name: 'ChatGPT', mentions: 185000, sentiment: 72, color: '#10B981' },
        { name: 'Claude', mentions: 48250, sentiment: 68, color: '#7C3AED' },
        { name: 'Gemini', mentions: 95000, sentiment: 58, color: '#3B82F6' },
        { name: 'Llama', mentions: 62000, sentiment: 75, color: '#F59E0B' },
        { name: 'Grok', mentions: 38000, sentiment: 55, color: '#EF4444' },
        { name: 'Mistral', mentions: 28000, sentiment: 70, color: '#06B6D4' }
    ],
    topTopics: [
        { topic: 'AI Safety', count: 8400, change: 18 },
        { topic: 'Code Generation', count: 7200, change: 25 },
        { topic: 'Enterprise AI', count: 6800, change: 15 },
        { topic: 'API Pricing', count: 5100, change: -5 },
        { topic: 'Model Comparison', count: 4800, change: 32 },
        { topic: 'AI Regulation', count: 3900, change: 8 }
    ],
    recentMentions: [
        { platform: 'Twitter/X', text: 'Claude 4 Opus just solved a problem I\'ve been stuck on for 2 weeks. This is incredible. 🤯', sentiment: 'positive', time: '2h ago', author: '@dev_sarah' },
        { platform: 'Reddit', text: 'Switched our entire team from GPT-4 to Claude and our code review quality improved noticeably.', sentiment: 'positive', time: '4h ago', author: 'u/techleadml' },
        { platform: 'LinkedIn', text: 'Anthropic\'s approach to responsible AI development is exactly what the industry needs right now.', sentiment: 'positive', time: '6h ago', author: 'AI Ethics Researcher' },
        { platform: 'Twitter/X', text: 'Claude API pricing is getting a bit steep for our startup\'s usage. Hoping for more competitive tiers.', sentiment: 'negative', time: '8h ago', author: '@startup_ai' },
        { platform: 'News', text: 'Anthropic raises $5B in historic round, doubling down on safety research.', sentiment: 'neutral', time: '12h ago', author: 'TechCrunch' }
    ]
};
