import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
    AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell,
    XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend
} from 'recharts';
import {
    TrendingUp, TrendingDown, MessageSquare, BarChart3,
    Globe, AlertCircle, ThumbsUp, ThumbsDown, Minus
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import { getBrand } from '../services/api';

const sentimentColors = { positive: '#10B981', neutral: '#F59E0B', negative: '#EF4444' };
const sentimentIcons = { positive: <ThumbsUp size={12} />, neutral: <Minus size={12} />, negative: <ThumbsDown size={12} /> };

export default function Brand() {
    const { isDark } = useTheme();
    const { t } = useLanguage();
    const [brandData, setBrandData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getBrand().then(data => {
            setBrandData(data);
            setLoading(false);
        }).catch(() => setLoading(false));
    }, []);

    if (loading || !brandData) {
        return (
            <div className="min-h-screen pt-24 flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500"></div>
            </div>
        );
    }

    const { overview, mentionTrend, competitors, topTopics, recentMentions } = brandData;

    const sentimentPieData = [
        { name: 'Positive', value: overview.sentiment.positive, color: sentimentColors.positive },
        { name: 'Neutral', value: overview.sentiment.neutral, color: sentimentColors.neutral },
        { name: 'Negative', value: overview.sentiment.negative, color: sentimentColors.negative },
    ];

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8 pb-12">
            {/* Header */}
            <div className="mb-8">
                <h1 className={`text-3xl sm:text-4xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {t('brand.title')} <span className="gradient-text">{t('brand.titleHighlight')}</span>
                </h1>
                <p className={`text-sm ${isDark ? 'text-navy-400' : 'text-gray-500'}`}>
                    {t('brand.sub')}
                </p>
            </div>

            {/* Overview cards */}
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8">
                <div className="glass-card p-4">
                    <p className={`text-xs ${isDark ? 'text-navy-400' : 'text-gray-400'}`}>{t('brand.totalMentions')}</p>
                    <p className={`text-2xl font-bold mt-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        {overview.totalMentions.toLocaleString()}
                    </p>
                    <p className="text-xs text-green-400 flex items-center gap-1 mt-1">
                        <TrendingUp size={12} /> +{overview.mentionChange}% vs last month
                    </p>
                </div>
                <div className="glass-card p-4">
                    <p className={`text-xs ${isDark ? 'text-navy-400' : 'text-gray-400'}`}>{t('brand.positiveSentiment')}</p>
                    <p className="text-2xl font-bold mt-1 text-green-400">{overview.sentiment.positive}%</p>
                    <p className={`text-xs mt-1 ${isDark ? 'text-navy-400' : 'text-gray-400'}`}>Industry avg: 55%</p>
                </div>
                <div className="glass-card p-4">
                    <p className={`text-xs ${isDark ? 'text-navy-400' : 'text-gray-400'}`}>{t('brand.topPlatform')}</p>
                    <p className={`text-2xl font-bold mt-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>{overview.topPlatforms[0].name}</p>
                    <p className={`text-xs mt-1 ${isDark ? 'text-navy-400' : 'text-gray-400'}`}>{overview.topPlatforms[0].mentions.toLocaleString()} mentions</p>
                </div>
                <div className="glass-card p-4">
                    <p className={`text-xs ${isDark ? 'text-navy-400' : 'text-gray-400'}`}>{t('brand.trendingTopics')}</p>
                    <p className={`text-2xl font-bold mt-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>{topTopics.length}</p>
                    <p className="text-xs text-purple-400 mt-1">Top: {topTopics[0].topic}</p>
                </div>
            </div>

            {/* Charts row */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-8">
                {/* Mention volume over time */}
                <div className="lg:col-span-2 glass-card p-5">
                    <h3 className={`font-bold text-sm mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('brand.mentionVolume')}</h3>
                    <div style={{ height: 220 }} className="sm:hidden">
                        <ResponsiveContainer>
                            <AreaChart data={mentionTrend} margin={{ top: 5, right: 10, left: -20, bottom: 0 }}>
                                <defs>
                                    <linearGradient id="gradientMentionsSm" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="0%" stopColor="#7C3AED" stopOpacity={0.4} />
                                        <stop offset="100%" stopColor="#7C3AED" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" stroke={isDark ? '#1C2744' : '#E5E7EB'} />
                                <XAxis dataKey="month" tick={{ fill: isDark ? '#6B7AA0' : '#6B7280', fontSize: 9 }} />
                                <YAxis tick={{ fill: isDark ? '#6B7AA0' : '#6B7280', fontSize: 9 }} />
                                <Tooltip contentStyle={{ backgroundColor: isDark ? '#151D35' : '#FFF', border: isDark ? '1px solid #243054' : '1px solid #E5E7EB', borderRadius: 12 }} />
                                <Area type="monotone" dataKey="mentions" stroke="#7C3AED" fill="url(#gradientMentionsSm)" strokeWidth={2} />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                    <div style={{ height: 280 }} className="hidden sm:block">
                        <ResponsiveContainer>
                            <AreaChart data={mentionTrend} margin={{ top: 5, right: 10, left: -10, bottom: 0 }}>
                                <defs>
                                    <linearGradient id="gradientMentions" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="0%" stopColor="#7C3AED" stopOpacity={0.4} />
                                        <stop offset="100%" stopColor="#7C3AED" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" stroke={isDark ? '#1C2744' : '#E5E7EB'} />
                                <XAxis dataKey="month" tick={{ fill: isDark ? '#6B7AA0' : '#6B7280', fontSize: 11 }} />
                                <YAxis tick={{ fill: isDark ? '#6B7AA0' : '#6B7280', fontSize: 11 }} />
                                <Tooltip contentStyle={{ backgroundColor: isDark ? '#151D35' : '#FFF', border: isDark ? '1px solid #243054' : '1px solid #E5E7EB', borderRadius: 12 }} />
                                <Area type="monotone" dataKey="mentions" stroke="#7C3AED" fill="url(#gradientMentions)" strokeWidth={2} />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Sentiment pie */}
                <div className="glass-card p-5">
                    <h3 className={`font-bold text-sm mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('brand.sentimentBreakdown')}</h3>
                    <div style={{ height: 200 }}>
                        <ResponsiveContainer>
                            <PieChart>
                                <Pie data={sentimentPieData} cx="50%" cy="50%" innerRadius={55} outerRadius={80} paddingAngle={4} dataKey="value">
                                    {sentimentPieData.map((entry, i) => (
                                        <Cell key={i} fill={entry.color} stroke="transparent" />
                                    ))}
                                </Pie>
                                <Tooltip contentStyle={{ backgroundColor: isDark ? '#151D35' : '#FFF', border: isDark ? '1px solid #243054' : '1px solid #E5E7EB', borderRadius: 12 }} />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                    <div className="flex justify-center gap-4">
                        {sentimentPieData.map(d => (
                            <div key={d.name} className="flex items-center gap-1.5">
                                <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: d.color }} />
                                <span className={`text-xs ${isDark ? 'text-navy-300' : 'text-gray-600'}`}>{d.name} {d.value}%</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Competitor comparison */}
            <div className="glass-card p-5 mb-8">
                <h3 className={`font-bold text-sm mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('brand.competitorComparison')}</h3>
                <div style={{ height: 300 }}>
                    <ResponsiveContainer>
                        <BarChart data={competitors} margin={{ top: 5, right: 10, left: -10, bottom: 0 }}>
                            <CartesianGrid strokeDasharray="3 3" stroke={isDark ? '#1C2744' : '#E5E7EB'} />
                            <XAxis dataKey="name" tick={{ fill: isDark ? '#6B7AA0' : '#6B7280', fontSize: 11 }} />
                            <YAxis tick={{ fill: isDark ? '#6B7AA0' : '#6B7280', fontSize: 11 }} />
                            <Tooltip contentStyle={{ backgroundColor: isDark ? '#151D35' : '#FFF', border: isDark ? '1px solid #243054' : '1px solid #E5E7EB', borderRadius: 12 }} />
                            <Bar dataKey="mentions" radius={[6, 6, 0, 0]}>
                                {competitors.map((entry, i) => (
                                    <Cell key={i} fill={entry.color} />
                                ))}
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* Bottom row: Topics + Recent mentions */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {/* Trending topics */}
                <div className="glass-card p-5">
                    <h3 className={`font-bold text-sm mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('brand.trendingTopicsTitle')}</h3>
                    <div className="space-y-3">
                        {topTopics.map((topic, i) => (
                            <div key={i} className="flex items-center gap-3">
                                <span className={`w-6 text-center font-bold text-sm ${isDark ? 'text-navy-400' : 'text-gray-400'}`}>{i + 1}</span>
                                <div className="flex-1">
                                    <div className="flex items-center justify-between mb-1">
                                        <p className={`text-sm font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>{topic.topic}</p>
                                        <span className={`text-xs flex items-center gap-0.5 ${topic.change >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                                            {topic.change >= 0 ? <TrendingUp size={10} /> : <TrendingDown size={10} />}
                                            {topic.change >= 0 ? '+' : ''}{topic.change}%
                                        </span>
                                    </div>
                                    <div className={`h-1.5 rounded-full ${isDark ? 'bg-navy-700' : 'bg-gray-200'}`}>
                                        <div className="h-full rounded-full animated-gradient" style={{ width: `${(topic.count / topTopics[0].count) * 100}%` }} />
                                    </div>
                                </div>
                                <span className={`text-xs ${isDark ? 'text-navy-400' : 'text-gray-400'}`}>{(topic.count / 1000).toFixed(1)}K</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Recent mentions feed */}
                <div className="glass-card p-5">
                    <h3 className={`font-bold text-sm mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Recent Mentions</h3>
                    <div className="space-y-3">
                        {recentMentions.map((mention, i) => (
                            <div key={i} className={`p-3 rounded-xl ${isDark ? 'bg-navy-800/50' : 'bg-gray-50'}`}>
                                <div className="flex items-center gap-2 mb-2">
                                    <span className={`text-[10px] px-2 py-0.5 rounded-md font-semibold ${isDark ? 'bg-purple-500/10 text-purple-400' : 'bg-purple-50 text-purple-600'}`}>
                                        {mention.platform}
                                    </span>
                                    <span className={`text-xs flex items-center gap-1 ${mention.sentiment === 'positive' ? 'text-green-400' :
                                        mention.sentiment === 'negative' ? 'text-red-400' : 'text-yellow-400'
                                        }`}>
                                        {sentimentIcons[mention.sentiment]} {mention.sentiment}
                                    </span>
                                    <span className={`text-xs ml-auto ${isDark ? 'text-navy-500' : 'text-gray-400'}`}>{mention.time}</span>
                                </div>
                                <p className={`text-xs leading-relaxed ${isDark ? 'text-navy-200' : 'text-gray-700'}`}>"{mention.text}"</p>
                                <p className={`text-[10px] mt-1 ${isDark ? 'text-navy-500' : 'text-gray-400'}`}>{mention.author}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
