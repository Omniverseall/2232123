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
    title: 'Беспроводные наушники Earbuds M10',
    price: '14 126 000 сум',
    installment: '1 655 000 сум × 12 мес',
    img: 'https://olcha.uz/image/220x220/products/cdm0m4bFeYZYGZXZMbG6kHmWpZLxJgIAOjiCQcroZXTpVycAj8F38sBcSBHV.jpg',
  },
  {
    title: 'Очки виртуальной реальности Meta Quest 3S',
    price: '6 365 000 сум',
    installment: '746 000 сум × 12 мес',
    img: 'https://olcha.uz/image/220x220/products/cdn_1/supplier/stores/1/2025-01-10/jNfpV7jfwACoDemy1xn9f1laQUqwj5jzMXptA4P6mVoMmAvO9JuCDDDKipnc.jpg',
  },
  {
    title: 'Телевизор Vesta V32LH4000 32',
    price: '3 440 000 сум',
    installment: '403 000 сум × 12 мес',
    img: 'https://olcha.uz/image/220x220/products/supplier/stores/1/2023-08-28/51vh2Y9Z73X6Q7S5BHBoUlD7JUpezLTtef9AffqHIgdVddp1Ky4YBkM4xjj7.jpg',
  },
  {
    title: 'Промышленный оверлок со столом Jack JK-E3-4-M2-24',
    price: '15 107 000 сум',
    installment: '1 770 000 сум × 12 мес',
    img: 'https://olcha.uz/image/220x220/products/supplier/stores/1/2023-09-22/EK19OkjIAv9G3h7UXssfAyuuHi82S692Hm5uDxQsv7EzdftXtyYZfHYsyJ38.jpg',
  },
  {
    title: 'Кондиционер Rulls Liberty Inverter 18',
    price: '4 511 800 сум',
    installment: '529 000 сум × 12 мес',
    img: 'https://olcha.uz/image/220x220/products/cdn_1/supplier/stores/1/2024-09-25/XWC7GZ7gUgp8r0LOrdkWNx8cIoN5p4VDBpyxXwjJMANXvwSC3tZxGYIIbSce.jpg',
  },
  {
    title: 'Джойстик Sony PlayStation 5 DualSense Gray Camouflage (from U.A.E.)',
    price: '1 413 000 сум',
    installment: '166 000 сум × 12 мес',
    img: 'https://olcha.uz/image/220x220/products/cdn_1/supplier/stores/1/2024-06-24/eveD7cM9AWuLGKGl3oRiQKnucWCjqbF16Gbq3beVcvxgY2bPbCEuWBn34yK0.JPG',
  },
  {
    title: 'Беспроводные наушники Huawei Free Buds SE 3 Black',
    price: '17 354 900 сум',
    installment: '1 964 000 сум × 12 мес',
    img: 'https://olcha.uz/image/220x220/products/cdn_1/supplier/stores/1/2025-03-06/3wQR3LXeKGlqiM8hNgtEiu7SfjNf12RtB7tR0nHcYwKr6kOxw3K41MwcRdYJ.jpg',
  },
  {
    title: 'Пылесос Artel VCC0220, Grey',
    price: '2 147 000 сум',
    installment: '252 000 сум × 12 мес',
    img: 'https://olcha.uz/image/220x220/products/2018-04-23/pylesos-artel-vcc0220-grey-2911-0.jpg',
  },
  {
    title: 'Видеорегистратор с радар-детектором Neoline X-Cop 9700s Wifi Black',
    price: '1 560 000 сум',
    installment: '183 000 сум × 12 мес',
    img: 'https://olcha.uz/image/220x220/products/cdn_1/supplier/stores/1/2025-07-07/WpQah1iCO6puwPxVAT0PVM6t1YyQmapW1YaEl0aCy4TI5Pb0TTEhrciMJluL.jpg',
  },
];


const ProductGridExact0: React.FC = () => (
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

export default ProductGridExact0;