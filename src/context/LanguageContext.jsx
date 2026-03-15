import { createContext, useContext, useState, useCallback } from 'react';
import translations from '../i18n/translations';

const LanguageContext = createContext();

const languages = [
    { code: 'EN', label: 'English', flag: '🇺🇸' },
    { code: 'ES', label: 'Español', flag: '🇪🇸' },
    { code: 'ZH', label: '中文', flag: '🇨🇳' },
    { code: 'JA', label: '日本語', flag: '🇯🇵' },
    { code: 'FR', label: 'Français', flag: '🇫🇷' },
    { code: 'DE', label: 'Deutsch', flag: '🇩🇪' },
    { code: 'HI', label: 'हिन्दी', flag: '🇮🇳' },
    { code: 'AR', label: 'العربية', flag: '🇸🇦' },
];

export function LanguageProvider({ children }) {
    const [currentLang, setCurrentLang] = useState(languages[0]);

    const t = useCallback((path) => {
        const keys = path.split('.');
        let value = translations[currentLang.code];
        for (const key of keys) {
            if (value && typeof value === 'object' && key in value) {
                value = value[key];
            } else {
                // Fallback to English
                let fallback = translations['EN'];
                for (const k of keys) {
                    if (fallback && typeof fallback === 'object' && k in fallback) {
                        fallback = fallback[k];
                    } else {
                        return path; // Return the key path if not found
                    }
                }
                return fallback;
            }
        }
        return value;
    }, [currentLang]);

    const setLanguage = useCallback((lang) => {
        setCurrentLang(lang);
        // Set dir attribute for RTL languages
        document.documentElement.dir = lang.code === 'AR' ? 'rtl' : 'ltr';
    }, []);

    return (
        <LanguageContext.Provider value={{ currentLang, setLanguage, languages, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (!context) throw new Error('useLanguage must be used within a LanguageProvider');
    return context;
}

export { languages };
