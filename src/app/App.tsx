import React, { Suspense, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useAuthStore } from '../features/auth';
import { useThemeStore } from '../features/theme';
import { HomePage } from '../pages/home';
import { AuthPage } from '../pages/auth';
import './index.css';
import '../shared/config/i18n';

function App() {
  const { isAuthenticated } = useAuthStore();
  const { theme } = useThemeStore();

  // Apply theme on app start
  useEffect(() => {
    const root = window.document.documentElement;
    const isDark = theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
    
    root.classList.remove(isDark ? 'light' : 'dark');
    root.classList.add(isDark ? 'dark' : 'light');
  }, [theme]);

  return (
    <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
    </Suspense>
  );
}

export default App;