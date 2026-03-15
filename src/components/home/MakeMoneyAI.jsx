import { motion } from 'framer-motion';
import { DollarSign, Eye, ArrowRight } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const caseStudies = [
    { title: 'Build & Sell AI Chatbots', desc: 'Create custom GPT chatbots for businesses and charge $500-5000 per bot', views: '125K', earnings: '$8K/mo', emoji: '🤖', color: 'from-purple-500/20 to-cyan-500/20' },
    { title: 'AI Content Agency', desc: 'Start a content agency using AI writing tools to produce at scale', views: '98K', earnings: '$12K/mo', emoji: '✍️', color: 'from-pink-500/20 to-purple-500/20' },
    { title: 'AI Art & Print-on-Demand', desc: 'Generate AI artwork and sell on merchandise through POD platforms', views: '87K', earnings: '$3K/mo', emoji: '🎨', color: 'from-cyan-500/20 to-green-500/20' },
    { title: 'AI-Powered SaaS Products', desc: 'Build micro-SaaS tools using AI APIs and charge monthly subscriptions', views: '156K', earnings: '$25K/mo', emoji: '⚡', color: 'from-yellow-500/20 to-orange-500/20' },
    { title: 'AI Video Production', desc: 'Create faceless YouTube channels using AI video generation tools', views: '112K', earnings: '$6K/mo', emoji: '🎬', color: 'from-red-500/20 to-pink-500/20' },
    { title: 'AI Tutoring & Courses', desc: 'Create and sell online courses about AI tools and techniques', views: '72K', earnings: '$15K/mo', emoji: '📚', color: 'from-green-500/20 to-cyan-500/20' },
];

export default function MakeMoneyAI() {
    const { isDark } = useTheme();

    return (
        <section className={`py-16 ${isDark ? 'bg-navy-900/30' : 'bg-gray-50/50'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <div className="flex items-center gap-2 mb-1">
                            <DollarSign size={22} className="text-green-500" />
                            <h2 className={`text-2xl sm:text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                                Ways to <span className="gradient-text">Make Money</span> with AI
                            </h2>
                        </div>
                        <p className={`text-sm ${isDark ? 'text-navy-400' : 'text-gray-500'}`}>
                            Real case studies and earning potential
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {caseStudies.map((study, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="glass-card p-5 cursor-pointer group"
                        >
                            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${study.color} flex items-center justify-center text-2xl mb-4`}>
                                {study.emoji}
                            </div>

                            <h3 className={`font-bold text-base mb-2 group-hover:text-purple-400 transition-colors ${isDark ? 'text-white' : 'text-gray-900'}`}>
                                {study.title}
                            </h3>
                            <p className={`text-sm mb-4 ${isDark ? 'text-navy-300' : 'text-gray-500'}`}>
                                {study.desc}
                            </p>

                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <span className={`flex items-center gap-1 text-xs ${isDark ? 'text-navy-400' : 'text-gray-400'}`}>
                                        <Eye size={12} /> {study.views}
                                    </span>
                                    <span className="text-xs font-semibold text-green-400">
                                        {study.earnings}
                                    </span>
                                </div>
                                <ArrowRight size={14} className="text-purple-400 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
