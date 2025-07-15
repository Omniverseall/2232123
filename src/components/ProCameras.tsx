import React from 'react';
import ProductCard from './ProductCard';
import type { Product } from './ProductCard';

const bannerUrl = 'https://olcha.uz/image/original/homePage/cdn_1/2025-05-05/un0bfDH1M6p4aYiUB1SaY9CQ44uuJIWj9BDBKd5GIPXk6N3fAkfse4rX6Pyf.jpg';

const proProducts: Product[] = [
  {
    title: 'Sony PlayStation PS5 Digital Edition 1TB (from U.A.E)',
    price: '6 365 000 сум',
    oldPrice: '8 800 000 сум',
    installment: '746 000 сум x 12 мес',
    imageSrc: 'https://olcha.uz/image/266x355/products/cdn_1/supplier/stores/1/2024-10-29/ZceOitABHblx8Wp0HBQo1xdGsuOjYeZwWt3T0yiX9HSXUaE834QbZRYjb8Az.jpg',
    discount: '-28%',
  },
  {
    title: 'Sony PlayStation 5 CD 1TB (from U.A.E)',
    price: '7 299 000 сум',
    installment: '855 000 сум x 12 мес',
    imageSrc: 'https://olcha.uz/image/266x355/products/cdn_1/supplier/stores/1/2024-11-21/HM9dRVVCPZXvLQ8ZgQhMeZmgwsvsS7syJ8Vn1QByLM3TihFNpH4gduFr4T9r.jpg',
    discount: '-10%',
  },
  {
    title: 'Игровая консоль Sony PlayStation 5 Pro 2TB',
    price: '11 505 600 сум',
    oldPrice: '12 784 000 сум',
    installment: '1 348 000 сум x 12 мес',
    imageSrc: 'https://olcha.uz/image/266x355/products/cdn_1/supplier/stores/1/2025-03-11/RX3I5bViXa5VL5q2I3h4UlHmlUnianu3RJLG0H99inmN63k2CJ0pxJX168UZ.jpg',
    discount: '-10%',
  },
  {
    title: 'Игровой кулер с радиатором и дисплеем',
    price: '210 000 сум',
    installment: '25 000 сум x 12 мес',
    imageSrc: 'https://cdn.olcha.uz/image/220x220/products/woocomerce/sp-phone/2024-05-10/6Qnk9hMRY4jpbclSnpcbzOgtBZ7b2lDL1azqWMq5NO635oocFeJiSrtdwADAQoR1.jpeg',
  },
  {
    title: 'Artel TV A43KF5500 (109 см) Android',
    price: '3 022 000 сум',
    installment: '354 000 сум x 12 мес',
    imageSrc: 'https://olcha.uz/image/220x220/products/2022-11-24/artel-tv-a43kf5500-109-sm-android-171437-0.jpeg',
  },
  {
    title: 'Камера видеонаблюдения',
    price: '325 649 сум',
    installment: '39 000 сум x 12 мес',
    imageSrc: 'https://olcha.uz/image/220x220/products/cdn_1/supplier/stores/1/2025-01-31/xIobbYbnEDLYPHl4TYGCTrLLpDAVMJAtmZx9W1QjDKkgCTGHWrN6T4tqUzU7.jpg',
  },
  {
    title: 'Портативная акустика Harman/Kardon Aura',
    price: '3 568 000 сум',
    oldPrice: '5 170 000 сум',
    installment: '418 000 сум x 12 мес',
    imageSrc: 'https://olcha.uz/image/220x220/products/2021-10-20/portativnaya-akustika-harmankardon-aura-studio-3-26112-0.jpeg',
    discount: '-31%',
  },
  {
    title: 'Телевизор Artel UA43H3301 FHD LED',
    price: '2 331 000 сум',
    installment: '273 000 сум x 12 мес',
    imageSrc: 'https://olcha.uz/image/220x220/products/2020-02-17/artel-ua43h3301-fhd-led-12120-0.jpeg',
  },
  {
    title: 'Камера видеонаблюдения Xiaomi',
    price: '837 156 сум',
    installment: '99 000 сум x 12 мес',
    imageSrc: 'https://olcha.uz/image/220x220/products/cdn_1/supplier/stores/1/2025-02-19/A1n0mBNMMp0rOlYt34bGKmbWdjbCGCUTgIlp8TPXMTzXwov4CVVT00klXIvR.jpg',
  },
  {
    title: 'Телевизор Premier 43 PRM84OUSV 4K ULTRA',
    price: '3 395 000 сум',
    installment: '398 000 сум x 12 мес',
    imageSrc: 'https://olcha.uz/image/220x220/products/cdn_1/supplier/stores/1/2024-10-09/v71Pn3PIAtnFSqerCFg2l5aEYoejFXP3szjmcKP2RaSp89VOfmpKzrFE60qq.jpg',
  },
];

const ProCameras: React.FC = () => {
  return (
    <div className="max-w-screen-2xl mx-auto px-4 py-6">
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="w-full lg:w-1/6 flex-shrink-0">
          <a href="#" className="block h-full">
            <img 
              src={bannerUrl} 
              alt="Профессиональные камеры" 
              className="w-full h-full object-cover rounded-2xl shadow-md hover:shadow-xl transition-shadow"
            />
          </a>
        </div>
        <div className="w-full lg:w-4/5">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {proProducts.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProCameras;