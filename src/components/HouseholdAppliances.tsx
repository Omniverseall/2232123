import React from 'react';
import ProductCard from './ProductCard';
import type { Product } from './ProductCard';

const bannerUrl = 'https://olcha.uz/image/272x444/homePage/cdn_1/2024-07-25/uvzx6Iiu9iH257Z7AFHiEJqqnuAeOCYfLLwVRBtoGHFZmph0GiJNhk2aW75I.jpg';

const householdProducts: Product[] = [
    {
        title: 'Стиральная машина LORETTO LW-6003G, 6',
        price: '3 650 000 сум',
        oldPrice: '3 850 000 сум',
        installment: '428 000 сум x 12 мес',
        imageSrc: 'https://olcha.uz/image/266x355/products//supplier/stores/26892/lw-6003g%2F6003g.jpg',
        discount: '-6%',
    },
    {
        title: 'Кондиционер Samsung AR12DXHQASINEV 12',
        price: '4 900 000 сум',
        oldPrice: '5 200 000 сум',
        installment: '574 000 сум x 12 мес',
        imageSrc: 'https://olcha.uz/image/220x220/products/cdn_1/supplier/stores/1/2025-05-06/wVQAnQfNdSnb9XarmUhnmAyt0DR03NUvFKbRGSMlalw8JhAnkfEFROSqcZ43.jpg',
        discount: '-6%',
    },
    {
        title: 'Промышленный оверлок со столом Jack JK-E3-4-',
        price: '7 568 586 сум',
        installment: '887 000 сум x 12 мес',
        imageSrc: 'https://olcha.uz/image/220x220/products/supplier/stores/1/2023-09-22/EK19OkjIAv9G3h7UXssfAyuuHi82S692Hm5uDxQsv7EzdftXtyYZfHYsyJ38.jpg',
    },
    {
        title: 'Кулер для воды Vital VT-7SX',
        price: '4 635 000 сум',
        installment: '543 000 сум x 12 мес',
        imageSrc: 'https://olcha.uz/image/220x220/products/aY1Ri0BSB8CEUavRz8Xyxcj02nwEIj8dy2EHn5IayZdaUuKoO0ZvPdBvjGFB.jpg',
    },
    {
        title: 'Пылесос Ziffler BCP-1800 GOLD',
        price: '1 055 322 сум',
        installment: '124 000 сум x 12 мес',
        imageSrc: 'https://olcha.uz/image/220x220/products/cdn_1/supplier/stores/1/2024-08-12/9sSEAMALubwHeAkTru1xYMeLPA0QRZ8aLRlzx2BtalY43g1EaoqnTMfJWQj0.jpg',
    },
];

const HouseholdAppliances: React.FC = () => {
    return (
        <div className="max-w-screen-2xl mx-auto px-4 py-6">
            <div className="flex flex-col lg:flex-row gap-6">
                <div className="w-full lg:w-3/4">
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                        {householdProducts.map((product, index) => (
                            <ProductCard key={index} product={product} />
                        ))}
                    </div>
                </div>
                <div className="hidden lg:block lg:w-1/5 flex-shrink-0">
                    <a href="#" className="block h-full">
                        <img 
                            src={bannerUrl} 
                            alt="Бытовая техника" 
                            className="w-full h-full object-cover rounded-2xl shadow-md"
                        />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default HouseholdAppliances;