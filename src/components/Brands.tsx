// File: src/components/Brands.tsx
import React from 'react';
import { useTranslation } from 'react-i18next';

interface BrandCategory {
  name: string;
  imageSrc: string;
}

interface Brand {
  name: string;
  logoSrc: string;
  categories: BrandCategory[];
}

const brandsData: Brand[] = [
  {
    name: 'Apple',
    logoSrc: 'https://olcha.uz/uploads/images/manufacturer/KK/KK/Kh/1667632821.png',
    categories: [
      { name: 'Акустика', imageSrc: 'https://olcha.uz/image/128x128/category/HNa7cUNc3ZmusOifaui3ILWGymcH1dQiFqkaKJzagTlqcOUgCs6Q3yr3pwis.png' },
      { name: 'Медиаплеер', imageSrc: 'https://olcha.uz/image/128x128/category/VHfLdXIi8WVvhYGxrhdQUVpA2N11hgJEcA4C8uf4sSk4EejpDg1Qhx2lslTF.png' },
      { name: 'Очки виртуальной реальности', imageSrc: 'https://olcha.uz/image/128x128/category/4rZuiDyns6OagIpAvvAsKvSSO2ljbZOcch1r1yhs5CW9uDmWgKdXg5NoaqSX.png' },
    ],
  },
  {
    name: 'Samsung',
    logoSrc: 'https://olcha.uz/uploads/images/manufacturer/KK/KK/Ko/1667553735.png',
    categories: [
      { name: 'Телевизоры', imageSrc: 'https://olcha.uz/image/128x128/category/FIsAVytQy3Up6SRiF65N82VE6xgDZJTQj4kgxx60ad9MSnnEEhVKa1KykdkY.png' },
      { name: 'Мониторы', imageSrc: 'https://olcha.uz/image/128x128/category/b9ndmxu7R1o0rNIfa66oTO5C8yGLz0rqSKPVIgsNOXf11pmxhJkp7zTOCZet.png' },
      { name: 'SSD накопители', imageSrc: 'https://olcha.uz/image/128x128/category/PfcfeDqNbEzAMOYWFMPJDvBOZCd8TJfOZ7ycuhurG551aKhfHwG9Rp8jOyqe.png' },
    ],
  },
  {
    name: 'Sony',
    logoSrc: 'https://olcha.uz/uploads/images/manufacturer/KK/KK/Kd/1646038705.jpg',
    categories: [
      { name: 'Телевизоры', imageSrc: 'https://olcha.uz/image/128x128/category/SCaz0uerg7WUKCf6e1ezZ67Tw7OzYMliaAs8QTbPjn9E0R2mmyWyEIC1ErhQ.png' },
      { name: 'Музыкальные системы', imageSrc: 'https://olcha.uz/image/128x128/category/VZnCHXlHhCMJNL8KChM7IuLCg2tLaa5g1TkEvHFxjSRz3npBWIP3qi6vjtxl.png' },
      { name: 'Акустика', imageSrc: 'https://olcha.uz/image/128x128/category/IGFNO9wFic9eoNI6OOV2lxWe7cQ4njGQxfrzpRfaoP3XJoPtKGKQ9UObVsIB.png' },
    ],
  },
  {
    name: 'Versace',
    logoSrc: 'https://olcha.uz/uploads/images/manufacturer/KK/KK/Ka/1664348028.png',
    categories: [
        { name: 'Парфюмерия для женщин', imageSrc: 'https://olcha.uz/image/128x128/category/Kvm31gfqeBO4hF3lKs6osqKTir32S4myM6xY986G9ruwptEedash0T8V2wMO.png' },
        { name: 'Парфюмерия для мужчин', imageSrc: 'https://olcha.uz/image/128x128/category/4pDWY3qKGaRkR6glyN93LBrK1eUOEATa9ixoASTO7qMPSbatt1YqVKXXKRAz.png' },
        { name: 'Наборы парфюмерии', imageSrc: 'https://olcha.uz/image/220x220/products/Q0np5nwvSkzNK7h1FvKENAV3GkoCb7uhZnOgBUGegIgrB41xtIsLwBvAXNiM.jpg' },
    ],
  },
  {
    name: 'Xiaomi',
    logoSrc: 'https://olcha.uz/uploads/images/manufacturer/KK/KK/Kp/1646038892.jpg',
    categories: [
      { name: 'Телевизоры', imageSrc: 'https://olcha.uz/image/128x128/category/FIsAVytQy3Up6SRiF65N82VE6xgDZJTQj4kgxx60ad9MSnnEEhVKa1KykdkY.png' },
      { name: 'Акустика', imageSrc: 'https://olcha.uz/image/128x128/category/IGFNO9wFic9eoNI6OOV2lxWe7cQ4njGQxfrzpRfaoP3XJoPtKGKQ9UObVsIB.png' },
      { name: 'Камеры видеонаблюдения', imageSrc: 'https://olcha.uz/image/220x220/products/cdn_1/supplier/stores/1/2025-02-19/A1n0mBNMMp0rOlYt34bGKmbWdjbCGCUTgIlp8TPXMTzXwov4CVVT00klXIvR.jpg' },
    ],
  },
  {
    name: 'LG',
    logoSrc: 'https://olcha.uz/uploads/images/manufacturer/KK/KK/KB/1646038994.jpg',
    categories: [
      { name: 'Телевизоры', imageSrc: 'https://olcha.uz/image/128x128/category/SCaz0uerg7WUKCf6e1ezZ67Tw7OzYMliaAs8QTbPjn9E0R2mmyWyEIC1ErhQ.png' },
      { name: 'Мониторы', imageSrc: 'https://olcha.uz/image/128x128/category/b9ndmxu7R1o0rNIfa66oTO5C8yGLz0rqSKPVIgsNOXf11pmxhJkp7zTOCZet.png' },
      { name: 'Стиральные машины', imageSrc: 'https://olcha.uz/image/132x132/category/gTEdspBADkaKoLWlt6Tyc1XrGeJAiyfd8zwwP52GBOFDtAVnVtj4jDOwbCMz.png' },
    ],
  },
];

const BrandCard: React.FC<{ brand: Brand }> = ({ brand }) => (
const BrandCard: React.FC<{ brand: Brand }> = ({ brand }) => {
  const { t } = useTranslation();
  return (
  <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-6 flex flex-col h-full">
    <div className="flex justify-between items-center mb-6">
      <img src={brand.logoSrc} alt={brand.name} className="h-8 object-contain" />
      <a href="#" className="text-red-500 dark:text-red-400 text-sm font-semibold flex items-center group">
        <span>{t('brands.allProducts')}</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
        </svg>
      </a>
    </div>
    <div className="grid grid-cols-3 gap-4 flex-grow">
      {brand.categories.map((category, index) => (
        <a href="#" key={index} className="flex flex-col items-center text-center group">
          <div className="w-full h-28 bg-white dark:bg-gray-700 rounded-lg flex items-center justify-center p-2 mb-2 shadow-sm">
            <img src={category.imageSrc} alt={category.name} className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform" />
          </div>
          <p className="text-sm text-gray-800 dark:text-gray-300">{category.name}</p>
        </a>
      ))}
    </div>
  </div>
  );
};

const Brands: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="max-w-screen-2xl mx-auto px-4 py-6 bg-white dark:bg-black rounded-2xl">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-200">{t('titles.brands')}</h2>
        <a href="#" className="text-red-500 dark:text-red-400 font-semibold text-lg">{t('common.viewAll')}</a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {brandsData.map((brand, index) => (
          <BrandCard key={index} brand={brand} />
        ))}
      </div>
    </div>
  );
};

export default Brands;