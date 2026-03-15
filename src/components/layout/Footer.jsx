import { Link } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import { useLanguage } from '../../context/LanguageContext';
import { Github, Twitter, Linkedin, Mail, Heart } from 'lucide-react';

export default function Footer() {
    const { isDark } = useTheme();
    const { t } = useLanguage();

    const footerLinks = {
        [t('footer.product')]: [
            { label: t('footer.toolsDir'), path: '/tools' },
            { label: t('footer.newsHub'), path: '/news' },
            { label: t('footer.modelsExplorer'), path: '/models' },
            { label: t('footer.mcpDirectory'), path: '/mcp' },
        ],
        [t('footer.company')]: [
            { label: t('footer.aboutUs'), path: '#' },
            { label: t('footer.blog'), path: '#' },
            { label: t('footer.careers'), path: '#' },
            { label: t('footer.contact'), path: '#' },
        ],
        [t('footer.resources')]: [
            { label: t('footer.documentation'), path: '#' },
            { label: t('footer.apiReference'), path: '#' },
            { label: t('footer.community'), path: '#' },
            { label: t('footer.support'), path: '#' },
        ],
    };

    return (
        <footer className={`border-t ${isDark ? 'border-navy-700 bg-navy-950/80' : 'border-gray-200 bg-white/80'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {/* Brand */}
                    <div className="col-span-2 md:col-span-1">
                        <Link to="/" className="flex items-center gap-2 mb-4">
                            <div className="w-8 h-8 rounded-lg animated-gradient flex items-center justify-center text-white font-bold text-sm">
                                AI
                            </div>
                            <span className="text-lg font-bold gradient-text">cipherhub.io</span>
                        </Link>
                        <p className={`text-sm mb-4 ${isDark ? 'text-navy-300' : 'text-gray-500'}`}>
                            {t('footer.desc')}
                        </p>
                        <div className="flex gap-3">
                            {[Github, Twitter, Linkedin, Mail].map((Icon, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className={`p-2 rounded-lg transition-all duration-200 ${isDark
                                        ? 'text-navy-400 hover:text-purple-400 hover:bg-purple-500/10'
                                        : 'text-gray-400 hover:text-purple-600 hover:bg-purple-50'
                                        }`}
                                >
                                    <Icon size={16} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links */}
                    {Object.entries(footerLinks).map(([title, links]) => (
                        <div key={title}>
                            <h3 className={`font-semibold text-sm mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                                {title}
                            </h3>
                            <ul className="space-y-2">
                                {links.map(link => (
                                    <li key={link.label}>
                                        <Link
                                            to={link.path}
                                            className={`text-sm transition-colors duration-200 ${isDark
                                                ? 'text-navy-300 hover:text-purple-400'
                                                : 'text-gray-500 hover:text-purple-600'
                                                }`}
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className={`mt-10 pt-6 border-t flex flex-col sm:flex-row justify-between items-center gap-4 ${isDark ? 'border-navy-800' : 'border-gray-100'
                    }`}>
                    <p className={`text-xs ${isDark ? 'text-navy-400' : 'text-gray-400'}`}>
                        © 2026 cipherhub.io. {t('footer.rights')}
                    </p>
                    <p className={`text-xs flex items-center gap-1 ${isDark ? 'text-navy-400' : 'text-gray-400'}`}>
                        {t('footer.madeWith')} <Heart size={12} className="text-red-500 fill-red-500" /> {t('footer.forAI')}
                    </p>
                </div>
            </div>
        </footer>
    );
}
