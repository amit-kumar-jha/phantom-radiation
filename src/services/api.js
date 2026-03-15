// Centralized API client for cipherhub.io backend

const API_BASE = '/api';

async function fetchAPI(endpoint, options = {}) {
    // If in dev, Vercel maps /api to the serverless functions correctly
    const url = `${API_BASE}${endpoint}`;

    // Add explicit headers to prevent vite/browser caching issues
    const defaultHeaders = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    };

    const response = await fetch(url, {
        ...options,
        headers: { ...defaultHeaders, ...(options.headers || {}) },
    });

    if (!response.ok) {
        throw new Error(`API error: ${response.status} ${response.statusText}`);
    }

    return response.json();
}

// ─── Tools ─────────────────────────────────────────────────────
export async function getTools({ category, pricing, search, sort } = {}) {
    const params = new URLSearchParams();
    if (category && category !== 'All') params.set('category', category);
    if (pricing && pricing !== 'All') params.set('pricing', pricing);
    if (search) params.set('search', search);
    if (sort) params.set('sort', sort);

    const qs = params.toString();
    return fetchAPI(`/tools${qs ? `?${qs}` : ''}`);
}

export async function getTool(id) {
    return fetchAPI(`/tools/${id}`);
}

export async function createTool(data) {
    return fetchAPI('/tools', { method: 'POST', body: JSON.stringify(data) });
}

export async function updateTool(id, data) {
    return fetchAPI(`/tools/${id}`, { method: 'PUT', body: JSON.stringify(data) });
}

export async function deleteTool(id) {
    return fetchAPI(`/tools/${id}`, { method: 'DELETE' });
}

// ─── News ──────────────────────────────────────────────────────
export async function getNews({ category, search, limit } = {}) {
    const params = new URLSearchParams();
    if (category && category !== 'All') params.set('category', category);
    if (search) params.set('search', search);
    if (limit) params.set('limit', limit);

    const qs = params.toString();
    return fetchAPI(`/news${qs ? `?${qs}` : ''}`);
}

export async function getArticle(id) {
    const data = await getNews();
    const article = data.articles.find(a => a.id.toString() === id.toString());
    if (!article) throw new Error('Article not found');
    return article;
}

export async function scrapeArticle(url) {
    return fetchAPI(`/scrape?url=${encodeURIComponent(url)}`);
}

export async function syncNewsData() {
    return fetchAPI('/news/sync', { method: 'POST' });
}

// ─── Models ────────────────────────────────────────────────────
export async function getModels({ provider, sort } = {}) {
    const params = new URLSearchParams();
    if (provider) params.set('provider', provider);
    if (sort) params.set('sort', sort);

    const qs = params.toString();
    return fetchAPI(`/models${qs ? `?${qs}` : ''}`);
}

export async function getModel(id) {
    return fetchAPI(`/models/${id}`);
}

// ─── MCP ───────────────────────────────────────────────────────
export async function getMCP({ category, search } = {}) {
    const params = new URLSearchParams();
    if (category && category !== 'All') params.set('category', category);
    if (search) params.set('search', search);

    const qs = params.toString();
    return fetchAPI(`/mcp${qs ? `?${qs}` : ''}`);
}

export async function getMCPServer(id) {
    return fetchAPI(`/mcp/${id}`);
}

// ─── Brand ─────────────────────────────────────────────────────
export async function getBrand() {
    return fetchAPI('/brand');
}

// ─── Health & Sync ─────────────────────────────────────────────
export async function getHealth() {
    return fetchAPI('/health');
}

export async function triggerSync() {
    return fetchAPI('/sync', { method: 'POST' });
}
