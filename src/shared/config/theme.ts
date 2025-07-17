export type Theme = 'light' | 'dark' | 'system';

export const THEME_STORAGE_KEY = 'theme';

export const getSystemTheme = (): 'light' | 'dark' => {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

export const applyTheme = (theme: Theme) => {
  const root = window.document.documentElement;
  const isDark = theme === 'dark' || (theme === 'system' && getSystemTheme() === 'dark');
  
  root.classList.remove(isDark ? 'light' : 'dark');
  root.classList.add(isDark ? 'dark' : 'light');
};