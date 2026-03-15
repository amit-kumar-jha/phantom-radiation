import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import { useLanguage } from '../../context/LanguageContext';
import { useAuth } from '../../context/AuthContext';
import {
    Sun, Moon, Menu, X, Search, Newspaper, Wrench,
    BrainCircuit, Plug, BarChart3, ChevronDown, User, LogOut
} from 'lucide-react';

const navLinks = [
    { path: '/news', tKey: 'nav.news', icon: Newspaper },
    { path: '/tools', tKey: 'nav.tools', icon: Wrench },
    { path: '/models', tKey: 'nav.models', icon: BrainCircuit },
    { path: '/mcp', tKey: 'nav.mcp', icon: Plug },
    { path: '/brand', tKey: 'nav.brand', icon: BarChart3 },
];

export default function Navbar({ onSearchOpen }) {
    const { isDark, toggleTheme } = useTheme();
    const { currentLang, setLanguage, languages, t } = useLanguage();
    const { user, signOut } = useAuth();
    const [mobileOpen, setMobileOpen] = useState(false);
    const [langOpen, setLangOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const langRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setMobileOpen(false);
    }, [location]);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (langRef.current && !langRef.current.contains(e.target)) setLangOpen(false);
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
            ? 'glass shadow-lg shadow-purple-500/5'
            : 'bg-transparent'
            }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2 group">
                        <div className="w-9 h-9 rounded-xl animated-gradient flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-purple-500/20">
                            AI
                        </div>
                        <span className="text-xl font-bold gradient-text hidden sm:block">
                            cipherhub.io
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-1">
                        {navLinks.map(({ path, tKey, icon: Icon }) => (
                            <Link
                                key={path}
                                to={path}
                                className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${location.pathname === path
                                    ? 'text-purple-400 bg-purple-500/10'
                                    : isDark
                                        ? 'text-navy-200 hover:text-white hover:bg-white/5'
                                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                                    }`}
                            >
                                <Icon size={16} />
                                {t(tKey)}
                            </Link>
                        ))}
                    </div>

                    {/* Right actions */}
                    <div className="flex items-center gap-2">
                        {/* Search button */}
                        <button
                            onClick={onSearchOpen}
                            className={`p-2 rounded-lg transition-all duration-200 ${isDark ? 'hover:bg-white/5 text-navy-200' : 'hover:bg-gray-100 text-gray-600'
                                }`}
                            title="Search (Press /)"
                        >
                            <Search size={18} />
                        </button>

                        {/* Language switcher */}
                        <div className="relative" ref={langRef}>
                            <button
                                onClick={() => setLangOpen(!langOpen)}
                                className={`flex items-center gap-1.5 px-2 sm:px-2.5 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${isDark ? 'hover:bg-white/5 text-navy-200' : 'hover:bg-gray-100 text-gray-600'}`}
                            >
                                <span className="text-base">{currentLang.flag}</span>
                                <span className="hidden sm:inline text-xs font-semibold">{currentLang.code}</span>
                                <ChevronDown size={12} className={`transition-transform duration-200 ${langOpen ? 'rotate-180' : ''}`} />
                            </button>
                            <AnimatePresence>
                                {langOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -8, scale: 0.95 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: -8, scale: 0.95 }}
                                        transition={{ duration: 0.15 }}
                                        className="absolute right-0 mt-2 w-48 glass-card p-1.5 rounded-xl overflow-hidden shadow-xl shadow-purple-500/10 z-50"
                                    >
                                        <div className="px-2.5 py-1.5 mb-1">
                                            <p className={`text-[10px] uppercase tracking-wider font-semibold ${isDark ? 'text-navy-400' : 'text-gray-400'}`}>{t('nav.selectLang')}</p>
                                        </div>
                                        {languages.map(lang => (
                                            <button
                                                key={lang.code}
                                                onClick={() => { setLanguage(lang); setLangOpen(false); }}
                                                className={`w-full flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-sm transition-all duration-150 ${currentLang.code === lang.code
                                                    ? 'text-purple-400 bg-purple-500/10 font-medium'
                                                    : isDark ? 'text-navy-200 hover:bg-white/5' : 'text-gray-600 hover:bg-gray-100'
                                                    }`}
                                            >
                                                <span className="text-base">{lang.flag}</span>
                                                <span className="flex-1 text-left">{lang.label}</span>
                                                {currentLang.code === lang.code && (
                                                    <span className="text-purple-400 text-xs">✓</span>
                                                )}
                                            </button>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* User Auth */}
                        {user ? (
                            <div className="flex items-center gap-3 ml-2 mr-2">
                                <div className="hidden lg:flex items-center gap-2">
                                    <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center">
                                        <User size={14} className="text-purple-400" />
                                    </div>
                                    <span className={`text-xs font-medium ${isDark ? 'text-navy-200' : 'text-gray-600'}`}>
                                        {user.email.split('@')[0]}
                                    </span>
                                </div>
                                <button
                                    onClick={signOut}
                                    className={`p-2 rounded-lg transition-all duration-200 ${isDark ? 'hover:bg-white/5 text-navy-200 hover:text-red-400' : 'hover:bg-gray-100 text-gray-600 hover:text-red-500'}`}
                                    title="Sign Out"
                                >
                                    <LogOut size={16} />
                                </button>
                            </div>
                        ) : (
                            <Link
                                to="/login"
                                className={`ml-2 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${isDark ? 'bg-purple-600/20 text-purple-400 hover:bg-purple-600/30' : 'bg-purple-100 text-purple-700 hover:bg-purple-200'}`}
                            >
                                Sign In
                            </Link>
                        )}

                        {/* Theme toggle */}
                        <button
                            onClick={toggleTheme}
                            className={`p-2 rounded-lg transition-all duration-200 ${isDark ? 'hover:bg-white/5 text-navy-200' : 'hover:bg-gray-100 text-gray-600'
                                }`}
                            title="Toggle theme"
                        >
                            <motion.div
                                key={isDark ? 'dark' : 'light'}
                                initial={{ rotate: -90, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                transition={{ duration: 0.3 }}
                            >
                                {isDark ? <Sun size={18} /> : <Moon size={18} />}
                            </motion.div>
                        </button>

                        {/* Mobile menu toggle */}
                        <button
                            className={`md:hidden p-2 rounded-lg ${isDark ? 'hover:bg-white/5' : 'hover:bg-gray-100'}`}
                            onClick={() => setMobileOpen(!mobileOpen)}
                        >
                            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden glass border-t border-purple-500/10 overflow-hidden"
                    >
                        <div className="px-4 py-3 space-y-1">
                            {navLinks.map(({ path, tKey, icon: Icon }) => (
                                <Link
                                    key={path}
                                    to={path}
                                    className={`flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${location.pathname === path
                                        ? 'text-purple-400 bg-purple-500/10'
                                        : isDark ? 'text-navy-200 hover:bg-white/5' : 'text-gray-600 hover:bg-gray-100'
                                        }`}
                                >
                                    <Icon size={16} />
                                    {t(tKey)}
                                </Link>
                            ))}

                            {/* Mobile Language Selector */}
                            <div className={`mt-2 pt-2 border-t ${isDark ? 'border-navy-700/50' : 'border-gray-200'}`}>
                                <p className={`px-3 py-1.5 text-[10px] uppercase tracking-wider font-semibold ${isDark ? 'text-navy-400' : 'text-gray-400'}`}>
                                    {t('nav.language')}
                                </p>
                                <div className="grid grid-cols-2 gap-1">
                                    {languages.map(lang => (
                                        <button
                                            key={lang.code}
                                            onClick={() => setLanguage(lang)}
                                            className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-all ${currentLang.code === lang.code
                                                ? 'text-purple-400 bg-purple-500/10 font-medium'
                                                : isDark ? 'text-navy-200 hover:bg-white/5' : 'text-gray-600 hover:bg-gray-100'
                                                }`}
                                        >
                                            <span>{lang.flag}</span>
                                            <span>{lang.label}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
