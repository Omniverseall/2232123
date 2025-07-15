import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import AuthPage from '../server/pages/AuthPage';
import HomePage from './pages/HomePage';
import './index.css';

function App() {
  // Состояние, которое говорит, вошел ли пользователь в систему
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  // Этот эффект запускается один раз при загрузке приложения
  useEffect(() => {
    // Проверяем, есть ли токен в локальном хранилище
    const token = localStorage.getItem('authToken');
    if (token) {
      // Если токен есть, считаем, что пользователь вошел
      setIsAuthenticated(true);
    }
  }, []);

  // Функция для выхода из системы
  const handleLogout = () => {
    localStorage.removeItem('authToken'); // Удаляем токен
    setIsAuthenticated(false); // Обновляем состояние
    navigate('/'); // Возвращаем на главную
  };

  return (
    <Routes>
      {/* Передаем состояние и функцию выхода на главную страницу */}
      <Route 
        path="/" 
        element={<HomePage isAuthenticated={isAuthenticated} handleLogout={handleLogout} />} 
      />
      
      {/* Передаем функцию для установки состояния на страницу аутентификации */}
      <Route 
        path="/auth" 
        element={<AuthPage setIsAuthenticated={setIsAuthenticated} />} 
      />
    </Routes>
  );
}

export default App;