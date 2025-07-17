import React from 'react';
import { useTranslation } from 'react-i18next';
import { useThemeStore } from '../../model/themeStore';
import { Theme } from '../../../../shared/config/theme';

const ThemeSwitcher: React.FC = () => {
  const { t } = useTranslation();
  const { theme, setTheme } = useThemeStore();

  const toggleTheme = () => {
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