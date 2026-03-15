import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { toolsData } from '../../data/toolsData';

export default function ToolsQuickAccess() {
    const { isDark } = useTheme();
    const scrollRef = useRef(null);

    const scroll = (dir) => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: dir * 200, behavior: 'smooth' });
        }
    };

    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h2 className={`text-2xl sm:text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        AI <span className="gradient-text">Tools</span> Quick Access
                    </h2>
                    <p className={`text-sm mt-1 ${isDark ? 'text-navy-400' : 'text-gray-500'}`}>
                        Popular tools at your fingertips
                    </p>
                </div>
                <div className="flex items-center gap-2">
                    <button onClick={() => scroll(-1)} className={`p-2 rounded-xl transition-all ${isDark ? 'hover:bg-white/5 text-navy-300' : 'hover:bg-gray-100 text-gray-500'}`}>
                        <ChevronLeft size={18} />
                    </button>
                    <button onClick={() => scroll(1)} className={`p-2 rounded-xl transition-all ${isDark ? 'hover:bg-white/5 text-navy-300' : 'hover:bg-gray-100 text-gray-500'}`}>
                        <ChevronRight size={18} />
                    </button>
                    <Link to="/tools" className="hidden sm:flex items-center gap-1 text-sm font-medium text-purple-400 hover:text-purple-300 transition-colors ml-2">
                        View All <ArrowRight size={14} />
                    </Link>
                </div>
            </div>

            <div ref={scrollRef} className="flex gap-3 overflow-x-auto no-scrollbar pb-2">
                {toolsData.map((tool, i) => (
                    <motion.div
                        key={tool.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.03 }}
                        className="flex-shrink-0"
                    >
                        <div className={`glass-card w-28 h-28 flex flex-col items-center justify-center gap-2 cursor-pointer group relative`}>
                            <span className="text-3xl group-hover:scale-110 transition-transform">{tool.logo}</span>
                            <p className={`text-xs font-medium text-center px-1 truncate w-full ${isDark ? 'text-navy-200' : 'text-gray-700'}`}>
                                {tool.name}
                            </p>

                            {/* Tooltip */}
                            <div className={`absolute bottom-full mb-2 left-1/2 -translate-x-1/2 w-48 p-3 rounded-xl opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-200 z-20 ${isDark ? 'bg-navy-800 border border-purple-500/20' : 'bg-white border border-gray-200 shadow-lg'
                                }`}>
                                <p className={`text-xs font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>{tool.name}</p>
                                <p className={`text-[10px] mt-1 ${isDark ? 'text-navy-400' : 'text-gray-500'}`}>{tool.description.slice(0, 80)}...</p>
                                <div className="flex items-center gap-2 mt-1.5">
                                    <span className="text-[10px] text-yellow-400">⭐ {tool.rating}</span>
                                    <span className={`text-[10px] ${isDark ? 'text-navy-400' : 'text-gray-400'}`}>{tool.pricing}</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
