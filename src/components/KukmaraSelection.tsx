import React from 'react';
import ProductCard from './ProductCard';
import type { Product } from './ProductCard';

const bannerUrl = 'https://olcha.uz/image/original/homePage/cdn_1/2025-05-05/5rhHGdMUjp062fJc1W5QWCWGr1ZuIvCl1VAUPMGjDlKS3MnpfgqWzRJNP8Cj.jpg';

const kukmaraProducts: Product[] = [
  {
    title: 'Электрический блендер Healthy Lifestyle R.2834',
    price: '348 000 сум',
    installment: '41 000 сум x 12 мес',
    imageSrc: 'https://olcha.uz/image/266x355/products/cdn_1/supplier/stores/1/2025-04-14/vQhaMBO86KCKnQcId5bA9ZnsR7yhU1rYMKScwexmSOKW7d5SGNmlBXiDC1xY.jpg',
  },
  {
    title: 'Ручной погружной блендер Healthy Lifestyle',
    price: '348 000 сум',
    installment: '41 000 сум x 12 мес',
    imageSrc: 'https://olcha.uz/image/266x355/products//supplier/stores/27368/ruc-blendr%2F01-qol-blender-625.jpg',
  },
  {
    title: 'Электрический чайник Healthy Lifestyle R.7949B',
    price: '174 000 сум',
    installment: '21 000 сум x 12 мес',
    imageSrc: 'https://olcha.uz/image/220x220/products/cdn_1/supplier/stores/1/2025-04-02/ZBasl3q3SaLpHrFM9tOnzX4U5xXNiHDqPazHDGZvCWmQ9ZwdBS03PjSHZxeX.jpg',
  },
  {
    title: 'Микроволновая печь GOODWELL GMF-2304BL',
    price: '1 489 997 сум',
    installment: '175 000 сум x 12 мес',
    imageSrc: 'https://olcha.uz/image/220x220/products/cdn_1/supplier/stores/1/2024-09-06/cv9AW5CxbDtjFPmOeJhSDNNaKuZQL4JL1WoT7Ki3hZunRjjGeZ3hGHeosBUi.jpg',
  },
  {
    title: 'Соковыжималка LAMO LM-J618',
    price: '477 700 сум',
    installment: '56 000 сум x 12 мес',
    imageSrc: 'https://olcha.uz/image/220x220/products/sGKfMhgnqVZek2B4QYFxbWhUWzAXse9tWRG9f6ZN8CKXhQcsPljsa9pbmFg7.jpg',
  },
  {
    title: 'Тефаль "STARLUX" 2,5 литр',
    price: '352 800 сум',
    installment: '42 000 сум x 12 мес',
    imageSrc: 'https://olcha.uz/image/220x220/products/Q0np5nwvSkzNK7h1FvKENAV3GkoCb7uhZnOgBUGegIgrB41xtIsLwBvAXNiM.jpg',
  },
  {
    title: 'Соковыжималка блендер 4 в 1 Bosch BS-859 Copy',
    price: '996 800 сум',
    installment: '117 000 сум x 12 мес',
    imageSrc: 'https://olcha.uz/image/266x355/products/supplier/stores/1/2023-07-29/dTa9eVjW3eKH4ArBFOJL3SXLBCY0SNO1di1RxjK6m6U9ZqakRKh3yYmqaQY8.jpg',
  },
  {
    title: 'Тостер Sonifer SF-6055',
    price: '509 752 сум',
    installment: '60 000 сум x 12 мес',
    imageSrc: 'https://olcha.uz/image/220x220/products/khD4Sc4Gxgc8aBYRq6Y4USp5K8YZKrkLdZGCWCqxycMXbkTkprDE8G3WIuBN.jpg',
  },
  {
    title: 'Холодильник Бирюса M108',
    price: '2 654 042 сум',
    installment: '311 000 сум x 12 мес',
    imageSrc: 'https://olcha.uz/image/220x220/products/cdn_1/supplier/stores/1/2025-02-19/A1n0mBNMMp0rOlYt34bGKmbWdjbCGCUTgIlp8TPXMTzXwov4CVVT00klXIvR.jpg',
  },
  {
    title: 'Тарелки из пенопласта Zoolpack №7 25 шт',
    price: '29 000 сум',
    installment: '4 000 сум x 12 мес',
    imageSrc: 'https://olcha.uz/image/220x220/products/2022-07-17/tarelki-iz-penoplasta-zoolpack-7-25-sht-1-65477-0.jpeg',
  },
];

const KukmaraSelection: React.FC = () => {
  return (
    <div className="max-w-screen-2xl mx-auto px-4 py-6">
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="w-full lg:w-1/6 flex-shrink-0">
          <a href="#" className="block h-full">
            <img 
              src={bannerUrl} 
              alt="Kukmara Надежный Выбор" 
              className="w-full h-full object-cover rounded-2xl shadow-md hover:shadow-xl transition-shadow"
            />
          </a>
        </div>
        <div className="w-full lg:w-4/5">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {kukmaraProducts.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default KukmaraSelection;