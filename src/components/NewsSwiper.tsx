// File: src/components/NewsSwiper.tsx
import React, { useState, useEffect } from 'react';
import ChevronLeftIcon from './icons/ChevronLeftIcon';
import ChevronRightIcon from './icons/ChevronRightIcon';

interface NewsArticle {
  date: string;
  views: number;
  title: string;
  excerpt: string;
  imageSrc: string;
}

const newsData: NewsArticle[] = [
  {
    date: '10.09.2024 14:25:33',
    views: 262,
    title: 'ReTimer 3 - Теперь никто не страдает бессонницей!',
    excerpt: 'Очки ReTimer 3: инновационное решение для борьбы с бессонницей!Современные технологии привнесли в нашу жизнь',
    imageSrc: 'https://olcha.uz/uploads/312x184/blogs/images/7OMfE9RSqFYNZRog7GKXsbjv3xabicLhWbHaQRR0.png',
  },
  {
    date: '29.08.2024 16:47:21',
    views: 858,
    title: 'Как выбрать ноутбук в 2024',
    excerpt: 'Выбор ноутбука сегодня – это очень сложный процесс, требующий учета множества факторов.На рынке представлены разные типы ноутбуков,',
    imageSrc: 'https://olcha.uz/uploads/312x184/blogs/images/Y7JsmbfGT7wiYnMcvmYAuXi7BS4J6Qn0Sue4dkfW.png',
  },
  {
    date: '21.08.2024 14:06:09',
    views: 625,
    title: 'Париж-2024: узбекские спортсмены завоевали золотые медали',
    excerpt: 'Париж-2024: узбекские спортсмены завоевали золотые медалиОлимпийские игры 2024 года в Париже стали настоящим',
    imageSrc: 'https://olcha.uz/uploads/312x184/blogs/images/dh8gm7hh1iTbrGeHb2E4dEyzuWkp2JgTzJolIx48.png',
  },
  {
    date: '20.08.2024 11:49:02',
    views: 978,
    title: 'Многие ждут презентации iPhone 16',
    excerpt: 'Apple каждый год представляет свои новые модели смартфонов. Итак, насколько же сможет удивить людей в 2024 году? Опираясь на популярные технологически',
    imageSrc: 'https://olcha.uz/uploads/312x184/blogs/images/OAcNsrs8ey4zWM7frBPLIkiLIiIbmvPOTV1QgsV8.gif',
  },
  {
    date: '10.09.2024 14:25:33',
    views: 262,
    title: 'ReTimer 3 - Теперь никто не страдает бессонницей!',
    excerpt: 'Очки ReTimer 3: инновационное решение для борьбы с бессонницей!Современные технологии привнесли в нашу жизнь',
    imageSrc: 'https://olcha.uz/uploads/312x184/blogs/images/7OMfE9RSqFYNZRog7GKXsbjv3xabicLhWbHaQRR0.png',
  },
];

const NewsSwiper: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(1);
    const [isTransitioning, setIsTransitioning] = useState(true);
    const items = [newsData[newsData.length - 1], ...newsData, newsData[0]];

    const handleTransitionEnd = () => {
        if (currentIndex === 0) {
            setIsTransitioning(false);
            setCurrentIndex(items.length - 2);
        } else if (currentIndex === items.length - 1) {
            setIsTransitioning(false);
            setCurrentIndex(1);
        }
    };
    
    useEffect(() => {
        if (!isTransitioning) {
            requestAnimationFrame(() => setIsTransitioning(true));
        }
    }, [isTransitioning]);
    
    const changeSlide = (direction: number) => {
        if (!isTransitioning) return;
        setCurrentIndex(prev => prev + direction);
    };

    return (
        <div className="max-w-screen-2xl mx-auto px-4 py-6">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-200">Новости</h2>
                <a href="#" className="text-red-500 dark:text-red-400 font-semibold text-lg flex items-center group">
                    <span>ПОСМОТРЕТЬ ВСЕ</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                </a>
            </div>

            <div className="relative">
                <div className="overflow-hidden">
                    <div className="flex" onTransitionEnd={handleTransitionEnd} style={{ transform: `translateX(-${currentIndex * 25}%)`, transition: isTransitioning ? 'transform 0.5s ease-out' : 'none' }}>
                        {items.map((article, index) => (
                            <div key={index} className="flex-shrink-0 w-1/4 px-3">
                                <div className="rounded-2xl overflow-hidden group cursor-pointer">
                                    <img src={article.imageSrc} alt={article.title} className="w-full h-48 object-cover" />
                                    <div className="p-4 bg-gray-100 dark:bg-gray-800">
                                        <div className="flex justify-between items-center text-xs text-gray-500 dark:text-gray-400 mb-2">
                                            <span>{article.date}</span>
                                            <span className="flex items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                                </svg>
                                                {article.views}
                                            </span>
                                        </div>
                                        <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-gray-200 group-hover:text-red-500 transition-colors h-14 overflow-hidden">{article.title}</h3>
                                        <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-3">{article.excerpt}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <button onClick={() => changeSlide(-1)} className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-gray-800 shadow-lg rounded-full p-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition-opacity">
                    <ChevronLeftIcon className="w-6 h-6 text-gray-800 dark:text-gray-300" />
                </button>
                <button onClick={() => changeSlide(1)} className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-gray-800 shadow-lg rounded-full p-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition-opacity">
                    <ChevronRightIcon className="w-6 h-6 text-gray-800 dark:text-gray-300" />
                </button>
            </div>
        </div>
    );
};

export default NewsSwiper;