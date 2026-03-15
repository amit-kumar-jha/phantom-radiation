export default async function handler(req, res) {
    if (req.method !== 'GET') return res.status(405).json({ error: 'Method Not Allowed' });

    try {
        // Fetch top MCP servers from GitHub
        const gitRes = await fetch('https://api.github.com/search/repositories?q="modelcontextprotocol"+OR+"mcp-server"&sort=stars&order=desc&per_page=15', {
            headers: { 'User-Agent': 'cipherhub-mcp-fetcher' }
        });

        let apiServers = [];
        const categories = new Set(['All', 'Database', 'File System', 'Cloud', 'API', 'Developer Tools']);

        if (gitRes.ok) {
            const data = await gitRes.json();
            apiServers = (data.items || []).map(repo => {
                let category = 'Developer Tools';
                const desc = (repo.description || '').toLowerCase();
                if (desc.includes('postgres') || desc.includes('sql') || desc.includes('database')) category = 'Database';
                else if (desc.includes('file') || desc.includes('fs') || desc.includes('system')) category = 'File System';
                else if (desc.includes('aws') || desc.includes('gcp') || desc.includes('cloud')) category = 'Cloud';

                categories.add(category);

                return {
                    id: repo.id,
                    name: repo.name.replace('mcp-', '').replace('-mcp', ''),
                    description: repo.description || 'A Model Context Protocol server',
                    author: repo.owner.login,
                    logo: repo.owner.avatar_url,
                    category,
                    stars: repo.stargazers_count,
                    url: repo.html_url,
                    commands: [`npx -y @modelcontextprotocol/server-${repo.name}`],
                    compatibleClients: ['Claude Desktop', 'Cursor', 'Windsurf'],
                    tags: repo.topics && repo.topics.length > 0 ? repo.topics.slice(0, 3) : ['mcp', 'server']
                };
            });
        }

        const staticServers = [
            { id: '1', name: 'PostgreSQL MCP', description: 'Query and explore PostgreSQL databases with LLMs', author: 'mcp-official', logo: 'https://github.com/postgres.png', category: 'Database', stars: 1240, tags: ['db', 'sql'], url: '#', commands: ['npx -y @modelcontextprotocol/server-postgres'], compatibleClients: ['Claude Desktop', 'Cursor', 'Windsurf'] },
            { id: '2', name: 'File System MCP', description: 'Give your AI read/write access to local files', author: 'mcp-official', logo: 'https://github.com/apple.png', category: 'File System', stars: 980, tags: ['fs', 'local'], url: '#', commands: ['npx -y @modelcontextprotocol/server-filesystem --allow-write /path'], compatibleClients: ['Claude Desktop', 'Cursor', 'Windsurf'] },
            { id: '3', name: 'GitHub MCP', description: 'Interact with GitHub issues, PRs, and code', author: 'mcp-official', logo: 'https://github.com/github.png', category: 'Developer Tools', stars: 2150, tags: ['git', 'ci'], url: '#', commands: ['npx -y @modelcontextprotocol/server-github'], compatibleClients: ['Claude Desktop'] },
        ];

        let servers = [...staticServers];
        const existingNames = new Set(servers.map(s => s.name.toLowerCase()));

        for (const as of apiServers) {
            if (!existingNames.has(as.name.toLowerCase())) {
                servers.push(as);
            }
        }

        res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate');
        return res.status(200).json({ servers, categories: Array.from(categories) });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}
