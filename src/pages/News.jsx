import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, Search, Mail, ArrowRight, Tag } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import { getNews } from '../services/api';

const categoryColors = {
    LLM: 'bg-purple-500/20 text-purple-400',
    Robotics: 'bg-cyan-500/20 text-cyan-400',
    Business: 'bg-green-500/20 text-green-400',
    Research: 'bg-yellow-500/20 text-yellow-400',
    Products: 'bg-pink-500/20 text-pink-400',
};

export default function News() {
    const { isDark } = useTheme();
    const { t } = useLanguage();
    const [activeCategory, setActiveCategory] = useState('All');
    const [search, setSearch] = useState('');
    const [email, setEmail] = useState('');
    const [subscribed, setSubscribed] = useState(false);
    const [allNews, setAllNews] = useState([]);
    const [newsCategories, setNewsCategories] = useState(['All']);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getNews().then(data => {
            setAllNews(data.articles);
            setNewsCategories(data.categories || ['All']);
            setLoading(false);
        }).catch(() => setLoading(false));
    }, []);

    const filtered = allNews.filter(n => {
        if (activeCategory !== 'All' && n.category !== activeCategory) return false;
        if (search && !n.title.toLowerCase().includes(search.toLowerCase())) return false;
        return true;
    });

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8 pb-12">
            {/* Header */}
            <div className="mb-8">
                <h1 className={`text-3xl sm:text-4xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {t('news.title')} <span className="gradient-text">{t('news.titleHighlight')}</span> {t('news.titleEnd')}
                </h1>
                <p className={`text-sm ${isDark ? 'text-navy-400' : 'text-gray-500'}`}>
                    {t('news.sub')}
                </p>
            </div>

            {/* Search + Filters */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-8">
                <div className={`flex-1 w-full flex items-center gap-2 rounded-xl px-4 py-2.5 ${isDark ? 'bg-navy-800 border border-navy-700' : 'bg-white border border-gray-200'}`}>
                    <Search size={16} className="text-purple-500" />
                    <input
                        type="text"
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                        placeholder={t('news.searchPlaceholder')}
                        className={`flex-1 bg-transparent outline-none text-sm ${isDark ? 'text-white placeholder-navy-400' : 'text-gray-900 placeholder-gray-400'}`}
                    />
                </div>
                <div className="flex flex-wrap gap-1.5">
                    {newsCategories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${activeCategory === cat
                                ? 'bg-purple-500 text-white'
                                : isDark ? 'bg-navy-800 text-navy-300 hover:bg-navy-700' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            {/* Articles grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
                {filtered.map((article, i) => (
                    <motion.div
                        key={article.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.05 }}
                    >
                        <Link to={`/news/${article.id}`} className="block glass-card overflow-hidden group h-full">
                            <div className="h-44 overflow-hidden">
                                <img
                                    src={article.image}
                                    alt={article.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-4">
                                <div className="flex items-center gap-2 mb-2">
                                    <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded-md ${categoryColors[article.category]}`}>
                                        {article.category}
                                    </span>
                                    <span className={`text-xs flex items-center gap-1 ${isDark ? 'text-navy-400' : 'text-gray-400'}`}>
                                        <Clock size={10} /> {article.readTime} min
                                    </span>
                                </div>
                                <h3 className={`font-bold text-sm leading-snug mb-2 group-hover:text-purple-400 transition-colors line-clamp-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                                    {article.title}
                                </h3>
                                <p className={`text-xs line-clamp-2 mb-3 ${isDark ? 'text-navy-300' : 'text-gray-500'}`}>
                                    {article.excerpt}
                                </p>
                                <div className={`flex items-center justify-between text-xs ${isDark ? 'text-navy-500' : 'text-gray-400'}`}>
                                    <span>{article.date}</span>
                                    <span>By {article.author}</span>
                                </div>
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </div>

            {filtered.length === 0 && (
                <div className="text-center py-16">
                    <p className={`text-lg ${isDark ? 'text-navy-400' : 'text-gray-400'}`}>No articles found</p>
                </div>
            )}

            {/* Newsletter */}
            <div className="glass-card p-5 sm:p-8 text-center mb-8">
                <Mail size={32} className="text-purple-400 mx-auto mb-3" />
                <h2 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {t('news.newsletterTitle')}
                </h2>
                <p className={`text-sm mb-4 ${isDark ? 'text-navy-400' : 'text-gray-500'}`}>
                    {t('news.newsletterSub')}
                </p>
                {subscribed ? (
                    <p className="text-green-400 font-semibold text-sm">✅ You're subscribed! Check your inbox.</p>
                ) : (
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 max-w-md mx-auto">
                        <input
                            type="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            placeholder="your@email.com"
                            className={`flex-1 px-4 py-2.5 rounded-xl outline-none text-sm ${isDark ? 'bg-navy-800 text-white placeholder-navy-400 border border-navy-700' : 'bg-gray-50 text-gray-900 placeholder-gray-400 border border-gray-200'}`}
                        />
                        <button
                            onClick={() => email && setSubscribed(true)}
                            className="px-5 py-2.5 rounded-xl bg-purple-500 text-white text-sm font-semibold hover:bg-purple-600 transition-colors"
                        >
                            {t('news.subscribe')}
                        </button>
                    </div>
                )}
            </div>
        </motion.div>
    );
}
