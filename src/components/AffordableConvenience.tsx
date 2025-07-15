import React from 'react';
import ProductCard from './ProductCard';
import type { Product } from './ProductCard';

const bannerUrl = 'https://olcha.uz/image/original/homePage/cdn_1/2025-05-05/VmtNReJFV9PIwOWMd41Al2imIdRLeZoXuZsvPa9FO93GcsfK3tiaBxLNy8Bs.jpg';

const affordableProducts: Product[] = [
  {
    title: 'Напольный вентилятор Технолюкс',
    price: '290 000 сум',
    installment: '34 000 сум x 12 мес',
    imageSrc: 'https://olcha.uz/image/220x220/products/cdn_1/supplier/stores/1/2025-05-08/AnOdk7Xwa3G2oLCL2PlXvuosE74qvj4cjVprjLWZTHnVVNXbZqbfM3cXZnxA.jpg',
  },
  {
    title: 'Пылесос Artel VCC0220, Бордовый',
    price: '1 332 000 сум',
    installment: '156 000 сум x 12 мес',
    imageSrc: 'https://olcha.uz/image/220x220/products/2018-04-23/pylesos-artel-vcc0220-bordoviy-2905-0.jpg',
  },
  {
    title: 'Ручной погружной блендер Healthy Lifestyle',
    price: '348 000 сум',
    installment: '41 000 сум x 12 мес',
    imageSrc: 'https://olcha.uz/image/266x355/products//supplier/stores/27368/ruc-blendr%2F01-qol-blender-625.jpg',
  },
  {
    title: 'Мини Вентилятор настольный Akalon A-702',
    price: '143 000 сум',
    installment: '17 000 сум x 12 мес',
    imageSrc: 'https://olcha.uz/image/220x220/products/cdn_1/supplier/stores/1/2025-05-08/ZdIJgsRRQx0AmksgXlf95BMObpayrB2RAPhzX3kyrliUSW9FGsZiIK0IP2ep.jpg',
  },
  {
    title: 'Вентилятор Vitek VT-1913',
    price: '502 843 сум',
    installment: '59 000 сум x 12 мес',
    imageSrc: 'https://olcha.uz/image/220x220/products/4bJS3aRBpzdIsUBhG5GaWL2RC1cwUlpEM4tmfDUZy7Q1hyUPjkWUb5PbWLdx.jpg',
  },
  {
    title: 'Промышленный оверлок Jack C2-4-M03/333',
    price: '8 808 602 сум',
    installment: '1 032 000 сум x 12 мес',
    imageSrc: 'https://olcha.uz/image/220x220/products/supplier/stores/1/2023-09-30/KSzQyRJzXB1UaFBgoSXZzOl8PhKkYiFst21QPiXecighWjhu6PFbZOfXeiFV.jpg',
  },
  {
    title: 'Кондиционер Immer Pure 12 Inverter',
    price: '3 940 000 сум',
    installment: '462 000 сум x 12 мес',
    imageSrc: 'https://olcha.uz/image/220x220/products/cdn_1/supplier/stores/1/2024-04-19/UDZEHJFXyrTPJwRlcevTGFq2l7ygbgSCwZYg9ANkPVdrQ4ZjvUEmNuuLlEeH.jpg',
  },
  {
    title: 'Кондиционер Immer AERO 12 Inverter',
    price: '3 699 000 сум',
    installment: '434 000 сум x 12 мес',
    imageSrc: 'https://olcha.uz/image/220x220/products/cdn_1/supplier/stores/1/2024-04-19/33CzwQ6bB1yRwcHn424ICBVoEPeThzRz7EUBQ7UoKBkoDSY84X0nvMvErKlk.jpg',
  },
  {
    title: 'Увлажнитель воздуха и ароматизатор Green Air',
    price: '299 000 сум',
    installment: '36 000 сум x 12 мес',
    imageSrc: 'https://olcha.uz/image/220x220/products/cdn_1/supplier/stores/1/2025-05-07/Atx0HLEewGM00zDmU16P6RwaYW1Be6Ff9cxJb7I3IQMStyeYRKyWTx3mVZx5.jpg',
  },
  {
    title: 'Кондиционер Immer T-Nova 24',
    price: '6 092 000 сум',
    installment: '714 000 сум x 12 мес',
    imageSrc: 'https://olcha.uz/image/220x220/products/cdn_1/supplier/stores/1/2025-05-16/9zsoqNa0l936Fsv8fCXVXjkEVV9MibECHFhF7MkSAkhap7TA0HXQ46deFlMc.jpg',
  },
];

const AffordableConvenience: React.FC = () => {
  return (
    <div className="max-w-screen-2xl mx-auto px-4 py-6">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Левый баннер с вашей шириной lg:w-1/5 */}
        <div className="w-full lg:w-1/5 flex-shrink-0">
          <a href="#" className="block h-full">
            <img 
              src={bannerUrl} 
              alt="Удобство по доступной цене" 
              className="w-full h-full object-cover rounded-2xl shadow-md hover:shadow-xl transition-shadow"
            />
          </a>
        </div>

        {/* Правая сетка с товарами, теперь занимает lg:w-4/5 */}
        <div className="w-full lg:w-4/5">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {affordableProducts.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AffordableConvenience;