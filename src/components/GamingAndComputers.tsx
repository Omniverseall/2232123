import React from 'react';
import ProductCard from './ProductCard';
import type { Product } from './ProductCard';

const bannerUrl = 'https://olcha.uz/image/272x444/homePage/cdn_1/2024-07-25/xKPYc1vin5KHLmiGgpB2ndfbCWnJFfUQd3l8kBcbaUOKcQqif6eio2eEkmVQ.jpg';

const gamingProducts: Product[] = [
    {
        title: 'Ноутбук Asus Rog Strix G814JVR G18 i9-',
        price: '27 764 080 сум',
        installment: '3 252 000 сум x 12 мес',
        imageSrc: 'https://olcha.uz/image/220x220/products/cdn_1/supplier/stores/1/2025-02-17/RW4S1dlvsYGE4D8MdFzbQyk2nuAJZbz9dTs7mU6ndfg4ZZZn41kUwZi1Ksim.jpg',
    },
    {
        title: 'Ноутбук Lenovo ThinkBook 16 R5-7430U',
        price: '6 131 000 сум',
        installment: '718 000 сум x 12 мес',
        imageSrc: 'https://olcha.uz/image/220x220/products/cdn_1/supplier/stores/1/2025-04-16/jdS23dJ2jec8kSV8pKgJOXLEPfGMUV9AKsyjgYf4HutVs4W21ICkGzXq1d0N.jpg',
    },
    {
        title: 'Ноутбук Lenovo AMD 7120U 8/256 GB SSD',
        price: '3 676 014 сум',
        installment: '431 000 сум x 12 мес',
        imageSrc: 'https://olcha.uz/image/220x220/products/H6u9lOJ8I8RrtQWzYqqkYJ2cH0FxmhH06aCYCCEIOMR1WcHZEbQVgOJdFqJK.jpg',
    },
    {
        title: 'Ноутбук Hp Envy x360 2in1 16-',
        price: '9 941 520 сум',
        installment: '1 165 000 сум x 12 мес',
        imageSrc: 'https://olcha.uz/image/220x220/products/cdn_1/supplier/stores/1/2025-05-28/Ed1kOcVPGXO2s0ruGdV6sqCU1MpzuHmn6UPOI0VOaSGH6pnSkntTqSAvlfi3.jpg',
    },
    {
        title: 'Ноутбук Hp 15-fd0095wm i5-1235U',
        price: '6 783 625 сум',
        installment: '795 000 сум x 12 мес',
        imageSrc: 'https://olcha.uz/image/220x220/products/cdn_1/supplier/stores/1/2025-05-28/nf1nO1pjDO1FG6z246hy0xdi1o7l4JsHmOQkaLe2gA0VHsxdLlrN11X4nUAO.jpg',
    },
];

const GamingAndComputers: React.FC = () => {
    return (
        <div className="max-w-screen-2xl mx-auto px-4 py-6">
            <div className="flex flex-col lg:flex-row gap-6">
                <div className="w-full lg:w-3/4">
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 h-full">
                        {gamingProducts.map((product, index) => (
                            <ProductCard key={index} product={product} />
                        ))}
                    </div>
                </div>
                <div className="hidden lg:block lg:w-1/6 flex-shrink-0">
                    <a href="#" className="block h-full">
                        <img 
                            src={bannerUrl} 
                            alt="Для геймеров" 
                            className="w-full h-full object-cover rounded-2xl shadow-md"
                        />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default GamingAndComputers;