import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import ChevronLeftIcon from './icons/ChevronLeftIcon';
import ChevronRightIcon from './icons/ChevronRightIcon';

const products = [
  {
    name: 'Artel TV A43KF5500 (109 см) Android',
    price: '3 022 000 сум',
    installment: '354 000 сум x 12 мес',
    image: 'https://olcha.uz/image/220x220/products/2022-11-24/artel-tv-a43kf5500-109-sm-android-171437-0.jpeg',
  },
  {
    name: 'Смартфон Samsung Galaxy A15 4/128GB Blue Black',
    price: '1 890 000 сум',
    installment: '222 000 сум x 12 мес',
    image: 'https://olcha.uz/image/220x220/products/cEAMFLmeUCJD9WaDoDZK6VA4w6n7VocJIRq41dG5S1DgUUVx7rlbmrJ6fvEP.jpg',
  },
  {
    name: 'Кондиционер TCL TAC-12CHSD/XAB1 ON/OFF',
    price: '3 890 000 сум',
    installment: '456 000 сум x 12 мес',
    image: 'https://olcha.uz/image/220x220/products/H6u9lOJ8I8RrtQWzYqqkYJ2cH0FxmhH06aCYCCEIOMR1WcHZEbQVgOJdFqJK.jpg',
  },
];

const CountdownTimer: React.FC = () => {
  const [time, setTime] = useState({ h: 0, m: 0, s: 0 });
  const calc = () => {
    const diff = new Date().setHours(23, 59, 59, 999) - Date.now();
    setTime(
      diff > 0
        ? {
            h: Math.floor(diff / 1000 / 60 / 60) % 24,
            m: Math.floor(diff / 1000 / 60) % 60,
            s: Math.floor(diff / 1000) % 60,
          }
        : { h: 0, m: 0, s: 0 }
    );
  };
  useEffect(() => {
    calc();
    const id = setInterval(calc, 1000);
    return () => clearInterval(id);
  }, []);
  const pad = (n: number) => n.toString().padStart(2, '0');
  return (
    <div className="flex items-center space-x-1">
      <span className="bg-gray-100 text-gray-800 text-sm font-bold px-1.5 py-1 rounded">{pad(time.h)}</span>
      <span className="text-gray-400">:</span>
      <span className="bg-gray-100 text-gray-800 text-sm font-bold px-1.5 py-1 rounded">{pad(time.m)}</span>
      <span className="text-gray-400">:</span>
      <span className="bg-gray-100 text-gray-800 text-sm font-bold px-1.5 py-1 rounded">{pad(time.s)}</span>
    </div>
  );
};

const ProductOfTheDay: React.FC = () => {
  const { t } = useTranslation();
  const [idx, setIdx] = useState(0);
  const cur = products[idx];

  return (
    <div className="w-[300px] h-[470px] bg-white border-2 border-red-500 rounded-lg p-4 flex flex-col">
      <div className="flex justify-between items-center mb-3">
        <h2 className="font-bold text-lg text-gray-900">{t('productOfTheDay.title')}</h2>
        <CountdownTimer />
      </div>
      <div className="relative w-44 h-44 mx-auto mb-3">
        <img src={cur.image} alt={cur.name} className="w-full h-full object-contain" />
        <button
          onClick={() => setIdx((i) => (i === 0 ? products.length - 1 : i - 1))}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-1 shadow-md hover:bg-gray-100"
        >
          <ChevronLeftIcon className="w-5 h-5" />
        </button>
        <button
          onClick={() => setIdx((i) => (i === products.length - 1 ? 0 : i + 1))}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-1 shadow-md hover:bg-gray-100"
        >
          <ChevronRightIcon className="w-5 h-5" />
        </button>
      </div>
      <div className="flex-grow flex flex-col items-center justify-center">
        <p className="text-sm font-medium text-gray-800 leading-tight h-12 line-clamp-2">
          {cur.name}
        </p>
        <p className="text-lg font-bold my-2 text-gray-900">{cur.price}</p>
        <span className="bg-yellow-300 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full">
          {cur.installment}
        </span>
      </div>
      <div className="flex justify-center space-x-2 mt-3">
        {products.map((_, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            className={`w-2 h-2 rounded-full transition-colors ${idx === i ? 'bg-red-500' : 'bg-gray-300 hover:bg-gray-400'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductOfTheDay;