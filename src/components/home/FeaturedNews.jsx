import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, ArrowRight } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { newsData } from '../../data/newsData';

const categoryColors = {
    LLM: 'bg-purple-500/20 text-purple-400',
    Robotics: 'bg-cyan-500/20 text-cyan-400',
    Business: 'bg-green-500/20 text-green-400',
    Research: 'bg-yellow-500/20 text-yellow-400',
    Products: 'bg-pink-500/20 text-pink-400',
};

export default function FeaturedNews() {
    const { isDark } = useTheme();
    const featured = newsData.slice(0, 6);

    return (
        <div>
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h2 className={`text-2xl sm:text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        Featured <span className="gradient-text">News</span>
                    </h2>
                    <p className={`text-sm mt-1 ${isDark ? 'text-navy-400' : 'text-gray-500'}`}>
                        Top stories from the AI world
                    </p>
                </div>
                <Link
                    to="/news"
                    className="flex items-center gap-1 text-sm font-medium text-purple-400 hover:text-purple-300 transition-colors"
                >
                    View All <ArrowRight size={14} />
                </Link>
            </div>

            {/* Bento grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 auto-rows-min">
                {featured.map((article, i) => (
                    <motion.div
                        key={article.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className={`glass-card overflow-hidden group ${i === 0 ? 'md:col-span-2 md:row-span-2' : ''
                            }`}
                    >
                        <Link to={`/news/${article.id}`} className="block">
                            {/* Image */}
                            <div className={`overflow-hidden ${i === 0 ? 'h-48 sm:h-64 md:h-80' : 'h-36 sm:h-40'}`}>
                                <img
                                    src={article.image}
                                    alt={article.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-4 sm:p-5">
                                <div className="flex items-center gap-2 mb-2">
                                    <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded-md ${categoryColors[article.category] || 'bg-gray-500/20 text-gray-400'}`}>
                                        {article.category}
                                    </span>
                                    <span className={`text-xs flex items-center gap-1 ${isDark ? 'text-navy-400' : 'text-gray-400'}`}>
                                        <Clock size={10} /> {article.readTime} min read
                                    </span>
                                </div>
                                <h3 className={`font-bold leading-snug group-hover:text-purple-400 transition-colors ${i === 0 ? 'text-base sm:text-lg md:text-xl' : 'text-sm'
                                    } ${isDark ? 'text-white' : 'text-gray-900'}`}>
                                    {article.title}
                                </h3>
                                {i === 0 && (
                                    <p className={`text-sm mt-2 line-clamp-2 ${isDark ? 'text-navy-300' : 'text-gray-500'}`}>
                                        {article.excerpt}
                                    </p>
                                )}
                                <p className={`text-xs mt-3 ${isDark ? 'text-navy-500' : 'text-gray-400'}`}>
                                    {article.date} · By {article.author}
                                </p>
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
