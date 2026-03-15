import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Sparkles, TrendingUp, ArrowRight } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { useLanguage } from '../../context/LanguageContext';

const suggestions = ['Best AI image generator', 'Compare GPT-5 vs Claude 4', 'Free AI coding tools', 'AI video generators 2026'];

export default function HeroSection() {
    const { isDark } = useTheme();
    const { t } = useLanguage();
    const [searchQuery, setSearchQuery] = useState('');
    const [showSuggestions, setShowSuggestions] = useState(false);

    return (
        <section className="relative overflow-hidden py-12 sm:py-20 lg:py-28">
            {/* Animated gradient bg */}
            <div className="absolute inset-0 animated-gradient opacity-10" />
            <div className="absolute inset-0" style={{
                background: isDark
                    ? 'radial-gradient(ellipse at 30% 50%, rgba(124, 58, 237, 0.15), transparent 70%), radial-gradient(ellipse at 70% 50%, rgba(6, 182, 212, 0.1), transparent 70%)'
                    : 'radial-gradient(ellipse at 30% 50%, rgba(124, 58, 237, 0.08), transparent 70%), radial-gradient(ellipse at 70% 50%, rgba(6, 182, 212, 0.05), transparent 70%)'
            }} />

            {/* Floating orbs */}
            <motion.div
                className="absolute top-20 left-[10%] w-72 h-72 rounded-full bg-purple-500/10 blur-3xl"
                animate={{ y: [0, -30, 0], x: [0, 15, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
                className="absolute bottom-20 right-[10%] w-96 h-96 rounded-full bg-cyan-500/10 blur-3xl"
                animate={{ y: [0, 20, 0], x: [0, -20, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
            />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center">
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card mb-6 cursor-default"
                >
                    <Sparkles size={14} className="text-purple-400" />
                    <span className={`text-xs font-medium ${isDark ? 'text-purple-300' : 'text-purple-600'}`}>
                        {t('hero.badge')}
                    </span>
                    <TrendingUp size={14} className="text-cyan-400" />
                </motion.div>

                {/* Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-3xl sm:text-5xl lg:text-7xl font-black mb-4 sm:mb-6 leading-tight tracking-tight"
                >
                    <span className={isDark ? 'text-white' : 'text-gray-900'}>{t('hero.title1')}</span>
                    <br />
                    <span className="gradient-text">{t('hero.title2')}</span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className={`text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-8 sm:mb-10 px-2 ${isDark ? 'text-navy-300' : 'text-gray-500'}`}
                >
                    {t('hero.desc')}
                </motion.p>

                {/* Search bar */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="relative max-w-2xl mx-auto"
                >
                    <div className={`flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3 rounded-2xl px-4 sm:px-5 py-3 sm:py-4 transition-all duration-300 ${isDark
                        ? 'bg-navy-800/80 border border-purple-500/20 focus-within:border-purple-500/40 focus-within:shadow-lg focus-within:shadow-purple-500/10'
                        : 'bg-white border border-gray-200 focus-within:border-purple-400 focus-within:shadow-lg focus-within:shadow-purple-500/10'
                        }`}>
                        <div className="flex items-center gap-2 flex-1">
                            <Search size={20} className="text-purple-500 flex-shrink-0" />
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={e => { setSearchQuery(e.target.value); setShowSuggestions(true); }}
                                onFocus={() => setShowSuggestions(true)}
                                onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
                                placeholder={t('hero.searchPlaceholder')}
                                className={`flex-1 bg-transparent outline-none text-sm sm:text-base ${isDark ? 'text-white placeholder-navy-400' : 'text-gray-900 placeholder-gray-400'}`}
                            />
                        </div>
                        <button className="px-4 py-2 rounded-xl bg-purple-500 text-white text-sm font-medium hover:bg-purple-600 transition-colors flex items-center justify-center gap-1.5 flex-shrink-0">
                            <Sparkles size={14} />
                            {t('hero.searchBtn')}
                        </button>
                    </div>

                    {/* Suggestions dropdown */}
                    {showSuggestions && !searchQuery && (
                        <motion.div
                            initial={{ opacity: 0, y: -4 }}
                            animate={{ opacity: 1, y: 0 }}
                            className={`absolute top-full mt-2 w-full rounded-xl overflow-hidden shadow-xl z-10 ${isDark ? 'bg-navy-800 border border-purple-500/15' : 'bg-white border border-gray-100'
                                }`}
                        >
                            <p className={`px-4 pt-3 pb-1 text-xs font-semibold uppercase tracking-wider ${isDark ? 'text-navy-400' : 'text-gray-400'}`}>
                                Trending Searches
                            </p>
                            {suggestions.map((s, i) => (
                                <button
                                    key={i}
                                    onClick={() => setSearchQuery(s)}
                                    className={`w-full text-left px-4 py-2.5 flex items-center gap-2 text-sm transition-colors ${isDark ? 'text-navy-200 hover:bg-white/5' : 'text-gray-700 hover:bg-gray-50'
                                        }`}
                                >
                                    <TrendingUp size={14} className="text-purple-400" />
                                    {s}
                                    <ArrowRight size={12} className="ml-auto text-navy-500" />
                                </button>
                            ))}
                        </motion.div>
                    )}
                </motion.div>

                {/* Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-6 sm:gap-8 mt-8 sm:mt-12"
                >
                    {[
                        { label: t('hero.statTools'), value: '1,200+' },
                        { label: t('hero.statNews'), value: '500+' },
                        { label: t('hero.statModels'), value: '50+' },
                        { label: t('hero.statMcp'), value: '200+' },
                    ].map((stat, i) => (
                        <div key={i} className="text-center">
                            <p className="text-2xl sm:text-3xl font-black gradient-text">{stat.value}</p>
                            <p className={`text-xs mt-1 ${isDark ? 'text-navy-400' : 'text-gray-500'}`}>{stat.label}</p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
