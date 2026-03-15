import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, RadarChart,
    PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend
} from 'recharts';
import {
    BrainCircuit, Calculator, Trophy, ArrowUpDown, Check, X, ChevronDown, DollarSign
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import { getModels } from '../services/api';

export default function Models() {
    const { isDark } = useTheme();
    const { t } = useLanguage();
    const [sortKey, setSortKey] = useState('mmlu');
    const [sortDir, setSortDir] = useState('desc');
    const [compareIds, setCompareIds] = useState([]);
    const [showComparator, setShowComparator] = useState(false);
    const [calcTokens, setCalcTokens] = useState(1000000);
    const [calcModel, setCalcModel] = useState('');
    const [showCalculator, setShowCalculator] = useState(false);
    const [allModels, setAllModels] = useState([]);
    const [benchmarkLabels, setBenchmarkLabels] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getModels().then(data => {
            setAllModels(data.models);
            setBenchmarkLabels(data.benchmarkLabels || {});
            if (data.models.length > 0) setCalcModel(data.models[0].name);
            setLoading(false);
        }).catch(() => setLoading(false));
    }, []);

    const sorted = useMemo(() => {
        return [...allModels].sort((a, b) => {
            const valA = (a.benchmarks || {})[sortKey] || 0;
            const valB = (b.benchmarks || {})[sortKey] || 0;
            return sortDir === 'desc' ? valB - valA : valA - valB;
        });
    }, [sortKey, sortDir, allModels]);

    const toggleSort = (key) => {
        if (sortKey === key) setSortDir(d => d === 'desc' ? 'asc' : 'desc');
        else { setSortKey(key); setSortDir('desc'); }
    };

    const toggleCompare = (id) => {
        setCompareIds(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
    };

    const compareModels = compareIds.map(id => allModels.find(m => m.id === id)).filter(Boolean);

    const chartData = Object.keys(benchmarkLabels).map(key => {
        const d = { benchmark: benchmarkLabels[key] };
        compareModels.forEach(m => { d[m.name] = m.benchmarks[key]; });
        return d;
    });

    const selectedCalcModel = allModels.find(m => m.name === calcModel);
    const inputCost = selectedCalcModel ? (calcTokens / 1000000) * selectedCalcModel.inputPrice : 0;
    const outputCost = selectedCalcModel ? (calcTokens / 1000000) * selectedCalcModel.outputPrice : 0;

    const colors = ['#7C3AED', '#06B6D4', '#F59E0B', '#EF4444', '#10B981'];

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8 pb-12">
            {/* Header */}
            <div className="mb-8">
                <h1 className={`text-3xl sm:text-4xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {t('models.title')} <span className="gradient-text">{t('models.titleHighlight')}</span> {t('models.titleEnd')}
                </h1>
                <p className={`text-sm ${isDark ? 'text-navy-400' : 'text-gray-500'}`}>
                    {t('models.sub')}
                </p>
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap gap-3 mb-8">
                <button onClick={() => { setShowComparator(!showComparator); setShowCalculator(false); }}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${showComparator ? 'bg-purple-500 text-white' : isDark ? 'bg-navy-800 text-navy-200 border border-navy-700' : 'bg-white text-gray-700 border border-gray-200'
                        }`}>
                    <BrainCircuit size={14} /> Model Comparator {compareIds.length > 0 && `(${compareIds.length})`}
                </button>
                <button onClick={() => { setShowCalculator(!showCalculator); setShowComparator(false); }}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${showCalculator ? 'bg-cyan-500 text-white' : isDark ? 'bg-navy-800 text-navy-200 border border-navy-700' : 'bg-white text-gray-700 border border-gray-200'
                        }`}>
                    <Calculator size={14} /> Cost Calculator
                </button>
            </div>

            {/* Model Comparator */}
            <AnimatePresence>
                {showComparator && compareModels.length >= 2 && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden mb-8">
                        <div className="glass-card p-6">
                            <h3 className={`font-bold text-lg mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                                Benchmark Comparison
                            </h3>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                <div style={{ height: 300 }}>
                                    <ResponsiveContainer>
                                        <BarChart data={chartData} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                                            <CartesianGrid strokeDasharray="3 3" stroke={isDark ? '#1C2744' : '#E5E7EB'} />
                                            <XAxis dataKey="benchmark" tick={{ fill: isDark ? '#6B7AA0' : '#6B7280', fontSize: 11 }} />
                                            <YAxis domain={[0, 100]} tick={{ fill: isDark ? '#6B7AA0' : '#6B7280', fontSize: 11 }} />
                                            <Tooltip
                                                contentStyle={{ backgroundColor: isDark ? '#151D35' : '#FFF', border: isDark ? '1px solid #243054' : '1px solid #E5E7EB', borderRadius: 12 }}
                                                labelStyle={{ color: isDark ? '#E2E8F0' : '#111827' }}
                                            />
                                            <Legend />
                                            {compareModels.map((m, i) => (
                                                <Bar key={m.id} dataKey={m.name} fill={colors[i % colors.length]} radius={[4, 4, 0, 0]} />
                                            ))}
                                        </BarChart>
                                    </ResponsiveContainer>
                                </div>
                                <div style={{ height: 300 }}>
                                    <ResponsiveContainer>
                                        <RadarChart data={chartData}>
                                            <PolarGrid stroke={isDark ? '#1C2744' : '#E5E7EB'} />
                                            <PolarAngleAxis dataKey="benchmark" tick={{ fill: isDark ? '#6B7AA0' : '#6B7280', fontSize: 10 }} />
                                            <PolarRadiusAxis angle={30} domain={[0, 100]} tick={{ fill: isDark ? '#6B7AA0' : '#6B7280', fontSize: 10 }} />
                                            {compareModels.map((m, i) => (
                                                <Radar key={m.id} name={m.name} dataKey={m.name} stroke={colors[i % colors.length]} fill={colors[i % colors.length]} fillOpacity={0.15} />
                                            ))}
                                            <Legend />
                                        </RadarChart>
                                    </ResponsiveContainer>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Cost Calculator */}
            <AnimatePresence>
                {showCalculator && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden mb-8">
                        <div className="glass-card p-6">
                            <h3 className={`font-bold text-lg mb-4 flex items-center gap-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                                <DollarSign size={18} className="text-green-400" /> LLM Cost Calculator
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                                <div>
                                    <label className={`text-xs font-semibold uppercase tracking-wider block mb-2 ${isDark ? 'text-navy-400' : 'text-gray-400'}`}>Tokens</label>
                                    <input type="number" value={calcTokens} onChange={e => setCalcTokens(Number(e.target.value))}
                                        className={`w-full px-4 py-2.5 rounded-xl outline-none text-sm ${isDark ? 'bg-navy-800 text-white border border-navy-700' : 'bg-gray-50 text-gray-900 border border-gray-200'}`} />
                                </div>
                                <div>
                                    <label className={`text-xs font-semibold uppercase tracking-wider block mb-2 ${isDark ? 'text-navy-400' : 'text-gray-400'}`}>Model</label>
                                    <select value={calcModel} onChange={e => setCalcModel(e.target.value)}
                                        className={`w-full px-4 py-2.5 rounded-xl outline-none text-sm ${isDark ? 'bg-navy-800 text-white border border-navy-700' : 'bg-gray-50 text-gray-900 border border-gray-200'}`}>
                                        {allModels.map(m => <option key={m.id} value={m.name}>{m.name} — ${m.inputPrice}/M in</option>)}
                                    </select>
                                </div>
                                <div>
                                    <label className={`text-xs font-semibold uppercase tracking-wider block mb-2 ${isDark ? 'text-navy-400' : 'text-gray-400'}`}>Estimated Cost</label>
                                    <div className={`px-4 py-2.5 rounded-xl ${isDark ? 'bg-navy-800 border border-navy-700' : 'bg-gray-50 border border-gray-200'}`}>
                                        <p className="text-lg font-bold text-green-400">${(inputCost + outputCost).toFixed(4)}</p>
                                        <p className={`text-[10px] ${isDark ? 'text-navy-400' : 'text-gray-400'}`}>
                                            Input: ${inputCost.toFixed(4)} · Output: ${outputCost.toFixed(4)}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Model cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mb-10">
                {allModels.map((model, i) => (
                    <motion.div key={model.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}
                        className={`glass-card p-5 relative ${showComparator && compareIds.includes(model.id) ? 'ring-2 ring-purple-500' : ''}`}>
                        {showComparator && (
                            <button onClick={() => toggleCompare(model.id)} className={`absolute top-3 right-3 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${compareIds.includes(model.id) ? 'bg-purple-500 border-purple-500' : isDark ? 'border-navy-500' : 'border-gray-300'}`}>
                                {compareIds.includes(model.id) && <Check size={12} className="text-white" />}
                            </button>
                        )}
                        <div className="flex items-center gap-3 mb-3">
                            <span className="text-2xl">{model.logo}</span>
                            <div>
                                <h3 className={`font-bold text-sm ${isDark ? 'text-white' : 'text-gray-900'}`}>{model.name}</h3>
                                <p className={`text-xs ${isDark ? 'text-navy-400' : 'text-gray-500'}`}>{model.provider}</p>
                            </div>
                        </div>
                        <p className={`text-xs mb-3 line-clamp-2 ${isDark ? 'text-navy-300' : 'text-gray-500'}`}>{model.description}</p>
                        <div className="grid grid-cols-2 gap-2 mb-3">
                            <div className={`text-center p-2 rounded-lg ${isDark ? 'bg-navy-800' : 'bg-gray-50'}`}>
                                <p className={`text-[10px] ${isDark ? 'text-navy-400' : 'text-gray-400'}`}>Parameters</p>
                                <p className={`text-xs font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>{model.params}</p>
                            </div>
                            <div className={`text-center p-2 rounded-lg ${isDark ? 'bg-navy-800' : 'bg-gray-50'}`}>
                                <p className={`text-[10px] ${isDark ? 'text-navy-400' : 'text-gray-400'}`}>Context</p>
                                <p className={`text-xs font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>{model.contextWindow}</p>
                            </div>
                            <div className={`text-center p-2 rounded-lg ${isDark ? 'bg-navy-800' : 'bg-gray-50'}`}>
                                <p className={`text-[10px] ${isDark ? 'text-navy-400' : 'text-gray-400'}`}>Input/M</p>
                                <p className={`text-xs font-bold ${model.inputPrice === 0 ? 'text-green-400' : isDark ? 'text-white' : 'text-gray-900'}`}>{model.inputPrice === 0 ? 'Free' : `$${model.inputPrice}`}</p>
                            </div>
                            <div className={`text-center p-2 rounded-lg ${isDark ? 'bg-navy-800' : 'bg-gray-50'}`}>
                                <p className={`text-[10px] ${isDark ? 'text-navy-400' : 'text-gray-400'}`}>Output/M</p>
                                <p className={`text-xs font-bold ${model.outputPrice === 0 ? 'text-green-400' : isDark ? 'text-white' : 'text-gray-900'}`}>{model.outputPrice === 0 ? 'Free' : `$${model.outputPrice}`}</p>
                            </div>
                        </div>
                        <div className={`pt-3 border-t ${isDark ? 'border-navy-700' : 'border-gray-100'}`}>
                            <p className={`text-[10px] font-semibold uppercase tracking-wider mb-1.5 ${isDark ? 'text-navy-400' : 'text-gray-400'}`}>Benchmarks</p>
                            <div className="space-y-1.5">
                                {Object.entries(model.benchmarks).map(([key, val]) => (
                                    <div key={key} className="flex items-center gap-2">
                                        <span className={`text-[10px] w-16 ${isDark ? 'text-navy-400' : 'text-gray-400'}`}>{key.toUpperCase()}</span>
                                        <div className={`flex-1 h-1.5 rounded-full ${isDark ? 'bg-navy-700' : 'bg-gray-200'}`}>
                                            <div className="h-full rounded-full animated-gradient" style={{ width: `${val}%` }} />
                                        </div>
                                        <span className={`text-[10px] font-bold w-8 text-right ${isDark ? 'text-white' : 'text-gray-900'}`}>{val}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Leaderboard */}
            <div className="mb-8">
                <div className="flex items-center gap-2 mb-4">
                    <Trophy size={20} className="text-yellow-500" />
                    <h2 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('models.leaderboardTitle')}</h2>
                </div>
                <div className="overflow-x-auto -mx-4 sm:mx-0">
                    <table className={`w-full text-sm min-w-[600px] ${isDark ? 'text-navy-200' : 'text-gray-700'}`}>
                        <thead>
                            <tr className={isDark ? 'border-b border-navy-700' : 'border-b border-gray-200'}>
                                <th className="text-left py-3 px-3 font-semibold">#</th>
                                <th className="text-left py-3 px-3 font-semibold">Model</th>
                                {Object.entries(benchmarkLabels).map(([key, label]) => (
                                    <th key={key} className="text-center py-3 px-3 cursor-pointer hover:text-purple-400 transition-colors" onClick={() => toggleSort(key)}>
                                        <span className="flex items-center justify-center gap-1 font-semibold">
                                            {label} <ArrowUpDown size={12} className={sortKey === key ? 'text-purple-400' : ''} />
                                        </span>
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {sorted.map((model, i) => (
                                <tr key={model.id} className={`${isDark ? 'border-b border-navy-800 hover:bg-white/5' : 'border-b border-gray-100 hover:bg-gray-50'} transition-colors`}>
                                    <td className="py-3 px-3 font-bold">{i + 1}</td>
                                    <td className="py-3 px-3">
                                        <div className="flex items-center gap-2">
                                            <span>{model.logo}</span>
                                            <div>
                                                <p className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>{model.name}</p>
                                                <p className={`text-xs ${isDark ? 'text-navy-400' : 'text-gray-400'}`}>{model.provider}</p>
                                            </div>
                                        </div>
                                    </td>
                                    {Object.keys(benchmarkLabels).map(key => (
                                        <td key={key} className={`text-center py-3 px-3 font-medium ${model.benchmarks[key] === Math.max(...allModels.map(m => m.benchmarks[key]))
                                            ? 'text-green-400 font-bold' : ''
                                            }`}>
                                            {model.benchmarks[key] || '—'}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </motion.div>
    );
}
