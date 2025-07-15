import React, { useState, FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface AuthPageProps {
  setIsAuthenticated: (isAuth: boolean) => void;
}

const SpinnerIcon: React.FC = () => (
    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
);

const AuthPage: React.FC<AuthPageProps> = ({ setIsAuthenticated }) => {
    const { t } = useTranslation();
    const [isLoginView, setIsLoginView] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    
    const navigate = useNavigate();

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);

        const endpoint = isLoginView ? '/api/login' : '/api/register';
        const url = `http://localhost:5000${endpoint}`;

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            });
            const data = await response.json();
            
            if (data.token) {
                localStorage.setItem('authToken', data.token);
                setIsAuthenticated(true); 
                navigate('/');
            } else {
                throw new Error(data.msg || 'An unknown error occurred.');
            }
        } catch (err) {
            const errorKeyMap: { [key: string]: string } = {
                'Пожалуйста, введите все поля': 'auth.error.allFieldsRequired',
                'Этот email уже занят': 'auth.error.emailTaken',
                'Неверный email или пароль': 'auth.error.invalidCredentials'
            }
            const message = err instanceof Error ? err.message : 'An unknown error occurred.';
            setError(t(errorKeyMap[message] || 'auth.error.default'));
        } finally {
            setIsLoading(false);
        }
    };

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
                            onClick={() => { setIsLoginView(true); setError(null); }}
                            className={`flex-1 py-3 text-center font-bold text-lg transition-colors ${
                                isLoginView ? 'text-[#E50027] border-b-2 border-[#E50027]' : 'text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700'
                            }`}
                        >
                            {t('auth.login')}
                        </button>
                        <button
                            onClick={() => { setIsLoginView(false); setError(null); }}
                            className={`flex-1 py-3 text-center font-bold text-lg transition-colors ${
                                !isLoginView ? 'text-[#E50027] border-b-2 border-[#E50027]' : 'text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700'
                            }`}
                        >
                            {t('auth.register')}
                        </button>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300">{t('auth.email')}</label>
                            <input id="email" name="email" type="email" autoComplete="email" required value={email} onChange={(e) => setEmail(e.target.value)} className="mt-1 w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E50027] transition-shadow" placeholder="example@mail.com"/>
                        </div>
                        <div>
                            <label htmlFor="password" className="text-sm font-medium text-gray-700 dark:text-gray-300">{t('auth.password')}</label>
                            <input id="password" name="password" type="password" autoComplete="current-password" required value={password} onChange={(e) => setPassword(e.target.value)} className="mt-1 w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E50027] transition-shadow" placeholder="••••••••"/>
                        </div>
                        {error && (<div className="text-red-600 dark:text-red-400 text-sm text-center bg-red-50 dark:bg-red-900/30 p-3 rounded-lg">{error}</div>)}
                        <div>
                            <button type="submit" disabled={isLoading} className="w-full flex justify-center items-center bg-[#E50027] text-white font-bold py-3 px-4 rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors duration-300 disabled:bg-red-400">
                                {isLoading && <SpinnerIcon />}
                                {isLoginView ? t('auth.loginButton') : t('auth.createAccountButton')}
                            </button>
                        </div>
                    </form>
                    <p className="text-xs text-gray-500 dark:text-gray-400 text-center" dangerouslySetInnerHTML={{ __html: t('auth.terms') }} />
                </div>
            </div>
        </div>
    );
};

export default AuthPage;