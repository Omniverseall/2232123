import React from 'react';
import ProductCard from './ProductCard';
import type { Product } from './ProductCard';

const bannerUrl = 'https://olcha.uz/image/original/homePage/cdn_1/2024-06-21/yotr1FzMpoaa6nQ4DPpcXboD8v063uViSWkEgVw5Hmvgd2tFfAhGOHGwlvSj.jpg';

const featuredProducts: Product[] = [
  {
    title: 'Ноутбук MSI Raider GE77HX 12UHS-082US i9-',
    price: '58 331 519 сум',
    installment: '6 832 000 сум x 12 мес',
    imageSrc: 'https://olcha.uz/image/220x220/products/fJUCbjhIo15C5srsC1cWoTcWqPcpSCjtHodfP6MSA7NT8DDE24EsJZRo6Naf.jpg',
  },
  {
    title: 'Apple iPhone 15 Pro Max 256GB Natural Titanium',
    price: '14 835 000 сум',
    installment: '1 738 000 сум x 12 мес',
    imageSrc: 'https://olcha.uz/image/220x220/products/supplier/stores/1/2023-09-13/pQIvLk5PqlF9p4Wcobtd6rNjLTBo67eltmac4OoVMgVKa2X13vSXN9cITv77.jpg',
  },
  {
    title: 'Наушники Sony WH-CH720N Black',
    price: '1 476 943 сум',
    installment: '173 000 сум x 12 мес',
    imageSrc: 'https://olcha.uz/image/220x220/products/cdn_1/supplier/stores/1/2024-06-07/tqGChmLwX0hSVWVgVE9w74jCJgOuFRwgDQ0FXQLMA1mWoJhRi1zG9iOlaKtG.JPG',
  },
  {
    title: 'Беспроводные наушники Samsung Galaxy Buds 2',
    price: '1 541 662 сум',
    installment: '176 000 сум x 12 мес',
    imageSrc: 'https://olcha.uz/image/220x220/products/VyPgqUqD96sheF0OHYCf3rk14n9rMUyBrMaG9zFreCRAepW4k78ktVxIbd8f.jpg',
  },
];

const FeaturedProducts: React.FC = () => {
  return (
    <div className="max-w-screen-2xl mx-auto px-4 py-6">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Левый баннер */}
        <div className="w-full lg:w-3/5 flex-shrink-0">
          <a href="#" className="block h-full">
            <img 
              src={bannerUrl} 
              alt="Olcha - всё, что вам нужно, в одном месте" 
              className="w-full h-full object-cover rounded-2xl shadow-md hover:shadow-xl transition-shadow"
            />
          </a>
        </div>
        {/* Правая сетка 2x2 */}
        <div className="w-full lg:w-2/5">
          <div className="grid grid-cols-2 gap-4 h-full">
            {featuredProducts.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;