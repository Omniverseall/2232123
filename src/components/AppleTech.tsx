// File: src/components/AppleTech.tsx
import React from 'react';
import { useTranslation } from 'react-i18next';

interface AppleProduct {
  name: string;
  price: string;
  installment: string;
  imageSrc: string;
}

const AppleProductCard: React.FC<{ product: AppleProduct }> = ({ product }) => (
    <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-4 flex flex-col h-full group">
        <div className="flex justify-between items-start">
            <button className="text-gray-400 hover:text-red-500 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.5l1.318-1.182a4.5 4.5 0 116.364 6.364L12 21l-7.682-7.682a4.5 4.5 0 010-6.364z" />
                </svg>
            </button>
            <button className="text-gray-400">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6m3 6V9m3 6V5" /></svg>
            </button>
        </div>
        <div className="my-4 flex-grow flex items-center justify-center">
            <img src={product.imageSrc} alt={product.name} className="max-h-36 object-contain group-hover:scale-105 transition-transform" />
        </div>
        <div className="mt-auto">
            <p className="text-sm min-h-[40px] text-gray-900 dark:text-gray-200">{product.name}</p>
            <p className="text-lg font-bold my-1 text-black dark:text-white">{product.price}</p>
            <span className="text-xs font-semibold bg-yellow-200 text-gray-800 px-2 py-1 rounded-md">{product.installment}</span>
        </div>
        <div className="mt-4 flex items-center space-x-2">
            <button className="p-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
            </button>
            <button className="flex-1 text-center font-semibold text-sm text-red-600 border border-red-600 rounded-lg py-2.5 hover:bg-red-50 dark:hover:bg-red-900/20 dark:text-red-400 dark:border-red-400 transition-colors">
                В рассрочку
            </button>
        </div>
    </div>
);

const products = {
    magicMouse: { name: 'Apple Magic mouse 3', price: '1 357 179 сум', installment: '160 000 сум x 12 мес', imageSrc: 'https://olcha.uz/image/220x220/products/oeOsArYZhSFQeIFhNzxJpcrKS6IIfgYx8UAor7Qk51Y9xjkUY3t8zJdu29ve.jpg' },
    watchUltra: { name: 'Смарт-часы Apple Watch Ultra', price: '12 505 000 сум', installment: '1 465 000 сум x 12 мес', imageSrc: 'https://olcha.uz/image/220x220/products/2022-12-20/smart-chasy-apple-watch-ultra-183720-0.jpeg' },
    keyboard: { name: 'Magic Keyboard Russian 12.9-inc 2021 Белый', price: '6 428 811 сум', installment: '753 000 сум x 12 мес', imageSrc: 'https://olcha.uz/image/220x220/products/supplier/stores/1/2023-05-20/N6u7M5ch87s5PkARnrTiwVeEo87y5hoxmsuCIBhlP2yAJr7QQ1Huse3gPffx.jpg' },
    airpods3: { name: 'Беспроводные наушники Apple Airpods 3', price: '1 918 955 сум', installment: '225 000 сум x 12 мес', imageSrc: 'https://olcha.uz/image/220x220/products/2021-10-28/besprovodnye-naushniki-apple-airpods-3-26384-0.jpeg' },
    airpodsMax: { name: 'Беспроводные наушники Apple AirPods Max White', price: '7 313 798 сум', installment: '857 000 сум x 12 мес', imageSrc: 'https://olcha.uz/image/220x220/products/2022-06-14/besprovodnye-naushniki-apple-airpods-max-white-58621-0.jpeg' },
    homepod: { name: 'Умная колонка Apple HomePod mini White', price: '2 229 360 сум', installment: '262 000 сум x 12 мес', imageSrc: 'https://olcha.uz/image/220x220/products/cdn_1/supplier/stores/1/2024-05-24/PICza77c6oC9pwoP6duGBCRYUtZIAYbfSOyPStAJE82gGRCIzkOpevYlTjOB.jpg' },
    watch8: { name: 'Apple Watch Series 8 45mm Silver', price: '5 675 000 сум', installment: '665 000 сум x 12 мес', imageSrc: 'https://olcha.uz/image/220x220/products/2022-11-14/apple-watch-series-8-45mm-silver-168582-0.jpeg' },
};

const AppleTech: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="max-w-screen-2xl mx-auto px-4 py-6 bg-white dark:bg-gray-800 rounded-2xl">
        <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-200">{t('titles.appleTech')}</h2>
            <a href="#" className="text-red-500 dark:text-red-400 font-semibold text-lg">{t('common.viewAll')}</a>
        </div>

        <div className="grid grid-cols-4 grid-rows-2 gap-6">
            <div className="col-span-1 row-span-2">
                <AppleProductCard product={products.magicMouse} />
            </div>
            
            <div className="col-span-2 row-span-1 rounded-2xl overflow-hidden shadow-lg">
                <iframe 
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/eDqfg_LexCQ?si=q64beIUnm8SE7TXX&autoplay=1&mute=1&controls=0&loop=1&playlist=eDqfg_LexCQ" 
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowFullScreen>
                </iframe>
            </div>

            <div className="col-span-1 row-span-2">
                <AppleProductCard product={products.keyboard} />
            </div>

            <div className="col-span-1 row-span-1">
                 <AppleProductCard product={products.watchUltra} />
            </div>

            <div className="col-span-1 row-span-1">
                <AppleProductCard product={products.airpods3} />
            </div>
            <div className="col-span-1 row-span-1">
                 <AppleProductCard product={products.airpodsMax} />
            </div>
            <div className="col-span-1 row-span-1">
                <AppleProductCard product={products.homepod} />
            </div>
             <div className="col-span-1 row-span-1">
                <AppleProductCard product={products.watch8} />
            </div>
        </div>
    </div>
  );
};

export default AppleTech;