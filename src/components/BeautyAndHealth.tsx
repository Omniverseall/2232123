import React from 'react';
import ProductCard from './ProductCard';
import type { Product } from './ProductCard';

const bannerUrl = 'https://olcha.uz/image/original/homePage/cdn_1/2025-05-05/NsxKU2zFLWVjvjU0ClZjDJDLxWRphI71r54CtwWEjttV86gCtTpC3fmMu2xd.jpg';

const beautyProducts: Product[] = [
  {
    title: 'Стайлер Dyson Airwrap Complete Long',
    price: '9 495 000 сум',
    installment: '1 112 000 сум x 12 мес',
    imageSrc: 'https://olcha.uz/image/220x220/products/2020-11-27/stayler-dyson-airwrap-complete-long-19528-0.jpeg',
    discount: '-1%',
  },
  {
    title: 'Мазь от геморроя Хуа То',
    price: '36 000 сум',
    installment: '5 000 сум x 12 мес',
    imageSrc: 'https://olcha.uz/image/220x220/products/cdn_1/supplier/stores/1/2025-02-13/0ZvFAcgewJeypA0taISUUNUaEUh49ZwwsY8bKfFgBdRUkVfO4Bxz9ZYzfaAA.jpg',
  },
  {
    title: 'Пилинг-гель FLORIA Brightening Hyaluron',
    price: '166 000 сум',
    installment: '20 000 сум x 12 мес',
    imageSrc: 'https://olcha.uz/image/266x355/products//supplier/stores/26820/1%2Fmedium-5432af.jpg',
  },
  {
    title: 'Loui Martin Tiger (M) EDP 100 ML (Dubai)',
    price: '195 000 сум',
    installment: '65 000 сум x 3 мес',
    imageSrc: 'https://olcha.uz/image/266x355/products//supplier/stores/27202/now%2Fphoto-2025-04-02-10-47-30.jpg',
  },
  {
    title: 'Versace Man Eau Fraiche EDT 100ml (Original)',
    price: '775 000 сум',
    installment: '91 000 сум x 12 мес',
    imageSrc: 'https://olcha.uz/image/220x220/products/2019-11-14/versace-man-eau-fraiche-edt-100ml-original-10865-0.jpeg',
  },
  {
    title: 'Tom Ford Ombre Leather (U) EDP 100ML (Dubai)',
    price: '260 000 сум',
    installment: '31 000 сум x 12 мес',
    imageSrc: 'https://olcha.uz/image/220x220/products/cEAMFLmeUCJD9WaDoDZK6VA4w6n7VocJIRq41dG5S1DgUUVx7rlbmrJ6fvEP.jpg',
  },
  {
    title: 'Дезодорант спрей Фа 150мл',
    price: '30 000 сум',
    installment: '4 000 сум x 12 мес',
    imageSrc: 'https://cdn.olcha.uz/image/266x355/products/api/binafsha-store/2024-08-02/L31quFl8V5qvhIGkKV9NvwVrV1Y6Csgcjz9XYoPI34EiRl4B8Dg2eoU2gyTlGdiG.png',
  },
  {
    title: 'Мазь для суставов Dahn Hanzal 50мл',
    price: '66 000 сум',
    installment: '8 000 сум x 12 мес',
    imageSrc: 'https://olcha.uz/image/220x220/products/2022-11-25/maz-dlya-sustavov-dahn-hanzal-50ml-171601-0.jpeg',
  },
  {
    title: 'Hermes Terre d`Hermes EDT 100ml (Original)',
    price: '1 667 680 сум',
    installment: '196 000 сум x 12 мес',
    imageSrc: 'https://olcha.uz/image/220x220/products/2019-11-18/hermes-terre-dhermes-edt-100ml-original-10913-0.jpeg',
  },
  {
    title: 'Chanel Bleu de Chanel 100ml EDT (Original)',
    price: '1 990 000 сум',
    installment: '234 000 сум x 12 мес',
    imageSrc: 'https://olcha.uz/image/220x220/products/2019-11-15/chanel-bleu-de-chanel-100ml-edt-original-10891-0.jpeg',
  },
];

const BeautyAndHealth: React.FC = () => {
  return (
    <div className="max-w-screen-2xl mx-auto px-4 py-6">
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="w-full lg:w-1/6 flex-shrink-0">
          <a href="#" className="block h-full">
            <img 
              src={bannerUrl} 
              alt="Красота и здоровье" 
              className="w-full h-full object-cover rounded-2xl shadow-md hover:shadow-xl transition-shadow"
            />
          </a>
        </div>
        <div className="w-full lg:w-4/5">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {beautyProducts.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeautyAndHealth;