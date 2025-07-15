import React from 'react';
import ProductCard from './ProductCard';
import type { Product } from './ProductCard';

// Определяем тип для исходных данных, где поле называется 'img'
interface ProductData {
  title: string;
  price: string;
  installment: string;
  img: string;
}

const productsData: ProductData[] = [
  {
    title: 'Apple iPhone 15 Pro Max',
    price: '14 126 000 сум',
    installment: '1 655 000 сум × 12 мес',
    img: 'https://olcha.uz/image/220x220/products/cdn_1/supplier/stores/1/2025-04-25/bj72BDuwZPztwhsuRzPiTCX6noBW5PracBRKkVRHTzZYiYoEbCZGuuzBlWLe.jpg',
  },
  {
    title: 'Sony PlayStation 5 Digital Edition',
    price: '6 365 000 сум',
    installment: '746 000 сум × 12 мес',
    img: 'https://olcha.uz/image/266x355/products/cdn_1/supplier/stores/1/2024-11-28/PK439EIN2oVAvX6ezVPJYOJF8X5v1kzGlRvGhIRy7Nwht9h7qbyRFx89dDVn.png',
  },
  {
    title: 'Xiaomi Redmi Note 14 Pro',
    price: '3 440 000 сум',
    installment: '403 000 сум × 12 мес',
    img: 'https://olcha.uz/image/266x355/products/cdn_1/supplier/stores/1/2025-03-11/RX3I5bViXa5VL5q2I3h4UlHmlUnianu3RJLG0H99inmN63k2CJ0pxJX168UZ.jpg',
  },
  {
    title: 'Samsung Galaxy S25 Ultra 1 TB',
    price: '15 107 000 сум',
    installment: '1 770 000 сум × 12 мес',
    img: 'https://olcha.uz/image/220x220/products/cdn_1/supplier/stores/1/2025-04-25/YrlzMVHpz5jmn67KeOxxNyXDc38MbqwhIsi1arFokvj6eNXYFDohiCKUgGgi.jpg',
  },
  {
    title: 'Samsung Galaxy A55',
    price: '4 511 800 сум',
    installment: '529 000 сум × 12 мес',
    img: 'https://olcha.uz/image/220x220/products/cdn_1/supplier/stores/1/2025-04-25/SbO3KF40egRuNwKSBLzSEDVQyI15pL4DpgwecwsSfjmbgLzz11qjy35Kp0mW.jpg',
  },
  {
    title: 'Xiaomi Redmi 14C',
    price: '1 413 000 сум',
    installment: '166 000 сум × 12 мес',
    img: 'https://olcha.uz/image/220x220/products/cdn_1/supplier/stores/1/2025-04-25/FuJXL7AlDZCznHyDYQF3XcDNA6u8WMzjZcl6RJuHJqhTDVnIFLJkFrRkVUtA.jpg',
  },
  {
    title: 'Apple iPhone 16 Pro Max',
    price: '17 354 900 сум',
    installment: '1 964 000 сум × 12 мес',
    img: 'https://olcha.uz/image/220x220/products/cdn_1/supplier/stores/1/2025-04-25/2zj8tSYiDlbFkuaH8NytDZrmdzPKwZydGaS8RkOkkATmJTkYV9WxhHd8ClLT.jpg',
  },
  {
    title: 'Samsung Galaxy A16',
    price: '2 147 000 сум',
    installment: '252 000 сум × 12 мес',
    img: 'https://olcha.uz/image/220x220/products/cdn_1/supplier/stores/1/2025-04-23/ABacr2NI4l5hkxlswKgANn8aBCZ0oU1cvb8eYW4AX5GS7AxrmJP4NbSVYAyi.jpg',
  },
  {
    title: 'Samsung Galaxy A06',
    price: '1 560 000 сум',
    installment: '183 000 сум × 12 мес',
    img: 'https://olcha.uz/image/220x220/products/cdn_1/supplier/stores/1/2025-04-23/sScivbWPbhOWpmJYT9qQV0gg5y0X9P4mnMufuAw61A25QKAzt1sBfvhf4x7J.jpg',
  },
  {
    title: 'Xiaomi Redmi Note 14',
    price: '2 173 000 сум',
    installment: '255 000 сум × 12 мес',
    img: 'https://olcha.uz/image/220x220/products/cdn_1/supplier/stores/1/2025-04-23/tIihTlG45u9573hmi2AJTeGq0suYEt9Bol4ylPrEQ0gLOotEFqK4eHTxigIE.jpg',
  },
];


const ProductGridExact: React.FC = () => (
  <div className="max-w-screen-2xl mx-auto px-4 py-6">
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {productsData.map((p, index) => {
        // Создаем объект, который соответствует интерфейсу Product
        const productForCard: Product = {
          title: p.title,
          price: p.price,
          installment: p.installment,
          imageSrc: p.img, // Преобразуем 'img' в 'imageSrc'
        };
        return <ProductCard 
          key={index} 
          product={productForCard}
        />
      })}
    </div>
  </div>
);

export default ProductGridExact;