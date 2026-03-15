export const modelsData = [
    {
        id: 1, name: 'GPT-4o', provider: 'OpenAI', logo: '🟢',
        params: '~1.8T (est)', contextWindow: '128K',
        inputPrice: 2.50, outputPrice: 10.00,
        benchmarks: { mmlu: 88.7, coding: 90.2, reasoning: 86.4, multimodal: 92.1 },
        description: 'Flagship multimodal model with native vision, audio, and text capabilities',
        released: '2025-05'
    },
    {
        id: 2, name: 'GPT-5', provider: 'OpenAI', logo: '🟢',
        params: '~3T (est)', contextWindow: '256K',
        inputPrice: 5.00, outputPrice: 15.00,
        benchmarks: { mmlu: 93.2, coding: 94.5, reasoning: 95.1, multimodal: 95.8 },
        description: 'Next-gen model with deep reasoning and unprecedented multimodal understanding',
        released: '2026-03'
    },
    {
        id: 3, name: 'Claude 4 Sonnet', provider: 'Anthropic', logo: '🟠',
        params: '~800B (est)', contextWindow: '200K',
        inputPrice: 3.00, outputPrice: 15.00,
        benchmarks: { mmlu: 92.1, coding: 93.8, reasoning: 94.2, multimodal: 90.5 },
        description: 'Advanced reasoning model with industry-leading safety and long context',
        released: '2026-02'
    },
    {
        id: 4, name: 'Claude 4 Opus', provider: 'Anthropic', logo: '🟠',
        params: '~2T (est)', contextWindow: '200K',
        inputPrice: 15.00, outputPrice: 75.00,
        benchmarks: { mmlu: 95.3, coding: 96.1, reasoning: 97.2, multimodal: 93.4 },
        description: 'Most capable Claude model for complex analysis and creative tasks',
        released: '2026-02'
    },
    {
        id: 5, name: 'Gemini 2.0 Ultra', provider: 'Google', logo: '🔵',
        params: '~1.5T (est)', contextWindow: '2M',
        inputPrice: 3.50, outputPrice: 10.50,
        benchmarks: { mmlu: 91.8, coding: 91.3, reasoning: 90.7, multimodal: 94.2 },
        description: 'Google\'s most powerful model with 2M token context and native multimodal',
        released: '2026-01'
    },
    {
        id: 6, name: 'Gemini 2.0 Flash', provider: 'Google', logo: '🔵',
        params: '~400B (est)', contextWindow: '1M',
        inputPrice: 0.075, outputPrice: 0.30,
        benchmarks: { mmlu: 85.4, coding: 84.7, reasoning: 83.2, multimodal: 88.1 },
        description: 'Fast and cost-efficient model for high-throughput applications',
        released: '2026-01'
    },
    {
        id: 7, name: 'Llama 4 405B', provider: 'Meta', logo: '🟣',
        params: '405B', contextWindow: '128K',
        inputPrice: 0, outputPrice: 0,
        benchmarks: { mmlu: 89.2, coding: 88.5, reasoning: 87.8, multimodal: 82.3 },
        description: 'Largest open-source model rivaling proprietary solutions',
        released: '2026-03'
    },
    {
        id: 8, name: 'Llama 4 70B', provider: 'Meta', logo: '🟣',
        params: '70B', contextWindow: '128K',
        inputPrice: 0, outputPrice: 0,
        benchmarks: { mmlu: 82.1, coding: 80.4, reasoning: 79.6, multimodal: 74.8 },
        description: 'Efficient open-source model great for fine-tuning and deployment',
        released: '2026-03'
    },
    {
        id: 9, name: 'DeepSeek-V4', provider: 'DeepSeek', logo: '🔴',
        params: '671B MoE', contextWindow: '128K',
        inputPrice: 0.14, outputPrice: 0.28,
        benchmarks: { mmlu: 91.5, coding: 92.4, reasoning: 91.8, multimodal: 85.6 },
        description: 'Efficient MoE model with exceptional math and coding performance',
        released: '2026-02'
    },
    {
        id: 10, name: 'Grok-3', provider: 'xAI', logo: '⚫',
        params: '~1T (est)', contextWindow: '128K',
        inputPrice: 3.00, outputPrice: 15.00,
        benchmarks: { mmlu: 88.4, coding: 87.9, reasoning: 88.1, multimodal: 86.2 },
        description: 'xAI\'s conversational model with real-time X data access',
        released: '2025-12'
    },
    {
        id: 11, name: 'Mistral Large 3', provider: 'Mistral', logo: '🟡',
        params: '123B', contextWindow: '128K',
        inputPrice: 2.00, outputPrice: 6.00,
        benchmarks: { mmlu: 86.7, coding: 85.3, reasoning: 84.9, multimodal: 80.5 },
        description: 'European-built enterprise model with strong multilingual support',
        released: '2026-01'
    },
    {
        id: 12, name: 'Command R+', provider: 'Cohere', logo: '🟤',
        params: '104B', contextWindow: '128K',
        inputPrice: 2.50, outputPrice: 10.00,
        benchmarks: { mmlu: 84.2, coding: 78.6, reasoning: 82.1, multimodal: 0 },
        description: 'Enterprise-focused model optimized for RAG and tool use',
        released: '2025-11'
    },
];

export const benchmarkCategories = ['mmlu', 'coding', 'reasoning', 'multimodal'];
export const benchmarkLabels = {
    mmlu: 'MMLU Score',
    coding: 'Coding (HumanEval)',
    reasoning: 'Reasoning',
    multimodal: 'Multimodal'
};
