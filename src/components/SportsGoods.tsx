import React from 'react';
import ProductCard from './ProductCard';
import type { Product } from './ProductCard';

const bannerUrl = 'https://olcha.uz/image/272x444/homePage/cdn_1/2024-07-25/oXm3dg00fb0C83TpN0y11wIDrZJ2My249WmQYfSgqYHMaxiXJ8TeVxqYl1Ri.jpg';

const sportsProducts: Product[] = [
  {
    title: 'Велосипед 26 скорост',
    price: '1 680 000 сум',
    installment: '197 000 сум x 12 мес',
    imageSrc: 'https://olcha.uz/image/220x220/products/cdn_1/supplier/stores/1/2024-04-23/llUYLAWaFRqnFgnIKxNA3AMExl6r4StTJKT10ASIY6nRsu6xClDeNLBy0Xas.jpg',
  },
  {
    title: 'Креатин Kevin Levrone Gold Creatine 300 g 60',
    price: '275 000 сум',
    installment: '33 000 сум x 12 мес',
    imageSrc: 'https://olcha.uz/image/220x220/products/cdn_1/supplier/stores/1/2024-12-13/wq0ynhPooWi4LjjqSIrP46ej8Q6tBIUTottWv3zYm8UVtzkRxnoJPOPwubY9.jpg',
  },
  {
    title: 'Креатин моногидрат Nutrex 300 г',
    price: '319 597 сум',
    installment: '38 000 сум x 12 мес',
    imageSrc: 'https://olcha.uz/image/220x220/products/cdn_1/supplier/stores/1/2024-11-11/ikzzN9hov1KKw9grCUcPNcleppVyNr6J5RQeJranZVNViH8qCgJrpxOgddup.jpg',
  },
  {
    title: 'Гейнер Mega Mass 4000, WEIDER, 1 кг',
    price: '109 900 сум',
    installment: '13 000 сум x 12 мес',
    imageSrc: 'https://olcha.uz/image/220x220/products/cdn_1/supplier/stores/1/2024-10-23/tiWyt8YCkeSr7WHJIvNqASFG7wUauE1umJg3PMsvxCBt0Kwx5ANx8keZxYwe.jpg',
  },
  {
    title: 'Ролики гелевые универсальные',
    price: '459 000 сум',
    installment: '54 000 сум x 12 мес',
    imageSrc: 'https://olcha.uz/image/220x220/products/cdn_1/supplier/stores/1/2024-08-23/RD8uJp1Ra2DJ4pyMZ8FuyvimzR7kxlS4gwzH0v34FLQi0OUTI1UitW4mJUDJ.png',
  },
];

const SportsGoods: React.FC = () => {
  return (
    <div className="max-w-screen-2xl mx-auto px-4 py-6">
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="w-full lg:w-3/4">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 h-full">
            {sportsProducts.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>
        </div>
        <div className="hidden lg:block lg:w-1/6 flex-shrink-0">
          <a href="#" className="block h-full">
            <img 
              src={bannerUrl} 
              alt="Спорт товары" 
              className="w-full h-full object-cover rounded-2xl shadow-md"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SportsGoods;