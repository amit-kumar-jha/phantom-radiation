import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Search, Filter, Star, ExternalLink, Bookmark, BookmarkCheck,
    X, ChevronDown, Sparkles, Send, ArrowLeftRight, Check
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import { useBookmarks } from '../context/BookmarkContext';
import { getSanityTools } from '../services/sanity';

export default function Tools() {
    const { isDark } = useTheme();
    const { t } = useLanguage();
    const { toggleBookmark, isBookmarked } = useBookmarks();
    const [search, setSearch] = useState('');
    const [category, setCategory] = useState('All');
    const [pricing, setPricing] = useState('All');
    const [sortBy, setSortBy] = useState('rating');
    const [compareMode, setCompareMode] = useState(false);
    const [compareList, setCompareList] = useState([]);
    const [showRecommender, setShowRecommender] = useState(false);
    const [recommenderInput, setRecommenderInput] = useState('');
    const [recommendations, setRecommendations] = useState([]);
    const [showFilters, setShowFilters] = useState(false);
    const [allTools, setAllTools] = useState([]);
    const [toolCategories, setToolCategories] = useState(['All']);
    const [pricingOptions, setPricingOptions] = useState(['All']);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getSanityTools().then(tools => {
            if (!tools) tools = [];
            const formattedTools = tools.map(t => ({ ...t, id: t._id }));
            setAllTools(formattedTools);

            const categories = ['All', ...new Set(formattedTools.map(t => t.category).filter(Boolean))];
            const pricing = ['All', ...new Set(formattedTools.map(t => t.pricing).filter(Boolean))];

            setToolCategories(categories);
            setPricingOptions(pricing);
            setLoading(false);
        }).catch((err) => {
            console.error('Failed to fetch from Sanity:', err);
            setLoading(false);
        });
    }, []);

    const filtered = useMemo(() => {
        let result = allTools.filter(t => {
            if (search && !t.name.toLowerCase().includes(search.toLowerCase()) && !t.description.toLowerCase().includes(search.toLowerCase())) return false;
            if (category !== 'All' && t.category !== category) return false;
            if (pricing !== 'All' && t.pricing !== pricing) return false;
            return true;
        });
        if (sortBy === 'rating') result.sort((a, b) => b.rating - a.rating);
        if (sortBy === 'name') result.sort((a, b) => a.name.localeCompare(b.name));
        return result;
    }, [search, category, pricing, sortBy, allTools]);

    const toggleCompare = (id) => {
        setCompareList(prev =>
            prev.includes(id) ? prev.filter(x => x !== id) :
                prev.length < 3 ? [...prev, id] : prev
        );
    };

    const comparedTools = compareList.map(id => allTools.find(t => t.id === id)).filter(Boolean);

    const handleRecommend = () => {
        if (!recommenderInput.trim()) return;
        const lower = recommenderInput.toLowerCase();
        const keywords = lower.split(/\s+/);
        const scored = allTools.map(t => {
            let score = 0;
            keywords.forEach(kw => {
                if (t.name.toLowerCase().includes(kw)) score += 3;
                if (t.description.toLowerCase().includes(kw)) score += 2;
                if (t.tags.some(tag => tag.toLowerCase().includes(kw))) score += 2;
                if (t.category.toLowerCase().includes(kw)) score += 1;
            });
            return { ...t, score };
        }).filter(t => t.score > 0).sort((a, b) => b.score - a.score).slice(0, 5);
        setRecommendations(scored.length ? scored : toolsData.slice(0, 3));
    };

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8 pb-12">
            {/* Header */}
            <div className="mb-8">
                <h1 className={`text-3xl sm:text-4xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {t('tools.title')} <span className="gradient-text">{t('tools.titleHighlight')}</span> {t('tools.titleEnd')}
                </h1>
                <p className={`text-sm ${isDark ? 'text-navy-400' : 'text-gray-500'}`}>
                    {t('tools.sub')}
                </p>
            </div>

            {/* Action bar */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
                <div className={`flex-1 min-w-0 flex items-center gap-2 rounded-xl px-4 py-2.5 ${isDark ? 'bg-navy-800 border border-navy-700' : 'bg-white border border-gray-200'}`}>
                    <Search size={16} className="text-purple-500" />
                    <input
                        type="text"
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                        placeholder={t('tools.searchPlaceholder')}
                        className={`flex-1 bg-transparent outline-none text-sm ${isDark ? 'text-white placeholder-navy-400' : 'text-gray-900 placeholder-gray-400'}`}
                    />
                </div>
                <button
                    onClick={() => setShowFilters(!showFilters)}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${showFilters
                        ? 'bg-purple-500 text-white'
                        : isDark ? 'bg-navy-800 text-navy-200 border border-navy-700' : 'bg-white text-gray-700 border border-gray-200'
                        }`}
                >
                    <Filter size={14} /> {t('tools.filters')}
                </button>
                <button
                    onClick={() => { setCompareMode(!compareMode); setCompareList([]); }}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${compareMode
                        ? 'bg-cyan-500 text-white'
                        : isDark ? 'bg-navy-800 text-navy-200 border border-navy-700' : 'bg-white text-gray-700 border border-gray-200'
                        }`}
                >
                    <ArrowLeftRight size={14} /> {t('tools.compare')}
                </button>
                <button
                    onClick={() => setShowRecommender(!showRecommender)}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${showRecommender
                        ? 'bg-purple-500 text-white'
                        : isDark ? 'bg-navy-800 text-navy-200 border border-navy-700' : 'bg-white text-gray-700 border border-gray-200'
                        }`}
                >
                    <Sparkles size={14} /> {t('tools.aiRecommend')}
                </button>
            </div>

            {/* Filters panel */}
            <AnimatePresence>
                {showFilters && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden mb-6">
                        <div className={`glass-card p-5 flex flex-wrap gap-6`}>
                            <div>
                                <label className={`text-xs font-semibold uppercase tracking-wider mb-2 block ${isDark ? 'text-navy-400' : 'text-gray-400'}`}>Category</label>
                                <div className="flex flex-wrap gap-1.5">
                                    {toolCategories.map(cat => (
                                        <button key={cat} onClick={() => setCategory(cat)} className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${category === cat ? 'bg-purple-500 text-white' : isDark ? 'bg-navy-700 text-navy-300 hover:bg-navy-600' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
                                            {cat}
                                        </button>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <label className={`text-xs font-semibold uppercase tracking-wider mb-2 block ${isDark ? 'text-navy-400' : 'text-gray-400'}`}>Pricing</label>
                                <div className="flex flex-wrap gap-1.5">
                                    {pricingOptions.map(p => (
                                        <button key={p} onClick={() => setPricing(p)} className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${pricing === p ? 'bg-purple-500 text-white' : isDark ? 'bg-navy-700 text-navy-300 hover:bg-navy-600' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
                                            {p}
                                        </button>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <label className={`text-xs font-semibold uppercase tracking-wider mb-2 block ${isDark ? 'text-navy-400' : 'text-gray-400'}`}>Sort By</label>
                                <select value={sortBy} onChange={e => setSortBy(e.target.value)} className={`px-3 py-1.5 rounded-lg text-xs font-medium outline-none ${isDark ? 'bg-navy-700 text-navy-200 border-navy-600' : 'bg-gray-100 text-gray-700 border-gray-200'} border`}>
                                    <option value="rating">Rating</option>
                                    <option value="name">Name</option>
                                </select>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* AI Recommender */}
            <AnimatePresence>
                {showRecommender && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden mb-6">
                        <div className="glass-card p-5">
                            <div className="flex items-center gap-2 mb-3">
                                <Sparkles size={16} className="text-purple-400" />
                                <h3 className={`font-semibold text-sm ${isDark ? 'text-white' : 'text-gray-900'}`}>AI Tool Recommender</h3>
                            </div>
                            <div className={`flex items-center gap-2 rounded-xl px-4 py-3 mb-3 ${isDark ? 'bg-navy-800' : 'bg-gray-50'}`}>
                                <input type="text" value={recommenderInput} onChange={e => setRecommenderInput(e.target.value)} onKeyDown={e => e.key === 'Enter' && handleRecommend()} placeholder="Describe what you need... e.g. 'I want to create AI-generated videos'" className={`flex-1 bg-transparent outline-none text-sm ${isDark ? 'text-white placeholder-navy-400' : 'text-gray-900 placeholder-gray-400'}`} />
                                <button onClick={handleRecommend} className="p-2 rounded-lg bg-purple-500 text-white hover:bg-purple-600 transition-colors">
                                    <Send size={14} />
                                </button>
                            </div>
                            {recommendations.length > 0 && (
                                <div className="space-y-2">
                                    <p className={`text-xs ${isDark ? 'text-navy-400' : 'text-gray-500'}`}>Recommended tools for you:</p>
                                    {recommendations.map(tool => (
                                        <div key={tool.id} className={`flex items-center gap-3 p-3 rounded-xl ${isDark ? 'bg-navy-800/50' : 'bg-gray-50'}`}>
                                            <img src={tool.logo} alt={tool.name} className="w-10 h-10 rounded-lg object-contain bg-white/5" />
                                            <div className="flex-1">
                                                <p className={`font-semibold text-sm ${isDark ? 'text-white' : 'text-gray-900'}`}>{tool.name}</p>
                                                <p className={`text-xs ${isDark ? 'text-navy-400' : 'text-gray-500'}`}>{tool.description.slice(0, 60)}...</p>
                                            </div>
                                            <span className="text-yellow-400 text-xs">⭐ {tool.rating}</span>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Compare bar */}
            <AnimatePresence>
                {compareMode && compareList.length > 0 && (
                    <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 50, opacity: 0 }}
                        className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 glass-card px-5 py-3 flex items-center gap-4 shadow-2xl rounded-2xl"
                    >
                        <span className={`text-sm font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>{compareList.length}/3 selected</span>
                        <div className="flex gap-2">
                            {comparedTools.map(t => (
                                <img key={t.id} src={t.logo} alt={t.name} className="w-8 h-8 rounded-lg object-contain bg-white/5 p-0.5" />
                            ))}
                        </div>
                        {compareList.length >= 2 && (
                            <button onClick={() => document.getElementById('compare-section')?.scrollIntoView({ behavior: 'smooth' })}
                                className="px-4 py-2 rounded-xl bg-purple-500 text-white text-sm font-medium hover:bg-purple-600 transition-colors"
                            >
                                Compare Now
                            </button>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Tool cards grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 mb-8">
                {filtered.map((tool, i) => (
                    <motion.div
                        key={tool.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.03 }}
                        className={`glass-card p-5 relative group ${compareMode && compareList.includes(tool.id) ? 'ring-2 ring-cyan-500' : ''}`}
                    >
                        {compareMode && (
                            <button onClick={() => toggleCompare(tool.id)} className={`absolute top-3 right-3 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${compareList.includes(tool.id) ? 'bg-cyan-500 border-cyan-500' : isDark ? 'border-navy-500' : 'border-gray-300'}`}>
                                {compareList.includes(tool.id) && <Check size={12} className="text-white" />}
                            </button>
                        )}

                        <div className="flex items-start gap-3 mb-3">
                            <img src={tool.logo} alt={tool.name} className="w-12 h-12 rounded-xl object-contain bg-white/5 p-1 flex-shrink-0" />
                            <div className="flex-1 min-w-0">
                                <h3 className={`font-bold text-sm truncate ${isDark ? 'text-white' : 'text-gray-900'}`}>{tool.name}</h3>
                                <p className={`text-xs ${isDark ? 'text-navy-400' : 'text-gray-500'}`}>{tool.category}</p>
                            </div>
                            {!compareMode && (
                                <button onClick={() => toggleBookmark(tool.id)} className="p-1 transition-colors">
                                    {isBookmarked(tool.id) ? <BookmarkCheck size={16} className="text-purple-400" /> : <Bookmark size={16} className={isDark ? 'text-navy-500' : 'text-gray-300'} />}
                                </button>
                            )}
                        </div>

                        <p className={`text-xs mb-3 line-clamp-2 ${isDark ? 'text-navy-300' : 'text-gray-500'}`}>
                            {tool.description}
                        </p>

                        <div className="flex flex-wrap gap-1 mb-3">
                            {tool.tags.slice(0, 3).map(tag => (
                                <span key={tag} className={`text-[10px] px-2 py-0.5 rounded-md ${isDark ? 'bg-purple-500/10 text-purple-400' : 'bg-purple-50 text-purple-600'}`}>
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-1">
                                {[...Array(5)].map((_, j) => (
                                    <Star key={j} size={12} className={j < Math.floor(tool.rating) ? 'text-yellow-400 fill-yellow-400' : isDark ? 'text-navy-600' : 'text-gray-300'} />
                                ))}
                                <span className={`text-xs ml-1 ${isDark ? 'text-navy-400' : 'text-gray-400'}`}>{tool.rating}</span>
                            </div>
                            <span className={`text-[10px] font-medium px-2 py-0.5 rounded-md ${tool.pricing === 'Free' ? 'bg-green-500/20 text-green-400' :
                                tool.pricing === 'Freemium' ? 'bg-cyan-500/20 text-cyan-400' :
                                    'bg-orange-500/20 text-orange-400'
                                }`}>
                                {tool.pricing}
                            </span>
                        </div>

                        <a
                            href={tool.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`w-full mt-4 py-2 rounded-xl text-xs font-semibold transition-all flex items-center justify-center gap-1.5 ${isDark
                                ? 'bg-purple-500/10 text-purple-400 hover:bg-purple-500/20'
                                : 'bg-purple-50 text-purple-600 hover:bg-purple-100'
                                }`}>
                            <ExternalLink size={12} /> {t('tools.tryNow')}
                        </a>
                    </motion.div>
                ))}
            </div>

            {filtered.length === 0 && (
                <div className="text-center py-16">
                    <p className={`text-lg ${isDark ? 'text-navy-400' : 'text-gray-400'}`}>No tools found matching your filters</p>
                </div>
            )}

            {/* Compare section */}
            {compareMode && comparedTools.length >= 2 && (
                <div id="compare-section" className="mb-8">
                    <h2 className={`text-xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        Tool Comparison
                    </h2>
                    <div className="overflow-x-auto">
                        <table className={`w-full text-sm ${isDark ? 'text-navy-200' : 'text-gray-700'}`}>
                            <thead>
                                <tr className={isDark ? 'border-b border-navy-700' : 'border-b border-gray-200'}>
                                    <th className="text-left py-3 px-4 font-semibold">Feature</th>
                                    {comparedTools.map(t => (
                                        <th key={t.id} className="text-center py-3 px-4">
                                            <img src={t.logo} alt={t.name} className="w-10 h-10 block mx-auto mb-2 rounded-lg object-contain bg-white/5 p-1" />
                                            <span className="font-semibold">{t.name}</span>
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {['Category', 'Pricing', 'Rating'].map(feat => (
                                    <tr key={feat} className={isDark ? 'border-b border-navy-800' : 'border-b border-gray-100'}>
                                        <td className="py-3 px-4 font-medium">{feat}</td>
                                        {comparedTools.map(t => (
                                            <td key={t.id} className="text-center py-3 px-4">
                                                {feat === 'Category' ? t.category : feat === 'Pricing' ? t.pricing : `⭐ ${t.rating}`}
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                                {comparedTools[0]?.tags?.map((_, fi) => (
                                    <tr key={fi} className={isDark ? 'border-b border-navy-800' : 'border-b border-gray-100'}>
                                        <td className="py-3 px-4 font-medium text-xs uppercase tracking-widest text-navy-400">Tag {fi + 1}</td>
                                        {comparedTools.map(t => (
                                            <td key={t.id} className="text-center py-3 px-4">
                                                <span className={`text-[10px] px-2 py-1 flex-inline rounded-md font-semibold ${isDark ? 'bg-purple-500/10 text-purple-400' : 'bg-purple-50 text-purple-600'}`}>
                                                    {t.tags[fi] || '—'}
                                                </span>
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </motion.div>
    );
}
