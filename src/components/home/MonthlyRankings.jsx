import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TrendingUp, TrendingDown, Minus, Trophy, ArrowRight } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { toolsData } from '../../data/toolsData';

const tabs = ['Overall', 'Image', 'Video', 'Dev Tools'];

const rankingsByTab = {
    Overall: toolsData.slice(0, 10),
    Image: toolsData.filter(t => t.category === 'Image'),
    Video: toolsData.filter(t => t.category === 'Video'),
    'Dev Tools': toolsData.filter(t => t.category === 'Dev Tools'),
};

const trendIcon = {
    up: <TrendingUp size={14} className="text-green-400" />,
    down: <TrendingDown size={14} className="text-red-400" />,
    stable: <Minus size={14} className="text-yellow-400" />,
};

export default function MonthlyRankings() {
    const { isDark } = useTheme();
    const [activeTab, setActiveTab] = useState('Overall');
    const tools = rankingsByTab[activeTab] || [];

    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
                <div>
                    <div className="flex items-center gap-2 mb-1">
                        <Trophy size={22} className="text-yellow-500" />
                        <h2 className={`text-2xl sm:text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                            Monthly <span className="gradient-text">Rankings</span>
                        </h2>
                    </div>
                    <p className={`text-sm ${isDark ? 'text-navy-400' : 'text-gray-500'}`}>
                        March 2026 · Updated daily
                    </p>
                </div>

                {/* Tabs */}
                <div className={`flex rounded-xl p-1 overflow-x-auto no-scrollbar ${isDark ? 'bg-navy-800' : 'bg-gray-100'}`}>
                    {tabs.map(tab => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-3 sm:px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 whitespace-nowrap ${activeTab === tab
                                ? 'bg-purple-500 text-white shadow-lg shadow-purple-500/20'
                                : isDark ? 'text-navy-300 hover:text-white' : 'text-gray-500 hover:text-gray-900'
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
            </div>

            {/* Rankings list */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="grid gap-2"
                >
                    {tools.map((tool, i) => (
                        <motion.div
                            key={tool.id}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.05 }}
                            className={`glass-card flex items-center gap-4 px-4 py-3 cursor-pointer group`}
                        >
                            {/* Rank */}
                            <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm flex-shrink-0 ${i === 0
                                ? 'animated-gradient text-white'
                                : i === 1
                                    ? 'bg-gradient-to-br from-gray-300 to-gray-400 text-gray-800'
                                    : i === 2
                                        ? 'bg-gradient-to-br from-amber-600 to-amber-700 text-white'
                                        : isDark ? 'bg-navy-700 text-navy-300' : 'bg-gray-200 text-gray-500'
                                }`}>
                                {i + 1}
                            </div>

                            {/* Tool info */}
                            <span className="text-2xl flex-shrink-0">{tool.logo}</span>
                            <div className="flex-1 min-w-0">
                                <p className={`font-semibold text-sm group-hover:text-purple-400 transition-colors ${isDark ? 'text-white' : 'text-gray-900'}`}>
                                    {tool.name}
                                </p>
                                <p className={`text-xs truncate ${isDark ? 'text-navy-400' : 'text-gray-500'}`}>
                                    {tool.category} · {tool.pricing}
                                </p>
                            </div>

                            {/* Monthly visits */}
                            <div className="hidden sm:block text-right">
                                <p className={`text-sm font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>{tool.monthlyVisits}</p>
                                <p className={`text-xs ${isDark ? 'text-navy-400' : 'text-gray-500'}`}>visits/mo</p>
                            </div>

                            {/* Trend */}
                            <div className="flex-shrink-0">
                                {trendIcon[tool.trend]}
                            </div>

                            {/* Rating */}
                            <div className="hidden sm:flex items-center gap-1">
                                <span className="text-yellow-400 text-xs">⭐</span>
                                <span className={`text-sm font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>{tool.rating}</span>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </AnimatePresence>
        </section>
    );
}
