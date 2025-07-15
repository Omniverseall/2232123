import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import HamburgerIcon from './icons/HamburgerIcon';
import SearchIcon from './icons/SearchIcon';
import ChartBarIcon from './icons/ChartBarIcon';
import HeartIcon from './icons/HeartIcon';
import ShoppingCartIcon from './icons/ShoppingCartIcon';
import UserIcon from './icons/UserIcon';

interface ActionButtonProps {
    icon: React.ReactNode;
    label: string;
    notification?: number;
}

const ActionButton: React.FC<ActionButtonProps> = ({ icon, label, notification }) => (
    <div className="flex flex-col items-center text-center text-gray-700 dark:text-gray-300 hover:text-[#E50027] dark:hover:text-red-400 transition-colors cursor-pointer">
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

interface MainHeaderProps {
    isAuthenticated: boolean;
    handleLogout: () => void;
}

const MainHeader: React.FC<MainHeaderProps> = ({ isAuthenticated, handleLogout }) => {
    const { t } = useTranslation();
    return (
        <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
            <div className="mx-auto max-w-screen-2xl flex items-center justify-between py-4 px-4 gap-6">
                <Link to="/" className="text-4xl font-bold text-[#E50027] flex-shrink-0">
                    olcha
                </Link>

                <button className="hidden lg:flex items-center space-x-2 border-2 border-gray-900 dark:border-gray-200 rounded-lg px-6 py-2.5 font-bold text-gray-900 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                    <HamburgerIcon />
                    <span>{t('header.catalog')}</span>
                </button>

                <div className="flex-grow flex items-center min-w-0">
                    <input type="text" placeholder={t('header.searchPlaceholder')} className="w-full bg-gray-100 dark:bg-gray-700 border-2 border-transparent dark:text-gray-200 rounded-l-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-[#E50027] transition-all"/>
                    <button className="bg-[#E50027] p-3.5 rounded-r-lg hover:bg-red-700 transition-colors">
                        <SearchIcon className="h-6 w-6 text-white" />
                    </button>
                </div>

                <div className="hidden sm:flex items-center space-x-5">
                    <a href="#"><ActionButton icon={<ChartBarIcon />} label={t('header.compare')} /></a>
                    <a href="#"><ActionButton icon={<HeartIcon />} label={t('header.favorites')} /></a>
                    <a href="#"><ActionButton icon={<ShoppingCartIcon />} label={t('header.cart')} notification={0} /></a>
                    
                    {isAuthenticated ? (
                        <div className="flex flex-col items-center text-center cursor-pointer" onClick={handleLogout}>
                             <UserIcon className="h-7 w-7 text-green-500" />
                             <span className="text-xs font-medium mt-1 whitespace-nowrap text-gray-700 dark:text-gray-300 hover:text-[#E50027] dark:hover:text-red-400">
                                {t('header.logout')}
                             </span>
                        </div>
                    ) : (
                        <Link to="/auth">
                            <ActionButton icon={<UserIcon />} label={t('header.login')} />
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MainHeader;