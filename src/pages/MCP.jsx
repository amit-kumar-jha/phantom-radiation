import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Copy, Check, Star, Search, Filter, Plug, ChevronDown, Monitor } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import { getMCP } from '../services/api';

export default function MCP() {
    const { isDark } = useTheme();
    const { t } = useLanguage();
    const [search, setSearch] = useState('');
    const [category, setCategory] = useState('All');
    const [copiedId, setCopiedId] = useState(null);
    const [showCompatibility, setShowCompatibility] = useState(false);
    const [selectedClient, setSelectedClient] = useState('');
    const [allMCP, setAllMCP] = useState([]);
    const [mcpCategories, setMcpCategories] = useState(['All']);
    const [aiClients, setAiClients] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getMCP().then(data => {
            setAllMCP(data.servers);
            setMcpCategories(data.categories || ['All']);
            setAiClients(data.aiClients || []);
            setLoading(false);
        }).catch(() => setLoading(false));
    }, []);

    const copyCmd = (id, cmd) => {
        navigator.clipboard.writeText(cmd);
        setCopiedId(id);
        setTimeout(() => setCopiedId(null), 2000);
    };

    const filtered = allMCP.filter(mcp => {
        if (search && !mcp.name.toLowerCase().includes(search.toLowerCase()) && !mcp.description.toLowerCase().includes(search.toLowerCase())) return false;
        if (category !== 'All' && mcp.category !== category) return false;
        if (showCompatibility && selectedClient && !mcp.compatibleClients.includes(selectedClient)) return false;
        return true;
    });

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8 pb-12">
            {/* Header */}
            <div className="mb-8">
                <h1 className={`text-3xl sm:text-4xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    <span className="gradient-text">{t('mcp.title')}</span> {t('mcp.titleHighlight')} {t('mcp.titleEnd')}
                </h1>
                <p className={`text-sm ${isDark ? 'text-navy-400' : 'text-gray-500'}`}>
                    {t('mcp.sub')}
                </p>
            </div>

            {/* Search + Filters */}
            <div className="flex flex-wrap gap-3 mb-6">
                <div className={`flex-1 min-w-[200px] flex items-center gap-2 rounded-xl px-4 py-2.5 ${isDark ? 'bg-navy-800 border border-navy-700' : 'bg-white border border-gray-200'}`}>
                    <Search size={16} className="text-purple-500" />
                    <input type="text" value={search} onChange={e => setSearch(e.target.value)} placeholder={t('mcp.searchPlaceholder')}
                        className={`flex-1 bg-transparent outline-none text-sm ${isDark ? 'text-white placeholder-navy-400' : 'text-gray-900 placeholder-gray-400'}`} />
                </div>
                <button onClick={() => setShowCompatibility(!showCompatibility)}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${showCompatibility ? 'bg-cyan-500 text-white' : isDark ? 'bg-navy-800 text-navy-200 border border-navy-700' : 'bg-white text-gray-700 border border-gray-200'
                        }`}>
                    <Monitor size={14} /> Compatibility Checker
                </button>
            </div>

            {/* Category filters */}
            <div className="flex flex-wrap gap-1.5 mb-6">
                {mcpCategories.map(cat => (
                    <button key={cat} onClick={() => setCategory(cat)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${category === cat ? 'bg-purple-500 text-white' : isDark ? 'bg-navy-800 text-navy-300 hover:bg-navy-700' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                            }`}>
                        {cat}
                    </button>
                ))}
            </div>

            {/* Compatibility Checker */}
            <AnimatePresence>
                {showCompatibility && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden mb-6">
                        <div className="glass-card p-5">
                            <h3 className={`font-semibold text-sm mb-3 flex items-center gap-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                                <Monitor size={16} className="text-cyan-400" /> Select your AI client to see compatible MCPs
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {aiClients.map(client => (
                                    <button key={client} onClick={() => setSelectedClient(selectedClient === client ? '' : client)}
                                        className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${selectedClient === client ? 'bg-cyan-500 text-white' : isDark ? 'bg-navy-700 text-navy-300 hover:bg-navy-600' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                            }`}>
                                        {client}
                                    </button>
                                ))}
                            </div>
                            {selectedClient && (
                                <p className={`text-xs mt-3 ${isDark ? 'text-navy-400' : 'text-gray-500'}`}>
                                    Showing {filtered.length} compatible MCP servers for {selectedClient}
                                </p>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* MCP Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mb-8">
                {filtered.map((mcp, i) => (
                    <motion.div key={mcp.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}
                        className="glass-card p-5">
                        <div className="flex items-start justify-between mb-3">
                            <div className="flex items-center gap-2">
                                <Plug size={18} className="text-purple-400" />
                                <div>
                                    <h3 className={`font-bold text-sm ${isDark ? 'text-white' : 'text-gray-900'}`}>{mcp.name}</h3>
                                    <p className={`text-xs ${isDark ? 'text-navy-400' : 'text-gray-500'}`}>by {mcp.author}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-1 text-xs text-yellow-400">
                                <Star size={12} className="fill-yellow-400" />
                                {mcp.stars.toLocaleString()}
                            </div>
                        </div>

                        <p className={`text-xs mb-3 ${isDark ? 'text-navy-300' : 'text-gray-500'}`}>{mcp.description}</p>

                        <div className="flex flex-wrap gap-1 mb-3">
                            {mcp.tags.map(tag => (
                                <span key={tag} className={`text-[10px] px-2 py-0.5 rounded-md ${isDark ? 'bg-purple-500/10 text-purple-400' : 'bg-purple-50 text-purple-600'}`}>
                                    {tag}
                                </span>
                            ))}
                        </div>

                        {/* Install command */}
                        <div className={`flex items-center gap-2 rounded-xl px-3 py-2.5 ${isDark ? 'bg-navy-800 border border-navy-700' : 'bg-gray-50 border border-gray-200'}`}>
                            <code className={`flex-1 text-xs font-mono truncate ${isDark ? 'text-cyan-400' : 'text-cyan-600'}`}>
                                {mcp.installCmd}
                            </code>
                            <button onClick={() => copyCmd(mcp.id, mcp.installCmd)}
                                className={`p-1.5 rounded-lg transition-colors flex-shrink-0 ${isDark ? 'hover:bg-white/5' : 'hover:bg-gray-200'}`}>
                                {copiedId === mcp.id ? <Check size={14} className="text-green-400" /> : <Copy size={14} className={isDark ? 'text-navy-400' : 'text-gray-400'} />}
                            </button>
                        </div>

                        {/* Compatible clients */}
                        <div className="mt-3">
                            <p className={`text-[10px] font-semibold uppercase tracking-wider mb-1.5 ${isDark ? 'text-navy-500' : 'text-gray-400'}`}>Compatible with</p>
                            <div className="flex flex-wrap gap-1">
                                {mcp.compatibleClients.map(client => (
                                    <span key={client} className={`text-[10px] px-1.5 py-0.5 rounded ${selectedClient === client
                                        ? 'bg-cyan-500/20 text-cyan-400 font-semibold'
                                        : isDark ? 'bg-navy-700/50 text-navy-400' : 'bg-gray-100 text-gray-500'
                                        }`}>
                                        {client}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className={`flex items-center justify-between mt-3 pt-3 border-t ${isDark ? 'border-navy-700/50' : 'border-gray-200'}`}>
                            <span className={`text-[10px] ${isDark ? 'text-navy-500' : 'text-gray-400'}`}>v{mcp.version}</span>
                            <span className={`text-[10px] px-2 py-0.5 rounded-md ${isDark ? 'bg-navy-700 text-navy-300' : 'bg-gray-100 text-gray-500'}`}>{mcp.category}</span>
                        </div>
                    </motion.div>
                ))}
            </div>

            {filtered.length === 0 && (
                <div className="text-center py-16">
                    <p className={`text-lg ${isDark ? 'text-navy-400' : 'text-gray-400'}`}>No MCP servers found</p>
                </div>
            )}
        </motion.div>
    );
}
