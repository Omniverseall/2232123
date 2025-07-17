import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAuthStore } from '../../../features/auth';
import { ThemeSwitcher } from '../../../features/theme';
import { 
  HamburgerIcon, 
  SearchIcon, 
  ChartBarIcon, 
  HeartIcon, 
  ShoppingCartIcon, 
  UserIcon 
} from '../../../shared/ui/icons';
import Button from '../../../shared/ui/Button/Button';

const Header: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { isAuthenticated, logout } = useAuthStore();

  const changeLanguage = (lng: 'ru' | 'uz') => {
    i18n.changeLanguage(lng);
  };

  const ActionButton: React.FC<{
    icon: React.ReactNode;
    label: string;
    notification?: number;
    onClick?: () => void;
  }> = ({ icon, label, notification, onClick }) => (
    <div 
      className="flex flex-col items-center text-center text-gray-700 dark:text-gray-300 hover:text-[#E50027] dark:hover:text-red-400 transition-colors cursor-pointer"
      onClick={onClick}
    >
      <div className="relative">
        {icon}
        {notification !== undefined && (
          <span className="absolute -top-1 -right-2.5 bg-[#E50027] text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white dark:border-gray-800">
            {notification}
          </span>
        )}
      </div>
      <span className="text-xs font-medium mt-1 whitespace-nowrap">{label}</span>
    </div>
  );

  return (
    <div className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50">
      {/* Top Banner */}
      <div className="bg-[#E50027] text-white">
        <div className="mx-auto max-w-screen-2xl flex items-center justify-between h-14 px-4">
          <div className="hidden md:flex items-center space-x-4 lg:space-x-6 text-sm">
            <Button variant="secondary" size="sm" className="bg-white text-[#E50027] hover:bg-gray-200">
              {t('topNav.installment')}
            </Button>
            <Button variant="outline" size="sm" className="border-white text-white hover:bg-white/10">
              {t('topNav.discounts')}
            </Button>
            <Button variant="secondary" size="sm" className="bg-white text-[#E50027] hover:bg-gray-200">
              {t('topNav.giveaways')}
            </Button>
            <a href="#" className="hover:underline font-medium whitespace-nowrap">
              {t('topNav.sitemap')}
            </a>
          </div>
          <div className="flex items-center justify-end md:justify-between w-full md:w-auto space-x-4 lg:space-x-6">
            <span className="font-bold text-base lg:text-lg whitespace-nowrap">+998 (71) 202 20 21</span>
            <Button variant="outline" size="sm" className="hidden sm:block border-white text-white hover:bg-white/10">
              {t('topNav.sellOnOlcha')}
            </Button>
            <ThemeSwitcher />
            <div className="flex items-center space-x-2 text-sm">
              <button 
                onClick={() => changeLanguage('uz')} 
                className={`hover:opacity-80 ${i18n.language === 'uz' ? 'font-bold' : ''}`}
              >
                O'z
              </button>
              <span className="opacity-50">|</span>
              <button 
                onClick={() => changeLanguage('ru')} 
                className={`hover:opacity-80 ${i18n.language === 'ru' ? 'font-bold' : ''}`}
              >
                Рус
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="mx-auto max-w-screen-2xl flex items-center justify-between py-4 px-4 gap-6">
          <Link to="/" className="text-4xl font-bold text-[#E50027] flex-shrink-0">
            olcha
          </Link>

          <Button variant="outline" className="hidden lg:flex items-center space-x-2 border-gray-900 dark:border-gray-200">
            <HamburgerIcon />
            <span>{t('header.catalog')}</span>
          </Button>

          <div className="flex-grow flex items-center min-w-0">
            <input 
              type="text" 
              placeholder={t('header.searchPlaceholder')} 
              className="w-full bg-gray-100 dark:bg-gray-700 border-2 border-transparent dark:text-gray-200 rounded-l-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-[#E50027] transition-all"
            />
            <Button className="rounded-l-none rounded-r-lg">
              <SearchIcon className="h-6 w-6 text-white" />
            </Button>
          </div>

          <div className="hidden sm:flex items-center space-x-5">
            <ActionButton icon={<ChartBarIcon />} label={t('header.compare')} />
            <ActionButton icon={<HeartIcon />} label={t('header.favorites')} />
            <ActionButton icon={<ShoppingCartIcon />} label={t('header.cart')} notification={0} />
            
            {isAuthenticated ? (
              <ActionButton 
                icon={<UserIcon className="h-7 w-7 text-green-500" />} 
                label={t('header.logout')}
                onClick={logout}
              />
            ) : (
              <Link to="/auth">
                <ActionButton icon={<UserIcon />} label={t('header.login')} />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;