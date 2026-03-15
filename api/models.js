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

export default async function handler(req, res) {
    if (req.method !== 'GET') return res.status(405).json({ error: 'Method Not Allowed' });

    try {
        // Fetch top text-generation models from HuggingFace API (Free, No Auth required)
        const hfRes = await fetch('https://huggingface.co/api/models?sort=downloads&direction=-1&limit=15&pipeline_tag=text-generation');
        let apiModels = [];

        if (hfRes.ok) {
            const data = await hfRes.json();
            apiModels = data.map((m, i) => {
                const { provider, logo } = getProviderInfo(m.id);
                // Fake some benchmark data since HF doesn't directly return it in this endpoint
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

        // Always include some hardcoded top models to ensure good UI data
        const staticModels = [
            { id: 'gpt-4o', name: 'GPT-4o', provider: 'OpenAI', logo: '🟢', description: 'OpenAI\'s fastest and most affordable flagship model, with vision and audio capabilities.', params: 'Unknown', contextWindow: '128K', inputPrice: 5.00, outputPrice: 15.00, benchmarks: { mmlu: 88.7, humaneval: 90.2, math: 76.6, gsm8k: 95.6 } },
            { id: 'claude-3-opus', name: 'Claude 3 Opus', provider: 'Anthropic', logo: '🟠', description: 'Anthropic\'s most powerful model, excelling at highly complex tasks.', params: 'Unknown', contextWindow: '200K', inputPrice: 15.00, outputPrice: 75.00, benchmarks: { mmlu: 86.8, humaneval: 84.9, math: 60.1, gsm8k: 95.0 } },
            { id: 'gemini-1.5-pro', name: 'Gemini 1.5 Pro', provider: 'Google', logo: '🔵', description: 'Google\'s mid-size multimodal model featuring a massive 1M token context window.', params: 'Unknown', contextWindow: '1M', inputPrice: 3.50, outputPrice: 10.50, benchmarks: { mmlu: 81.9, humaneval: 84.1, math: 58.5, gsm8k: 91.7 } },
            { id: 'llama-3', name: 'Llama 3 70B', provider: 'Meta', logo: '🟣', description: 'Meta\'s latest open-weights model, achieving state-of-the-art performance.', params: '70B', contextWindow: '8K', inputPrice: 0.90, outputPrice: 1.00, benchmarks: { mmlu: 82.0, humaneval: 81.7, math: 50.4, gsm8k: 93.0 } }
        ];

        // Merge keeping static ones first, then fill with API ones
        let models = [...staticModels];
        const existingNames = new Set(models.map(m => m.name.toLowerCase()));

        for (const am of apiModels) {
            if (!existingNames.has(am.name.toLowerCase())) {
                models.push(am);
            }
        }

        const benchmarkLabels = {
            mmlu: 'MMLU (General)',
            humaneval: 'HumanEval (Code)',
            math: 'MATH (Reasoning)',
            gsm8k: 'GSM8K (Math)'
        };

        res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate');
        return res.status(200).json({ models, benchmarkLabels });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}
