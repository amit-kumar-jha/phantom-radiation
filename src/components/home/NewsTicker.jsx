import { useTheme } from '../../context/ThemeContext';
import { Zap } from 'lucide-react';

const tickerItems = [
    '🚀 GPT-5 breaks new reasoning benchmarks',
    '🤖 Google DeepMind robot cooks full meals autonomously',
    '💰 Anthropic raises $5B at $80B valuation',
    '🧬 AI-designed drug receives FDA approval',
    '🎬 Sora 2.0 generates 30-minute videos',
    '🖥️ NVIDIA Blackwell Ultra: 10x AI performance',
    '📱 Apple Intelligence 3.0 launches',
    '🇪🇺 EU AI Act enters full enforcement',
    '🦙 Meta releases Llama 4 open source',
    '🎓 AI tutors outperform human teachers in study',
];

export default function NewsTicker() {
    const { isDark } = useTheme();

    return (
        <div className={`relative overflow-hidden border-y ${isDark ? 'border-purple-500/10 bg-navy-900/50' : 'border-gray-200 bg-white/50'
            }`}>
            <div className="flex items-center">
                {/* Label */}
                <div className="flex-shrink-0 flex items-center gap-1.5 px-4 py-2.5 bg-purple-500 text-white text-xs font-bold uppercase tracking-wider z-10">
                    <Zap size={12} />
                    Breaking
                </div>

                {/* Scrolling content */}
                <div className="overflow-hidden flex-1">
                    <div className="ticker-animate flex items-center whitespace-nowrap">
                        {[...tickerItems, ...tickerItems].map((item, i) => (
                            <span
                                key={i}
                                className={`inline-flex items-center px-6 py-2.5 text-sm ${isDark ? 'text-navy-200' : 'text-gray-600'
                                    }`}
                            >
                                {item}
                                <span className="ml-6 text-purple-500/30">●</span>
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
