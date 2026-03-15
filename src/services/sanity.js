import { createClient } from '@sanity/client';

console.log('Sanity Client Config:', {
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
  dataset: import.meta.env.VITE_SANITY_DATASET,
  useCdn: false
});

export const client = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
  dataset: import.meta.env.VITE_SANITY_DATASET || 'production',
  useCdn: false, // set to `false` to bypass the edge cache and avoid common CDN CORS issues
  apiVersion: '2024-03-15', // use current date (YYYY-MM-DD) to target the latest API version
});

// Helper function to fetch tools
export async function getSanityTools() {
  const query = `*[_type == "tool"] {
    _id,
    name,
    category,
    description,
    pricing,
    rating,
    tags,
    "logo": logoUrl,
    link,
    createdAt
  } | order(rating desc, createdAt desc)`;
  try {
    const tools = await client.fetch(query);
    if (tools && tools.length > 0) {
      console.log(`Successfully fetched ${tools.length} tools from Sanity.`);
      return tools;
    } else {
      console.warn('Fetched from Sanity but dataset appears empty:', tools);
    }
  } catch (e) {
    console.error('Failed to fetch from Sanity:', e);
  }

  // Fallback Mock Tools for UI preview when dataset is empty
  console.warn('Returning fallback tools because Sanity dataset is empty or unreachable.');
  return [
    {
      _id: "mock1",
      name: "ChatGPT Plus",
      category: "LLM",
      description: "Advanced conversational AI by OpenAI with vision, voice, and data analysis capabilities.",
      pricing: "Premium",
      rating: 4.9,
      tags: ["OpenAI", "Chat", "Vision"],
      logo: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg",
      link: "https://chat.openai.com",
      createdAt: new Date().toISOString()
    },
    {
      _id: "mock2",
      name: "Midjourney v6",
      category: "Image",
      description: "High-quality AI image generation accessible via Discord with incredible photorealism.",
      pricing: "Paid",
      rating: 4.8,
      tags: ["Art", "Design", "Discord"],
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Midjourney_Emblem.png/600px-Midjourney_Emblem.png",
      link: "https://midjourney.com",
      createdAt: new Date().toISOString()
    },
    {
      _id: "mock3",
      name: "GitHub Copilot",
      category: "Coding",
      description: "Your AI pair programmer that helps you write code faster with less work.",
      pricing: "Paid",
      rating: 4.7,
      tags: ["Development", "IDE", "Microsoft"],
      logo: "https://github.githubassets.com/images/modules/site/copilot/cp-icon-gray.svg",
      link: "https://github.com/features/copilot",
      createdAt: new Date().toISOString()
    },
    {
      _id: "mock4",
      name: "Claude 3 Opus",
      category: "LLM",
      description: "Anthropic's most powerful model, excelling at complex tasks, reasoning, and coding.",
      pricing: "Premium",
      rating: 4.9,
      tags: ["Anthropic", "Reasoning", "Writing"],
      logo: "https://upload.wikimedia.org/wikipedia/commons/8/87/Anthropic_logo.svg",
      link: "https://claude.ai",
      createdAt: new Date().toISOString()
    },
    {
      _id: "mock5",
      name: "Synthesia",
      category: "Video",
      description: "Create professional AI videos from text in 130+ languages.",
      pricing: "Paid",
      rating: 4.6,
      tags: ["Video", "Avatars", "Marketing"],
      logo: "https://assets-global.website-files.com/61dc0796f359b6145bc06ea6/61dc0796f359b6b772c06eb7_Synthesia_Logo.svg",
      link: "https://synthesia.io",
      createdAt: new Date().toISOString()
    },
    {
      _id: "mock6",
      name: "Hugging Face Spaces",
      category: "Developer Tools",
      description: "Build, host, and share ML apps and models with the community.",
      pricing: "Freemium",
      rating: 4.8,
      tags: ["Hosting", "Community", "Models"],
      logo: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg",
      link: "https://huggingface.co",
      createdAt: new Date().toISOString()
    },
    {
      _id: "mock7",
      name: "Notion AI",
      category: "Productivity",
      description: "Work faster. Write better. Think bigger. Notion's connected workspace enhanced by AI.",
      pricing: "Paid",
      rating: 4.8,
      tags: ["Workspace", "Writing", "Organization"],
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png",
      link: "https://notion.so/product/ai",
      createdAt: new Date().toISOString()
    },
    {
      _id: "mock8",
      name: "Gamma",
      category: "Design",
      description: "A new medium for presenting ideas. Powered by AI. Beautiful, engaging content with none of the formatting and design work.",
      pricing: "Freemium",
      rating: 4.7,
      tags: ["Presentations", "Slides", "Docs"],
      logo: "https://gamma.app/apple-touch-icon.png",
      link: "https://gamma.app",
      createdAt: new Date().toISOString()
    },
    {
      _id: "mock9",
      name: "Perplexity AI",
      category: "Research",
      description: "Where knowledge begins. An AI-powered search engine that provides cited answers to your questions.",
      pricing: "Premium",
      rating: 4.9,
      tags: ["Search", "Research", "Answers"],
      logo: "https://upload.wikimedia.org/wikipedia/commons/0/07/Perplexity_AI_logo.svg",
      link: "https://perplexity.ai",
      createdAt: new Date().toISOString()
    },
    {
      _id: "mock10",
      name: "Cursor",
      category: "Coding",
      description: "The AI Code Editor. Built to make you extraordinarily productive, Cursor is the best way to code with AI.",
      pricing: "Paid",
      rating: 4.9,
      tags: ["IDE", "Development", "Copilot"],
      logo: "https://www.cursor.com/favicon.ico",
      link: "https://cursor.com",
      createdAt: new Date().toISOString()
    },
    {
      _id: "mock11",
      name: "Canva Magic Studio",
      category: "Design",
      description: "All the power of AI. All in one place. Magic Studio brings the best AI tools together.",
      pricing: "Freemium",
      rating: 4.8,
      tags: ["Graphics", "Marketing", "Video"],
      logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Canva_icon_2021.svg",
      link: "https://canva.com/magic",
      createdAt: new Date().toISOString()
    },
    {
      _id: "mock12",
      name: "ElevenLabs",
      category: "Audio",
      description: "The most realistic and versatile AI speech software, ever. Generative voice AI.",
      pricing: "Premium",
      rating: 4.9,
      tags: ["Voice", "TTS", "Dubbing"],
      logo: "https://elevenlabs.io/favicon.ico",
      link: "https://elevenlabs.io",
      createdAt: new Date().toISOString()
    }
  ];
}
