// File: src/components/ThemeSwitcher.tsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../context/ThemeContext';

// Тип темы, который используется в логике
type Theme = 'light' | 'dark' | 'system';

const ThemeSwitcher: React.FC = () => {
    const { t } = useTranslation();
    const { theme, setTheme } = useTheme();

    const toggleTheme = () => {
        // Массив для переключения должен содержать системные значения
        const themes: Theme[] = ['light', 'dark', 'system'];
        const currentIndex = themes.indexOf(theme);
        const nextIndex = (currentIndex + 1) % themes.length;
        setTheme(themes[nextIndex]);
    };

    return (
        <button
            onClick={toggleTheme}
            className="border border-white px-4 py-1.5 rounded-full font-medium hover:bg-white/20 transition-colors text-sm w-24 text-center"
        >
            {t(`theme.${theme}`)}
        </button>
    );
};

export default ThemeSwitcher;