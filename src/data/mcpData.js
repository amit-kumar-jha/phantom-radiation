export const mcpData = [
    {
        id: 1, name: 'PostgreSQL MCP', description: 'Query and manage PostgreSQL databases with natural language',
        category: 'Databases', author: 'modelcontextprotocol', stars: 4200,
        installCmd: 'npx -y @modelcontextprotocol/server-postgres',
        compatibleClients: ['Claude Desktop', 'Cursor', 'Cline', 'Continue'],
        tags: ['SQL', 'Database', 'PostgreSQL'], version: '2.1.0'
    },
    {
        id: 2, name: 'GitHub MCP', description: 'Interact with GitHub repositories, issues, PRs, and actions',
        category: 'APIs', author: 'modelcontextprotocol', stars: 5800,
        installCmd: 'npx -y @modelcontextprotocol/server-github',
        compatibleClients: ['Claude Desktop', 'Cursor', 'Cline', 'Continue', 'Windsurf'],
        tags: ['GitHub', 'Git', 'DevOps'], version: '3.0.1'
    },
    {
        id: 3, name: 'Filesystem MCP', description: 'Read, write, and manage files and directories securely',
        category: 'Productivity', author: 'modelcontextprotocol', stars: 3900,
        installCmd: 'npx -y @modelcontextprotocol/server-filesystem /path/to/dir',
        compatibleClients: ['Claude Desktop', 'Cursor', 'Cline', 'Continue', 'Windsurf'],
        tags: ['Files', 'IO', 'System'], version: '1.5.2'
    },
    {
        id: 4, name: 'Slack MCP', description: 'Send messages, search channels, and manage Slack workspaces',
        category: 'Productivity', author: 'modelcontextprotocol', stars: 2100,
        installCmd: 'npx -y @modelcontextprotocol/server-slack',
        compatibleClients: ['Claude Desktop', 'Cursor', 'Cline'],
        tags: ['Slack', 'Messaging', 'Teams'], version: '1.2.0'
    },
    {
        id: 5, name: 'Brave Search MCP', description: 'Search the web using Brave Search API for real-time results',
        category: 'APIs', author: 'modelcontextprotocol', stars: 3200,
        installCmd: 'npx -y @modelcontextprotocol/server-brave-search',
        compatibleClients: ['Claude Desktop', 'Cursor', 'Continue'],
        tags: ['Search', 'Web', 'API'], version: '1.3.0'
    },
    {
        id: 6, name: 'Puppeteer MCP', description: 'Automate web browsing, scraping, and testing with Puppeteer',
        category: 'Dev Tools', author: 'modelcontextprotocol', stars: 2800,
        installCmd: 'npx -y @modelcontextprotocol/server-puppeteer',
        compatibleClients: ['Claude Desktop', 'Cursor', 'Cline', 'Continue'],
        tags: ['Browser', 'Scraping', 'Testing'], version: '1.4.1'
    },
    {
        id: 7, name: 'MongoDB MCP', description: 'Query and manage MongoDB collections and documents',
        category: 'Databases', author: 'mongodb', stars: 1800,
        installCmd: 'npx -y mongodb-mcp-server',
        compatibleClients: ['Claude Desktop', 'Cursor', 'Cline'],
        tags: ['MongoDB', 'NoSQL', 'Database'], version: '1.1.0'
    },
    {
        id: 8, name: 'Notion MCP', description: 'Create and manage Notion pages, databases, and blocks',
        category: 'Productivity', author: 'notion-community', stars: 2500,
        installCmd: 'npx -y notion-mcp-server',
        compatibleClients: ['Claude Desktop', 'Cursor', 'Cline', 'Continue'],
        tags: ['Notion', 'Notes', 'Knowledge'], version: '2.0.0'
    },
    {
        id: 9, name: 'Docker MCP', description: 'Manage Docker containers, images, and compose stacks',
        category: 'Dev Tools', author: 'docker', stars: 1500,
        installCmd: 'npx -y docker-mcp-server',
        compatibleClients: ['Claude Desktop', 'Cursor'],
        tags: ['Docker', 'Containers', 'DevOps'], version: '0.9.2'
    },
    {
        id: 10, name: 'Linear MCP', description: 'Manage Linear issues, projects, and team workflows',
        category: 'Productivity', author: 'linear', stars: 1200,
        installCmd: 'npx -y linear-mcp-server',
        compatibleClients: ['Claude Desktop', 'Cursor', 'Cline'],
        tags: ['Linear', 'Project Mgmt', 'Issues'], version: '1.0.3'
    },
    {
        id: 11, name: 'Supabase MCP', description: 'Interact with Supabase databases, auth, and storage',
        category: 'Databases', author: 'supabase', stars: 2100,
        installCmd: 'npx -y supabase-mcp-server',
        compatibleClients: ['Claude Desktop', 'Cursor', 'Cline', 'Windsurf'],
        tags: ['Supabase', 'PostgreSQL', 'BaaS'], version: '1.2.1'
    },
    {
        id: 12, name: 'Sentry MCP', description: 'Monitor errors, view issues, and manage Sentry projects',
        category: 'Dev Tools', author: 'sentry', stars: 980,
        installCmd: 'npx -y @sentry/mcp-server',
        compatibleClients: ['Claude Desktop', 'Cursor'],
        tags: ['Sentry', 'Monitoring', 'Errors'], version: '0.8.0'
    },
    {
        id: 13, name: 'Stripe MCP', description: 'Manage Stripe payments, customers, and subscriptions',
        category: 'APIs', author: 'stripe', stars: 1700,
        installCmd: 'npx -y @stripe/mcp-server',
        compatibleClients: ['Claude Desktop', 'Cursor', 'Cline'],
        tags: ['Stripe', 'Payments', 'API'], version: '1.1.0'
    },
    {
        id: 14, name: 'AWS MCP', description: 'Manage AWS services including S3, Lambda, and EC2',
        category: 'APIs', author: 'aws-community', stars: 1400,
        installCmd: 'npx -y aws-mcp-server',
        compatibleClients: ['Claude Desktop', 'Cursor'],
        tags: ['AWS', 'Cloud', 'Infrastructure'], version: '0.7.5'
    },
    {
        id: 15, name: 'Redis MCP', description: 'Interact with Redis for caching, pub/sub, and data structures',
        category: 'Databases', author: 'redis', stars: 1100,
        installCmd: 'npx -y redis-mcp-server',
        compatibleClients: ['Claude Desktop', 'Cursor', 'Cline'],
        tags: ['Redis', 'Cache', 'Database'], version: '1.0.1'
    }
];

export const mcpCategories = ['All', 'Databases', 'APIs', 'Productivity', 'Dev Tools'];
export const aiClients = ['Claude Desktop', 'Cursor', 'Cline', 'Continue', 'Windsurf'];
