import React from 'react';
import ProductCard from './ProductCard';
import type { Product } from './ProductCard';

const bannerUrl = 'https://olcha.uz/image/original/homePage/cdn_1/2024-12-07/ouqi7e1fpjHccO2yAWAzzzpZ7Zy2WnUeclPjti9y0z0ATEdDdy3cntY37WMq.png';

const repairTools: Product[] = [
  {
    title: 'Аккумуляторная дрель-шуруповерт Bosch, копия',
    price: '399 000 сум',
    oldPrice: '700 000 сум',
    installment: '47 000 сум x 12 мес',
    imageSrc: 'https://olcha.uz/image/266x355/products/cdn_1/supplier/stores/1/2024-09-24/iZ3FQxqBQH5207WDKfBanLdKGiD7iV5fDVoMSm8OBUolSiiICjHSA5B5n4ga.jpg',
    discount: '-44%',
  },
  {
    title: 'Краскопульт Total TT3506',
    price: '568 000 сум',
    installment: '67 000 сум x 12 мес',
    imageSrc: 'https://olcha.uz/image/220x220/products/2022-05-25/kraskopult-total-tt3506-54061-0.jpg',
  },
  {
    title: 'Аккумуляторный шуруповерт Bosch 12В',
    price: '550 000 сум',
    oldPrice: '750 000 сум',
    installment: '65 000 сум x 12 мес',
    imageSrc: 'https://olcha.uz/image/220x220/products/cdn_1/supplier/stores/1/2024-11-07/aXNKEflQF5jDPr8Ja5Jocj682Wm1yoCMUsz5iQwiUZRpZoPWCmb5w0vHuc3x.png',
    discount: '-27%',
  },
  {
    title: 'Сумка для инструментов Total THT261325',
    price: '130 000 сум',
    installment: '16 000 сум x 12 мес',
    imageSrc: 'https://olcha.uz/image/220x220/products/2022-08-13/sumka-dlya-instrumentov-total-tht261325-98634-0.jpeg',
  },
  {
    title: 'Аккумуляторная дрель-шуруповерт EPA EASH-',
    price: '864 000 сум',
    installment: '102 000 сум x 12 мес',
    imageSrc: 'https://olcha.uz/image/220x220/products/cdn_1/supplier/stores/1/2025-07-14/kzx8oynucrszbMfhCAvwt4c5tmBD9zPVaK5jeqckj4aVfmLoMfVkXUIVO7oV.jpg',
  },
  {
    title: 'Лазерная рулетка дальномер 50метров',
    price: '399 000 сум',
    installment: '47 000 сум x 12 мес',
    imageSrc: 'https://olcha.uz/image/220x220/products/cdn_1/supplier/stores/1/2025-02-19/95cWqJWtXFlFpiwOX3oJAigso88NsywBHdTv057SEvxdjkvBn0avcpnshAFB.jpg',
  },
  {
    title: 'Набор инструментов Bosch 5 в 1 копия',
    price: '2 250 000 сум',
    oldPrice: '2 550 000 сум',
    installment: '264 000 сум x 12 мес',
    imageSrc: 'https://olcha.uz/image/220x220/products/cdn_1/supplier/stores/1/2024-11-07/t3KqlbqIvHdGNwbitRs3u68riKU1vAkJjlDtdDH5BJrK6dRfDmRafqEiNk1X.jpeg',
    discount: '-12%',
  },
  {
    title: 'Лазерный уровень Makita 4d копия',
    price: '799 000 сум',
    oldPrice: '999 000 сум',
    installment: '94 000 сум x 12 мес',
    imageSrc: 'https://olcha.uz/image/266x355/products/cdn_1/supplier/stores/1/2024-11-06/1VxWxpXRM3gq8eDiUCYnzhrpDvtb60JcwwNPkrf1vOFCOmer8VPkjP3Kl5pd.jpg',
    discount: '-21%',
  },
  {
    title: 'Перфоратор EPA EEP-32-3 1500 Вт',
    price: '1 251 000 сум',
    installment: '147 000 сум x 12 мес',
    imageSrc: 'https://olcha.uz/image/220x220/products/cdn_1/supplier/stores/1/2024-06-18/3lNiVr4npQ5YXjrkZQd8jFIyIk5a5W0Swe6iwXyZ6I7YlyAbEljJrQINygcT.jpg',
  },
  {
    title: 'Аккумуляторная дрель Total Li-ion TDLI2428',
    price: '454 000 сум',
    installment: '54 000 сум x 12 мес',
    imageSrc: 'https://olcha.uz/image/220x220/products/supplier/stores/1/2023-11-10/u0yc2OlTGi5GD45A3qyNZw2rajA23BFEdOkmfFbVgJBP9ZsUiZkq9krCq6lT.jpg',
  },
];

const RepairTools: React.FC = () => {
  return (
    <div className="max-w-screen-2xl mx-auto px-4 py-6">
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="w-full lg:w-1/6 flex-shrink-0">
          <a href="#" className="block h-full">
            <img 
              src={bannerUrl} 
              alt="Инструменты для ремонта и строительства" 
              className="w-full h-full object-cover rounded-2xl shadow-md hover:shadow-xl transition-shadow"
            />
          </a>
        </div>
        <div className="w-full lg:w-4/5">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {repairTools.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RepairTools;