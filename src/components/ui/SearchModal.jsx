import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, ArrowRight, Wrench, Newspaper, BrainCircuit, Plug, Command } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { toolsData } from '../../data/toolsData';
import { newsData } from '../../data/newsData';

export default function SearchModal({ open, onClose }) {
    const { isDark } = useTheme();
    const [query, setQuery] = useState('');
    const inputRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (open) {
            setTimeout(() => inputRef.current?.focus(), 100);
            setQuery('');
        }
    }, [open]);

    const filteredTools = query.length > 1
        ? toolsData.filter(t => t.name.toLowerCase().includes(query.toLowerCase()) || t.description.toLowerCase().includes(query.toLowerCase())).slice(0, 4)
        : [];

    const filteredNews = query.length > 1
        ? newsData.filter(n => n.title.toLowerCase().includes(query.toLowerCase())).slice(0, 3)
        : [];

    const hasResults = filteredTools.length > 0 || filteredNews.length > 0;

    const quickLinks = [
        { label: 'AI Tools Directory', path: '/tools', icon: Wrench },
        { label: 'Latest AI News', path: '/news', icon: Newspaper },
        { label: 'Model Comparisons', path: '/models', icon: BrainCircuit },
        { label: 'MCP Servers', path: '/mcp', icon: Plug },
    ];

    return (
        <AnimatePresence>
            {open && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[100] flex items-start justify-center pt-[15vh]"
                    onClick={onClose}
                >
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
                    <motion.div
                        initial={{ opacity: 0, y: -20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.95 }}
                        className={`relative w-full max-w-2xl mx-4 rounded-2xl overflow-hidden shadow-2xl ${isDark ? 'bg-navy-900 border border-purple-500/20' : 'bg-white border border-gray-200'
                            }`}
                        onClick={e => e.stopPropagation()}
                    >
                        {/* Search input */}
                        <div className={`flex items-center gap-3 px-5 py-4 border-b ${isDark ? 'border-navy-700' : 'border-gray-100'}`}>
                            <Search size={20} className="text-purple-500" />
                            <input
                                ref={inputRef}
                                type="text"
                                value={query}
                                onChange={e => setQuery(e.target.value)}
                                placeholder="Search tools, news, models..."
                                className={`flex-1 bg-transparent outline-none text-lg ${isDark ? 'text-white placeholder-navy-400' : 'text-gray-900 placeholder-gray-400'}`}
                            />
                            <div className={`flex items-center gap-1 px-2 py-1 rounded text-xs ${isDark ? 'bg-navy-800 text-navy-400' : 'bg-gray-100 text-gray-400'}`}>
                                ESC
                            </div>
                        </div>

                        {/* Results */}
                        <div className="max-h-[60vh] overflow-y-auto p-3">
                            {query.length > 1 && hasResults ? (
                                <>
                                    {filteredTools.length > 0 && (
                                        <div className="mb-3">
                                            <p className={`text-xs font-semibold uppercase tracking-wider px-2 py-1 ${isDark ? 'text-navy-400' : 'text-gray-400'}`}>
                                                Tools
                                            </p>
                                            {filteredTools.map(tool => (
                                                <button
                                                    key={tool.id}
                                                    onClick={() => { navigate('/tools'); onClose(); }}
                                                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all ${isDark ? 'hover:bg-white/5' : 'hover:bg-gray-50'
                                                        }`}
                                                >
                                                    <span className="text-2xl">{tool.logo}</span>
                                                    <div className="text-left flex-1">
                                                        <p className={`font-medium text-sm ${isDark ? 'text-white' : 'text-gray-900'}`}>{tool.name}</p>
                                                        <p className={`text-xs ${isDark ? 'text-navy-400' : 'text-gray-500'}`}>{tool.description.slice(0, 60)}...</p>
                                                    </div>
                                                    <ArrowRight size={14} className="text-purple-500" />
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                    {filteredNews.length > 0 && (
                                        <div>
                                            <p className={`text-xs font-semibold uppercase tracking-wider px-2 py-1 ${isDark ? 'text-navy-400' : 'text-gray-400'}`}>
                                                News
                                            </p>
                                            {filteredNews.map(article => (
                                                <button
                                                    key={article.id}
                                                    onClick={() => { navigate(`/news/${article.id}`); onClose(); }}
                                                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all ${isDark ? 'hover:bg-white/5' : 'hover:bg-gray-50'
                                                        }`}
                                                >
                                                    <Newspaper size={18} className="text-cyan-500" />
                                                    <div className="text-left flex-1">
                                                        <p className={`font-medium text-sm ${isDark ? 'text-white' : 'text-gray-900'}`}>{article.title.slice(0, 50)}...</p>
                                                        <p className={`text-xs ${isDark ? 'text-navy-400' : 'text-gray-500'}`}>{article.category} · {article.readTime} min read</p>
                                                    </div>
                                                    <ArrowRight size={14} className="text-purple-500" />
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </>
                            ) : query.length > 1 ? (
                                <p className={`text-center py-8 text-sm ${isDark ? 'text-navy-400' : 'text-gray-400'}`}>
                                    No results found for "{query}"
                                </p>
                            ) : (
                                <div>
                                    <p className={`text-xs font-semibold uppercase tracking-wider px-2 py-1 mb-1 ${isDark ? 'text-navy-400' : 'text-gray-400'}`}>
                                        Quick Links
                                    </p>
                                    {quickLinks.map(({ label, path, icon: Icon }) => (
                                        <button
                                            key={path}
                                            onClick={() => { navigate(path); onClose(); }}
                                            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all ${isDark ? 'hover:bg-white/5' : 'hover:bg-gray-50'
                                                }`}
                                        >
                                            <Icon size={18} className="text-purple-500" />
                                            <span className={`text-sm font-medium ${isDark ? 'text-navy-200' : 'text-gray-700'}`}>{label}</span>
                                            <ArrowRight size={14} className={`ml-auto ${isDark ? 'text-navy-500' : 'text-gray-300'}`} />
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Footer hint */}
                        <div className={`px-4 py-2.5 border-t text-xs flex items-center gap-4 ${isDark ? 'border-navy-700 text-navy-500' : 'border-gray-100 text-gray-400'}`}>
                            <span className="flex items-center gap-1"><Command size={12} /> + K to search</span>
                            <span>Press / anywhere</span>
                            <span>T for tools</span>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
