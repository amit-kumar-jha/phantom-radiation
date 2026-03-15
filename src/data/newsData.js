export const newsData = [
    {
        id: 1, title: 'OpenAI Launches GPT-5 with Revolutionary Reasoning Capabilities',
        excerpt: 'The next generation of GPT models demonstrates unprecedented performance in complex reasoning, mathematics, and scientific analysis.',
        content: `OpenAI has officially launched GPT-5, marking a significant leap in artificial intelligence capabilities. The new model demonstrates unprecedented performance across multiple benchmarks, particularly in complex reasoning tasks.\n\nThe model introduces a novel "deep thinking" architecture that allows it to break down complex problems into sub-components, reason through each step, and synthesize coherent solutions. In early testing, GPT-5 has shown remarkable improvements in mathematical problem-solving, scientific reasoning, and code generation.\n\n"This represents a fundamental shift in how AI models approach complex tasks," said OpenAI's CTO in the announcement. "GPT-5 doesn't just predict the next token — it genuinely reasons through problems."\n\nKey improvements include a 50% increase in context window to 256K tokens, native multimodal understanding across text, images, audio, and video, and significantly reduced hallucination rates. The model also introduces new safety measures, including built-in factuality checking and uncertainty quantification.\n\nGPT-5 is available immediately through the API and will roll out to ChatGPT Plus subscribers over the next week.`,
        category: 'LLM', image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600',
        readTime: 5, date: '2026-03-10', author: 'Sarah Chen',
        tags: ['OpenAI', 'GPT-5', 'LLM', 'Reasoning']
    },
    {
        id: 2, title: 'Google DeepMind\'s Robot Learns to Cook Full Meals Autonomously',
        excerpt: 'Breakthrough in robotics as DeepMind\'s latest robot demonstrates ability to follow recipes and prepare complete meals without human intervention.',
        content: `Google DeepMind has unveiled a groundbreaking robotic system capable of autonomously preparing complete meals by following recipes. The system, dubbed "ChefBot," combines advanced computer vision, natural language understanding, and precise motor control.\n\nThe robot can read recipes from cookbooks or online sources, identify and select appropriate ingredients from a stocked kitchen, and execute complex cooking techniques including chopping, sautéing, and plating.\n\nIn demonstrations, ChefBot successfully prepared over 50 different dishes ranging from simple salads to complex multi-course meals. The system achieves this through a combination of large language models for instruction understanding and reinforcement learning for physical task execution.\n\n"What makes this special is the generalization capability," explained the lead researcher. "The robot can adapt to new recipes it has never seen before, handle ingredient substitutions, and even adjust cooking times based on visual feedback."\n\nThe technology is still in the research phase, but DeepMind envisions applications in assisted living, restaurant automation, and food production.`,
        category: 'Robotics', image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600',
        readTime: 4, date: '2026-03-09', author: 'Marcus Williams',
        tags: ['DeepMind', 'Robotics', 'Automation']
    },
    {
        id: 3, title: 'Anthropic Raises $5B in Record-Breaking Funding Round',
        excerpt: 'AI safety company Anthropic secures the largest AI funding round in history, valuing the company at $80 billion.',
        content: `Anthropic, the AI safety company behind Claude, has closed a record-breaking $5 billion funding round led by Google, Salesforce, and a consortium of major institutional investors. The round values the company at approximately $80 billion.\n\nThe funding will be used to accelerate research on AI safety and alignment, expand computational infrastructure, and develop the next generation of Claude models. Anthropic has emphasized that a significant portion will be directed toward safety research.\n\n"As AI systems become more capable, ensuring they remain safe and aligned with human values becomes increasingly critical," said Anthropic's CEO. "This funding allows us to pursue both capability and safety research at the scale required."\n\nThe company has seen explosive growth, with Claude's user base growing 400% year-over-year. Enterprise customers now include 40% of Fortune 500 companies.\n\nIndustry analysts note that this round signals continued strong investor confidence in AI despite market fluctuations, particularly for companies with a strong focus on safety and reliability.`,
        category: 'Business', image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600',
        readTime: 3, date: '2026-03-08', author: 'Emma Rodriguez',
        tags: ['Anthropic', 'Funding', 'AI Safety', 'Business']
    },
    {
        id: 4, title: 'New Research: AI Models Show Emergent Mathematical Reasoning',
        excerpt: 'Groundbreaking paper demonstrates that large language models develop genuine mathematical understanding, not just pattern matching.',
        content: `A team of researchers from MIT, Stanford, and the Allen Institute for AI has published a groundbreaking paper demonstrating that large language models can develop genuine mathematical reasoning capabilities that go beyond simple pattern matching.\n\nThe study, published in Nature, used novel evaluation frameworks to distinguish between memorized solutions and genuine mathematical reasoning. The researchers found that models above a certain scale threshold develop the ability to solve mathematical problems using logical steps they were never explicitly trained on.\n\n"We designed evaluations using entirely novel mathematical constructs that don't exist in any training data," explained the lead author. "The fact that these models can reason about completely new mathematical structures suggests something deeper than memorization is occurring."\n\nThe findings have significant implications for AI development and the ongoing debate about whether AI systems truly "understand" or merely "mimic." The researchers propose a new framework for evaluating mathematical reasoning that could become a standard benchmark.`,
        category: 'Research', image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600',
        readTime: 6, date: '2026-03-07', author: 'Dr. Alan Thomas',
        tags: ['Research', 'Mathematics', 'Reasoning', 'LLM']
    },
    {
        id: 5, title: 'Apple Intelligence 3.0 Brings On-Device AI to All Apple Products',
        excerpt: 'Apple announces major expansion of AI capabilities with on-device models running on iPhone, iPad, Mac, and Vision Pro.',
        content: `Apple has announced Apple Intelligence 3.0, a major update that brings advanced AI capabilities across all Apple devices. The update features new on-device models that can handle complex tasks without cloud connectivity.\n\nKey features include real-time language translation in 40 languages, advanced photo and video editing with AI, smart home automation powered by natural language, and deep integration with third-party apps through an expanded SiriKit.\n\nThe most notable improvement is the new on-device model architecture that allows even the iPhone to run sophisticated AI models locally. Apple claims this preserves user privacy while delivering performance comparable to cloud-based solutions.\n\n"We believe the future of AI is personal, private, and on-device," said Apple's SVP of Software Engineering. "With Apple Intelligence 3.0, we're making this vision a reality for hundreds of millions of users."\n\nThe update will be available as a free software update for all devices with an A17 Pro chip or later.`,
        category: 'Products', image: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600',
        readTime: 4, date: '2026-03-06', author: 'Jason Park',
        tags: ['Apple', 'On-Device AI', 'Products']
    },
    {
        id: 6, title: 'EU Passes Comprehensive AI Regulation Framework',
        excerpt: 'The European Union finalizes the AI Act implementation with detailed guidelines for high-risk AI systems.',
        content: `The European Union has finalized the implementation guidelines for the AI Act, establishing the world's most comprehensive regulatory framework for artificial intelligence. The guidelines provide detailed requirements for companies developing and deploying AI systems within the EU.\n\nThe framework categorizes AI systems into risk tiers, with high-risk applications in healthcare, law enforcement, and financial services facing the strictest requirements. Companies must now provide detailed documentation of their AI systems, including training data sources, bias evaluations, and performance metrics.\n\nNew requirements include mandatory human oversight for high-risk decisions, explainability requirements for all AI-generated content, regular bias audits and fairness evaluations, and transparency labels for AI-generated media.\n\nThe regulation takes full effect in phases, with the first compliance deadline set for September 2026. Companies found in violation face fines of up to 7% of global revenue.`,
        category: 'Business', image: 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=600',
        readTime: 5, date: '2026-03-05', author: 'Clara Mueller',
        tags: ['EU', 'Regulation', 'Policy', 'AI Act']
    },
    {
        id: 7, title: 'Meta Releases Llama 4: Open Source AI Reaches New Heights',
        excerpt: 'Meta\'s latest open-source model rivals proprietary solutions in benchmarks while remaining freely available.',
        content: `Meta has released Llama 4, the latest iteration of its open-source large language model family. The model achieves benchmark scores competitive with leading proprietary models while remaining freely available under an open license.\n\nLlama 4 comes in three sizes: 8B, 70B, and 405B parameters. The largest variant matches or exceeds GPT-4 class models on most standard benchmarks, including MMLU, HumanEval, and MATH.\n\nKey innovations include a new mixture-of-experts architecture that improves efficiency by 40%, native support for 24 languages, built-in function calling and tool use capabilities, and advanced safety training using constitutional AI principles.\n\n"Open-source AI is critical for democratizing access to this transformative technology," said Meta's Chief AI Scientist. "Llama 4 proves that open models can compete with the best proprietary offerings."\n\nThe release has been met with enthusiasm from the developer community, with several companies already announcing plans to fine-tune the model for specialized applications.`,
        category: 'LLM', image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600',
        readTime: 4, date: '2026-03-04', author: 'David Kim',
        tags: ['Meta', 'Llama', 'Open Source', 'LLM']
    },
    {
        id: 8, title: 'AI-Powered Drug Discovery Achieves First FDA Approval',
        excerpt: 'A drug entirely designed by AI receives FDA approval, marking a historic milestone in pharmaceutical research.',
        content: `In a historic first, a drug entirely designed by artificial intelligence has received FDA approval. The drug, developed by Insilico Medicine using their AI-powered drug discovery platform, treats idiopathic pulmonary fibrosis (IPF).\n\nThe AI system designed the molecule, predicted its properties, and optimized it through virtual screening — reducing the typical drug discovery timeline from 5-7 years to just 18 months. The total development cost was approximately $2.6 million, compared to the industry average of over $2 billion.\n\n"This approval validates the enormous potential of AI in drug discovery," said Insilico's CEO. "We're entering an era where AI can dramatically accelerate the development of life-saving medications while reducing costs by orders of magnitude."\n\nThe FDA noted that the drug demonstrated strong efficacy and safety profiles in clinical trials, with the AI-designed molecule showing fewer side effects than existing treatments. Several other AI-designed drugs are currently in late-stage clinical trials.`,
        category: 'Research', image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=600',
        readTime: 5, date: '2026-03-03', author: 'Dr. Lisa Wang',
        tags: ['Drug Discovery', 'Healthcare', 'FDA', 'Research']
    },
    {
        id: 9, title: 'Sora 2.0: OpenAI\'s Video Model Now Generates Feature-Length Content',
        excerpt: 'OpenAI releases a major update to Sora, enabling generation of coherent 30-minute video sequences.',
        content: `OpenAI has released Sora 2.0, a dramatic upgrade to its AI video generation model. The new version can generate coherent video sequences up to 30 minutes in length, a massive leap from the original model's one-minute limit.\n\nSora 2.0 introduces several groundbreaking features including character consistency across scenes, natural dialogue with lip sync, complex camera movements and cinematographic techniques, and style transfer from reference videos.\n\nThe model achieves this through a new "narrative coherence" architecture that maintains story consistency across extended sequences. Early users have already produced short films, music videos, and educational content using the tool.\n\n"We're approaching a future where anyone can be a filmmaker," said OpenAI's head of applied research. "Sora 2.0 democratizes video production in a way that was unimaginable just two years ago."\n\nThe release has sparked debate in the entertainment industry about the impact of AI-generated video content, with several studios exploring hybrid human-AI production workflows.`,
        category: 'Products', image: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?w=600',
        readTime: 4, date: '2026-03-02', author: 'Alex Turner',
        tags: ['OpenAI', 'Sora', 'Video', 'Generation']
    },
    {
        id: 10, title: 'NVIDIA Unveils Blackwell Ultra GPU: 10x AI Performance Leap',
        excerpt: 'NVIDIA\'s next-generation AI chip promises to transform the economics of training and inference.',
        content: `NVIDIA has unveiled the Blackwell Ultra GPU, its next-generation AI accelerator that delivers a 10x performance improvement over the current Hopper architecture for AI training and inference workloads.\n\nThe chip features 208 billion transistors manufactured on TSMC's 3nm process, 192GB of HBM4 memory with 12TB/s bandwidth, native support for FP4 precision, and new "transformer engine" optimizations.\n\nNVIDIA CEO Jensen Huang presented the chip at GTC 2026, emphasizing its potential to dramatically reduce the cost of AI training. "What took a week to train on Hopper takes less than a day on Blackwell Ultra," Huang stated.\n\nThe GPU also introduces a new inference optimization mode that makes large model serving up to 30x more efficient, potentially making AI services significantly cheaper for end users.\n\nMajor cloud providers including AWS, Azure, and Google Cloud have already committed to deploying Blackwell Ultra instances in their data centers by Q3 2026.`,
        category: 'Products', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600',
        readTime: 4, date: '2026-03-01', author: 'Michael Brown',
        tags: ['NVIDIA', 'Hardware', 'GPU', 'Training']
    },
    {
        id: 11, title: 'AI Tutors Outperform Human Teachers in Randomized Study',
        excerpt: 'A large-scale study finds AI tutoring systems produce better learning outcomes than traditional one-on-one tutoring.',
        content: `A large-scale randomized controlled trial published in Science has found that AI-powered tutoring systems produce significantly better learning outcomes than traditional one-on-one human tutoring.\n\nThe study, conducted across 200 schools with 50,000 students, compared three groups: students using AI tutors, students with human tutors, and a control group with standard classroom instruction only.\n\nStudents using AI tutors showed a 35% improvement in test scores compared to the control group, while human-tutored students showed a 25% improvement. The AI tutors were particularly effective for students who were behind grade level.\n\nResearchers attribute the AI advantage to several factors: infinite patience, perfect adaptation to individual learning pace, 24/7 availability, and the ability to identify and address specific knowledge gaps in real-time.\n\n"This doesn't mean we should replace human teachers," cautioned the study's lead author. "Rather, it suggests that AI tutors can be a powerful complement to human instruction, particularly for personalized practice and review."`,
        category: 'Research', image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600',
        readTime: 5, date: '2026-02-28', author: 'Prof. Maria Santos',
        tags: ['Education', 'Study', 'Tutoring', 'Research']
    },
    {
        id: 12, title: 'Microsoft Copilot Gets Autonomous Agent Mode',
        excerpt: 'Microsoft introduces agent capabilities to Copilot, allowing it to independently complete multi-step tasks.',
        content: `Microsoft has launched a major update to Copilot that introduces autonomous agent capabilities. The new "Agent Mode" allows Copilot to independently plan and execute multi-step tasks across Microsoft 365 applications.\n\nUsers can now give Copilot complex instructions like "Analyze last quarter's sales data, create a presentation with key insights, and schedule a meeting with the sales team to review it." Copilot will break down the task, execute each step, and provide a summary of completed actions.\n\nThe agent mode works across Word, Excel, PowerPoint, Outlook, and Teams, maintaining context across applications. It can also interact with third-party apps through Microsoft Graph connectors.\n\n"We're moving from AI assistants that respond to commands to AI agents that can independently accomplish goals," said Microsoft's CEO. "This is the next evolution of productivity software."`,
        category: 'Products', image: 'https://images.unsplash.com/photo-1633419461186-7d40a38105ec?w=600',
        readTime: 3, date: '2026-02-27', author: 'Jennifer Lee',
        tags: ['Microsoft', 'Copilot', 'Agents', 'Productivity']
    },
    {
        id: 13, title: 'China\'s DeepSeek-V4 Tops Global AI Benchmarks',
        excerpt: 'DeepSeek\'s latest model achieves state-of-the-art results across major benchmarks, intensifying the global AI race.',
        content: `Chinese AI lab DeepSeek has released DeepSeek-V4, a model that achieves state-of-the-art results across multiple major AI benchmarks, including MMLU, GSM8K, and HumanEval.\n\nThe model uses a novel mixture-of-experts architecture with 671 billion total parameters but only activates 37 billion per token, making it highly efficient. It was trained using significantly less compute than comparable models from Western labs.\n\nDeepSeek-V4 particularly excels in mathematical reasoning and code generation, surpassing all existing models on the MATH benchmark with a score of 92.4%. The model also demonstrates strong multilingual capabilities across 30 languages.\n\nThe release has intensified discussions about the global AI race, with analysts noting that Chinese labs are rapidly closing the capability gap with Western counterparts while using more efficient training methodologies.`,
        category: 'LLM', image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600',
        readTime: 4, date: '2026-02-26', author: 'James Liu',
        tags: ['DeepSeek', 'China', 'Benchmarks', 'LLM']
    },
    {
        id: 14, title: 'Humanoid Robots Begin Warehouse Deployment at Amazon',
        excerpt: 'Amazon starts deploying humanoid robots in fulfillment centers, marking a new era in automation.',
        content: `Amazon has begun deploying humanoid robots from Figure AI in select fulfillment centers across the United States. The robots, called Figure 02+, work alongside human employees to pick, pack, and sort packages.\n\nUnlike traditional warehouse robots that operate on fixed rails or designated paths, these humanoid robots can navigate the same spaces as human workers, use the same tools, and adapt to changing warehouse configurations.\n\nEach robot can operate for up to 16 hours on a single charge and handle items weighing up to 50 pounds. They use a combination of computer vision and large language models to understand and execute verbal instructions from supervisors.\n\n"These robots are designed to augment our workforce, not replace them," said Amazon's VP of Robotics. "They handle the most physically demanding and repetitive tasks, allowing our human employees to focus on more complex work."\n\nThe initial deployment covers 5 fulfillment centers, with plans to expand to 50 locations by year's end.`,
        category: 'Robotics', image: 'https://images.unsplash.com/photo-1563207153-f403bf289096?w=600',
        readTime: 4, date: '2026-02-25', author: 'Rachel Green',
        tags: ['Amazon', 'Robotics', 'Automation', 'Warehouse']
    },
    {
        id: 15, title: 'AI Weather Prediction Now More Accurate Than Traditional Models',
        excerpt: 'Google\'s GenCast AI achieves breakthrough in weather forecasting, outperforming conventional supercomputer models.',
        content: `Google's GenCast AI weather prediction system has been independently verified to outperform the European Centre for Medium-Range Weather Forecasts (ECMWF) model, considered the gold standard in weather prediction.\n\nGenCast achieved superior accuracy for forecasts up to 15 days ahead, with particularly strong improvements in predicting extreme weather events such as hurricanes, heat waves, and atmospheric rivers.\n\nThe AI model processes global weather data in minutes compared to the hours required by traditional numerical weather prediction models running on supercomputers. This speed advantage enables rapid ensemble forecasting, where hundreds of possible weather scenarios can be evaluated simultaneously.\n\n"More accurate and faster weather prediction saves lives," said the project lead. "Every additional hour of warning time for extreme weather events translates to better emergency preparedness and reduced casualties."\n\nSeveral national weather services are now evaluating GenCast for operational deployment alongside their existing forecasting systems.`,
        category: 'Research', image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600',
        readTime: 4, date: '2026-02-24', author: 'Dr. Tom Bradley',
        tags: ['Google', 'Weather', 'Prediction', 'Research']
    }
];

export const newsCategories = ['All', 'LLM', 'Robotics', 'Business', 'Research', 'Products'];
