// File: src/components/ThemeSwitcher.tsx
import React from 'react';
import { useTheme } from '../context/ThemeContext';

// Тип темы, который используется в логике
type Theme = 'light' | 'dark' | 'system';

// Словарь для перевода системных значений в русский текст
const themeLabels: Record<Theme, string> = {
    light: 'Светлая',
    dark: 'Темная',
    system: 'Системная'
};

const ThemeSwitcher: React.FC = () => {
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
            {/* Отображаем русское название из словаря */}
            {themeLabels[theme]}
        </button>
    );
};

export default ThemeSwitcher;