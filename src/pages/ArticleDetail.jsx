import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, ArrowLeft, ArrowRight, Share2, Twitter, Linkedin, Link2, Sparkles, Copy, Check } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { getArticle, getNews } from '../services/api';

export default function ArticleDetail() {
    const { isDark } = useTheme();
    const { id } = useParams();
    const [article, setArticle] = useState(null);
    const [related, setRelated] = useState([]);
    const [loading, setLoading] = useState(true);
    const [tldr, setTldr] = useState('');
    const [tldrLoading, setTldrLoading] = useState(false);
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        setLoading(true);
        getArticle(id).then(async data => {
            // First set the truncated preview data to get rendering started immediately
            setArticle(data);

            // Re-fetch the related articles based on category
            getNews({ category: data.category }).then(newsData => {
                setRelated(newsData.articles.filter(n => n.id !== data.id).slice(0, 3));
            }).catch(() => { });

            // Now silently request the backend to scrape the full article from the source URL
            try {
                const scrapeRes = await fetch(`/api/scrape?url=${encodeURIComponent(data.link)}`);
                const scrapeData = await scrapeRes.json();
                if (scrapeData && scrapeData.content) {
                    setArticle(prev => ({ ...prev, content: scrapeData.content }));
                }
            } catch (err) {
                console.warn('Silent fallback to truncated content, scrape failed:', err);
            }

            setLoading(false);
        }).catch(() => setLoading(false));
    }, [id]);

    if (loading) {
        return (
            <div className="min-h-screen pt-24 flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500"></div>
            </div>
        );
    }

    if (!article) {
        return (
            <div className="max-w-3xl mx-auto px-4 py-20 text-center">
                <h1 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>Article not found</h1>
                <Link to="/news" className="text-purple-400 mt-4 inline-block">← Back to News</Link>
            </div>
        );
    }

    const generateTldr = () => {
        setTldrLoading(true);
        setTimeout(() => {
            const sentences = article.content.split('. ').filter(s => s.length > 30);
            const summary = sentences.slice(0, 3).join('. ') + '.';
            setTldr(summary);
            setTldrLoading(false);
        }, 1500);
    };

    const copyLink = () => {
        navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const categoryColors = {
        LLM: 'bg-purple-500/20 text-purple-400',
        Robotics: 'bg-cyan-500/20 text-cyan-400',
        Business: 'bg-green-500/20 text-green-400',
        Research: 'bg-yellow-500/20 text-yellow-400',
        Products: 'bg-pink-500/20 text-pink-400',
    };

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-8 pb-12">
            {/* Back */}
            <Link to="/news" className={`inline-flex items-center gap-1 text-sm mb-6 transition-colors ${isDark ? 'text-navy-400 hover:text-purple-400' : 'text-gray-400 hover:text-purple-600'}`}>
                <ArrowLeft size={14} /> Back to News
            </Link>

            {/* Header */}
            <div className="mb-6">
                <div className="flex items-center gap-2 mb-3">
                    <span className={`text-xs font-bold uppercase px-2.5 py-1 rounded-lg ${categoryColors[article.category]}`}>
                        {article.category}
                    </span>
                    <span className={`text-sm flex items-center gap-1 ${isDark ? 'text-navy-400' : 'text-gray-400'}`}>
                        <Clock size={12} /> {article.readTime} min read
                    </span>
                </div>
                <h1 className={`text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {article.title}
                </h1>
                <div className={`flex items-center gap-4 text-sm ${isDark ? 'text-navy-400' : 'text-gray-400'}`}>
                    <span>By <strong className={isDark ? 'text-white' : 'text-gray-900'}>{article.author}</strong></span>
                    <span>{article.date}</span>
                </div>
            </div>

            {/* Hero image */}
            <div className="rounded-2xl overflow-hidden mb-8">
                <img src={article.image} alt={article.title} className="w-full h-48 sm:h-64 md:h-80 object-cover" />
            </div>

            {/* TL;DR button */}
            <div className="mb-6">
                <button onClick={generateTldr} disabled={tldrLoading || !!tldr}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${tldr
                        ? isDark ? 'bg-cyan-500/10 text-cyan-400' : 'bg-cyan-50 text-cyan-600'
                        : 'bg-purple-500 text-white hover:bg-purple-600'
                        }`}
                >
                    <Sparkles size={14} />
                    {tldrLoading ? 'Generating...' : tldr ? 'TL;DR Generated' : 'TL;DR — Get AI Summary'}
                </button>
                {tldr && (
                    <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }}
                        className={`mt-3 p-4 rounded-xl border-l-4 border-cyan-500 ${isDark ? 'bg-cyan-500/5' : 'bg-cyan-50'}`}
                    >
                        <p className={`text-sm font-medium mb-1 ${isDark ? 'text-cyan-400' : 'text-cyan-600'}`}>AI Summary</p>
                        <p className={`text-sm leading-relaxed ${isDark ? 'text-navy-200' : 'text-gray-700'}`}>{tldr}</p>
                    </motion.div>
                )}
            </div>

            {/* Content */}
            <div className={`prose prose-sm max-w-none mb-10 ${isDark ? 'text-navy-200' : 'text-gray-700'}`}>
                {article.content.replace(/\[\+\d+ chars\]$/, '').split('\n\n').map((paragraph, i) => (
                    <p key={i} className="mb-4 leading-relaxed text-[15px]">
                        {paragraph}
                    </p>
                ))}

                {/* Due to NewsAPI free tier limits, we must link out to the full article */}
                <div className={`mt-8 p-6 rounded-2xl border ${isDark ? 'bg-navy-800/50 border-navy-700' : 'bg-gray-50 border-gray-200'} text-center`}>
                    <p className={`text-sm mb-4 ${isDark ? 'text-navy-300' : 'text-gray-600'}`}>
                        Due to publisher restrictions, only a preview of this article is available here.
                    </p>
                    <a
                        href={article.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-purple-500 text-white font-medium hover:bg-purple-600 transition-colors shadow-lg shadow-purple-500/25"
                    >
                        Read Full Article on original site <ArrowRight size={16} />
                    </a>
                </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
                {article.tags.map(tag => (
                    <span key={tag} className={`text-xs px-3 py-1 rounded-lg ${isDark ? 'bg-purple-500/10 text-purple-400' : 'bg-purple-50 text-purple-600'}`}>
                        #{tag}
                    </span>
                ))}
            </div>

            {/* Share */}
            <div className={`flex items-center gap-3 py-4 border-t border-b mb-10 ${isDark ? 'border-navy-700' : 'border-gray-200'}`}>
                <span className={`text-sm font-medium ${isDark ? 'text-navy-400' : 'text-gray-500'}`}>Share:</span>
                <button className={`p-2 rounded-lg transition-colors ${isDark ? 'hover:bg-white/5' : 'hover:bg-gray-100'}`}>
                    <Twitter size={16} className="text-[#1DA1F2]" />
                </button>
                <button className={`p-2 rounded-lg transition-colors ${isDark ? 'hover:bg-white/5' : 'hover:bg-gray-100'}`}>
                    <Linkedin size={16} className="text-[#0077B5]" />
                </button>
                <button onClick={copyLink} className={`p-2 rounded-lg transition-colors ${isDark ? 'hover:bg-white/5' : 'hover:bg-gray-100'}`}>
                    {copied ? <Check size={16} className="text-green-400" /> : <Link2 size={16} className={isDark ? 'text-navy-400' : 'text-gray-400'} />}
                </button>
            </div>

            {/* Related articles */}
            {related.length > 0 && (
                <div>
                    <h2 className={`text-xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Related Articles</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {related.map(r => (
                            <Link key={r.id} to={`/news/${r.id}`} className="glass-card overflow-hidden group">
                                <div className="h-32 overflow-hidden">
                                    <img src={r.image} alt={r.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                </div>
                                <div className="p-3">
                                    <p className={`text-xs font-bold mb-1 line-clamp-2 group-hover:text-purple-400 transition-colors ${isDark ? 'text-white' : 'text-gray-900'}`}>
                                        {r.title}
                                    </p>
                                    <p className={`text-[10px] ${isDark ? 'text-navy-400' : 'text-gray-400'}`}>{r.readTime} min read</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </motion.div>
    );
}
