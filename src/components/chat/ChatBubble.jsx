import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot, User, Sparkles } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { toolsData } from '../../data/toolsData';

const botResponses = [
    { trigger: ['image', 'photo', 'picture', 'art', 'design'], tools: ['Midjourney', 'Stable Diffusion', 'Leonardo AI'], text: 'For image generation and design, I recommend these top tools:' },
    { trigger: ['video', 'film', 'movie', 'animation'], tools: ['Runway', 'Kling AI', 'Pika', 'Synthesia'], text: 'Here are the best AI video tools available:' },
    { trigger: ['code', 'programming', 'develop', 'build', 'app'], tools: ['GitHub Copilot', 'Cursor', 'Bolt.new', 'Lovable'], text: 'For coding and development, check out these tools:' },
    { trigger: ['write', 'writing', 'content', 'blog', 'article'], tools: ['ChatGPT', 'Claude', 'Jasper', 'Notion AI'], text: 'For writing and content creation, try these:' },
    { trigger: ['music', 'audio', 'voice', 'sound', 'podcast'], tools: ['ElevenLabs', 'Suno', 'Descript'], text: 'For audio and music, these tools are excellent:' },
    { trigger: ['search', 'research', 'find'], tools: ['Perplexity AI', 'ChatGPT'], text: 'For AI-powered search and research:' },
    { trigger: ['present', 'slide', 'deck'], tools: ['Gamma', 'Notion AI'], text: 'For presentations, I suggest:' },
];

export default function ChatBubble() {
    const { isDark } = useTheme();
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { role: 'bot', text: '👋 Hi! I\'m your AI Tool Assistant. Describe what you need, and I\'ll recommend the best AI tools for you!' }
    ]);
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    const handleSend = () => {
        if (!input.trim()) return;
        const userMsg = input.trim();
        setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
        setInput('');
        setIsTyping(true);

        setTimeout(() => {
            const lower = userMsg.toLowerCase();
            const match = botResponses.find(r => r.trigger.some(t => lower.includes(t)));

            if (match) {
                const matchedTools = match.tools.map(name => toolsData.find(t => t.name === name)).filter(Boolean);
                setMessages(prev => [...prev, {
                    role: 'bot',
                    text: match.text,
                    tools: matchedTools
                }]);
            } else {
                setMessages(prev => [...prev, {
                    role: 'bot',
                    text: '🤔 I can help you find the right AI tool! Try describing your use case. For example: "I need to generate images" or "I want to write code faster".'
                }]);
            }
            setIsTyping(false);
        }, 1000 + Math.random() * 500);
    };

    return (
        <>
            {/* Chat button */}
            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-12 h-12 sm:w-14 sm:h-14 rounded-full animated-gradient flex items-center justify-center shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-shadow"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                <AnimatePresence mode="wait">
                    {isOpen ? (
                        <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
                            <X size={22} className="text-white" />
                        </motion.div>
                    ) : (
                        <motion.div key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
                            <MessageCircle size={22} className="text-white" />
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.button>

            {/* Chat panel */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.9 }}
                        className={`fixed bottom-20 right-3 sm:bottom-24 sm:right-6 z-50 w-[calc(100vw-1.5rem)] sm:w-[380px] max-h-[70vh] sm:max-h-[500px] rounded-2xl shadow-2xl overflow-hidden flex flex-col ${isDark ? 'bg-navy-900 border border-purple-500/20' : 'bg-white border border-gray-200'
                            }`}
                    >
                        {/* Header */}
                        <div className="animated-gradient px-4 py-3 flex items-center gap-2">
                            <Sparkles size={18} className="text-white" />
                            <div>
                                <p className="text-white font-semibold text-sm">AI Tool Assistant</p>
                                <p className="text-white/70 text-xs">Powered by AI • Always Online</p>
                            </div>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-3 min-h-[280px]">
                            {messages.map((msg, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 8 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className={`flex gap-2 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
                                >
                                    <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 ${msg.role === 'bot' ? 'animated-gradient' : 'bg-cyan-500'
                                        }`}>
                                        {msg.role === 'bot' ? <Bot size={14} className="text-white" /> : <User size={14} className="text-white" />}
                                    </div>
                                    <div className={`max-w-[75%] rounded-2xl px-3.5 py-2.5 text-sm ${msg.role === 'user'
                                        ? 'bg-purple-500 text-white rounded-br-sm'
                                        : isDark
                                            ? 'bg-navy-800 text-navy-100 rounded-bl-sm'
                                            : 'bg-gray-100 text-gray-800 rounded-bl-sm'
                                        }`}>
                                        <p>{msg.text}</p>
                                        {msg.tools && (
                                            <div className="mt-2 space-y-1.5">
                                                {msg.tools.map(tool => (
                                                    <div key={tool.id} className={`flex items-center gap-2 p-2 rounded-lg ${isDark ? 'bg-navy-700/50' : 'bg-white'
                                                        }`}>
                                                        <span className="text-lg">{tool.logo}</span>
                                                        <div className="flex-1 min-w-0">
                                                            <p className={`text-xs font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>{tool.name}</p>
                                                            <p className={`text-[10px] truncate ${isDark ? 'text-navy-400' : 'text-gray-500'}`}>{tool.pricing} · ⭐ {tool.rating}</p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                            {isTyping && (
                                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex gap-2">
                                    <div className="w-7 h-7 rounded-full animated-gradient flex items-center justify-center">
                                        <Bot size={14} className="text-white" />
                                    </div>
                                    <div className={`rounded-2xl rounded-bl-sm px-4 py-3 ${isDark ? 'bg-navy-800' : 'bg-gray-100'}`}>
                                        <div className="flex gap-1">
                                            <div className="w-2 h-2 rounded-full bg-purple-500 animate-bounce" style={{ animationDelay: '0ms' }} />
                                            <div className="w-2 h-2 rounded-full bg-purple-500 animate-bounce" style={{ animationDelay: '150ms' }} />
                                            <div className="w-2 h-2 rounded-full bg-purple-500 animate-bounce" style={{ animationDelay: '300ms' }} />
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input */}
                        <div className={`p-3 border-t ${isDark ? 'border-navy-700' : 'border-gray-100'}`}>
                            <div className={`flex items-center gap-2 rounded-xl px-3 py-2 ${isDark ? 'bg-navy-800' : 'bg-gray-50'}`}>
                                <input
                                    type="text"
                                    value={input}
                                    onChange={e => setInput(e.target.value)}
                                    onKeyDown={e => e.key === 'Enter' && handleSend()}
                                    placeholder="Describe what you need..."
                                    className={`flex-1 bg-transparent outline-none text-sm ${isDark ? 'text-white placeholder-navy-400' : 'text-gray-900 placeholder-gray-400'}`}
                                />
                                <button
                                    onClick={handleSend}
                                    disabled={!input.trim()}
                                    className="p-1.5 rounded-lg bg-purple-500 text-white disabled:opacity-30 hover:bg-purple-600 transition-colors"
                                >
                                    <Send size={14} />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
