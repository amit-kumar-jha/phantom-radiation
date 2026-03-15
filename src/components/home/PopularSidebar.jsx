import { motion } from 'framer-motion';
import { TrendingUp, Flame, Eye } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { newsData } from '../../data/newsData';

export default function PopularSidebar() {
    const { isDark } = useTheme();
    const popular = newsData.slice(0, 5);

    return (
        <div className={`glass-card p-5 sm:p-6 rounded-2xl h-full`}>
            <div className="flex items-center gap-2 mb-5">
                <Flame size={20} className="text-orange-500" />
                <h2 className={`text-lg sm:text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    Most Popular
                </h2>
                <span className="ml-auto px-2 py-0.5 rounded-md bg-orange-500/20 text-orange-400 text-[10px] font-bold uppercase">
                    Trending
                </span>
            </div>

            <div className="space-y-4">
                {popular.map((article, i) => (
                    <motion.div
                        key={article.id}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className={`flex items-start gap-3 sm:gap-4 group cursor-pointer ${i !== popular.length - 1
                            ? `pb-4 border-b ${isDark ? 'border-navy-700' : 'border-gray-200'}`
                            : ''
                            }`}
                    >
                        {/* Rank number */}
                        <div className="flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center font-black text-base sm:text-lg"
                            style={{
                                background: i === 0
                                    ? 'linear-gradient(135deg, #7C3AED, #06B6D4)'
                                    : i === 1
                                        ? 'linear-gradient(135deg, rgba(124,58,237,0.3), rgba(6,182,212,0.3))'
                                        : isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)',
                                color: i < 2 ? 'white' : isDark ? '#6B7AA0' : '#9CA3AF'
                            }}
                        >
                            {i + 1}
                        </div>

                        {/* Content */}
                        <div className="flex-1 min-w-0">
                            <h4 className={`text-sm font-semibold leading-snug group-hover:text-purple-400 transition-colors line-clamp-2 ${isDark ? 'text-white' : 'text-gray-900'
                                }`}>
                                {article.title}
                            </h4>
                            <div className={`flex items-center flex-wrap gap-x-3 gap-y-1 mt-1.5 text-xs ${isDark ? 'text-navy-400' : 'text-gray-400'}`}>
                                <span>{article.category}</span>
                                <span className="flex items-center gap-1">
                                    <Eye size={10} /> {Math.floor(Math.random() * 50 + 10)}K views
                                </span>
                                {i < 3 && (
                                    <span className="flex items-center gap-0.5 text-green-400">
                                        <TrendingUp size={10} /> trending
                                    </span>
                                )}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
