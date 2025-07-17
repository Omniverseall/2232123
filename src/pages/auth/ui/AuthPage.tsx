import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { LoginForm, RegisterForm } from '../../../features/auth';

const AuthPage: React.FC = () => {
  const { t } = useTranslation();
  const [isLoginView, setIsLoginView] = useState(true);

  return (
    <div className="min-h-screen bg-[#E50027] flex flex-col items-center justify-center p-4 font-sans">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link to="/" className="text-9xl font-bold text-white tracking-wider">
            olcha
          </Link>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 space-y-6">
          <div className="flex border-b-2 border-gray-200 dark:border-gray-700">
            <button
              onClick={() => setIsLoginView(true)}
              className={`flex-1 py-3 text-center font-bold text-lg transition-colors ${
                isLoginView 
                  ? 'text-[#E50027] border-b-2 border-[#E50027]' 
                  : 'text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700'
              }`}
            >
              {t('auth.login')}
            </button>
            <button
              onClick={() => setIsLoginView(false)}
              className={`flex-1 py-3 text-center font-bold text-lg transition-colors ${
                !isLoginView 
                  ? 'text-[#E50027] border-b-2 border-[#E50027]' 
                  : 'text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700'
              }`}
            >
              {t('auth.register')}
            </button>
          </div>

          {isLoginView ? <LoginForm /> : <RegisterForm />}

          <p 
            className="text-xs text-gray-500 dark:text-gray-400 text-center" 
            dangerouslySetInnerHTML={{ __html: t('auth.terms') }} 
          />
        </div>
      </div>
    </div>
  );
};

export default AuthPage;