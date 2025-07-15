import React from 'react';
import ThemeSwitcher from './ThemeSwitcher';
import { useTranslation } from 'react-i18next';

const TopNav: React.FC = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: 'ru' | 'uz') => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="bg-[#E50027] text-white">
      <div className="mx-auto max-w-screen-2xl flex items-center justify-between h-14 px-4">
        <div className="hidden md:flex items-center space-x-4 lg:space-x-6 text-sm">
          <button className="bg-white text-[#E50027] px-4 py-1.5 rounded-full font-bold whitespace-nowrap hover:bg-gray-200 transition-colors">
            {t('topNav.installment')}
          </button>
          <button className="border border-white px-4 py-1.5 rounded-full font-medium hover:bg-white/10 transition-colors">
            {t('topNav.discounts')}
          </button>
          <button className="bg-white text-[#E50027] px-4 py-1.5 rounded-full font-medium whitespace-nowrap hover:bg-gray-200 transition-colors">
            {t('topNav.giveaways')}
          </button>
          <a href="#" className="hover:underline font-medium whitespace-nowrap">
            {t('topNav.sitemap')}
          </a>
        </div>
        <div className="flex items-center justify-end md:justify-between w-full md:w-auto space-x-4 lg:space-x-6">
          <span className="font-bold text-base lg:text-lg whitespace-nowrap">+998 (71) 202 20 21</span>
          <button className="hidden sm:block border border-white px-4 py-1.5 rounded-full font-bold text-sm whitespace-nowrap hover:bg-white/10 transition-colors">
            {t('topNav.sellOnOlcha')}
          </button>
          <ThemeSwitcher />
          <div className="flex items-center space-x-2 text-sm">
            <button onClick={() => changeLanguage('uz')} className={`hover:opacity-80 ${i18n.language === 'uz' ? 'font-bold' : ''}`}>O'z</button>
            <span className="opacity-50">|</span>
            <button onClick={() => changeLanguage('ru')} className={`hover:opacity-80 ${i18n.language === 'ru' ? 'font-bold' : ''}`}>Рус</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNav;