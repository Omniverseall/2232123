import React from 'react';
import ProductCard from './ProductCard';
import type { Product } from './ProductCard';

const productDeals: Product[] = [
  {
    title: 'Аккумуляторы Delkor 60 Ah',
    imageSrc: 'https://olcha.uz/image/266x355/products/cdn_1/supplier/stores/1/2025-02-26/ZuWzlSxj6b5Ja4qqV5X1FwIGLLZUdcqSlW9OAvXYOp0KTeP6kGlixI5tZFsL.jpg',
    price: '888 860 сум',
    oldPrice: '907 000 сум',
    installment: '105 000 сум x 12 мес',
    discount: '-2%',
  },
  {
    title: 'Автомагнитола Pioneer FH-S725BT',
    imageSrc: 'https://olcha.uz/image/266x355/products/cdn_1/supplier/stores/1/2025-02-26/lA9Il57jhMKdH1TbTRCuZ1XOzU1aUuLseGev3wIRs00OiWsnqV43jG0pCguU.jpg',
    price: '1 680 000 сум',
    oldPrice: '',
    installment: '197 000 сум x 12 мес',
    discount: '',
  },
  {
    title: 'Радар детектор Inspector Star Air',
    imageSrc: 'https://olcha.uz/image/220x220/products/cdn_1/supplier/stores/1/2025-07-07/6BbzlC3vRAlX25Z10j3IK9R1egNtG61Um3xO5m4snkM3L3XF5jYPyKuuuyqf.jpg',
    price: '2 535 000 сум',
    oldPrice: '2 935 000 сум',
    installment: '297 000 сум x 12 мес',
    discount: '-14%',
  },
  {
    title: 'Автосигнализация Magicar Dominant 909',
    imageSrc: 'https://olcha.uz/image/266x355/products/cdn_1/supplier/stores/1/2024-12-23/DkF1egwAT2HZhYTgnviTJsuIWSXcz3h5rVngXoO4upSOTJbkLRmuuSXOCovS.png',
    price: '2 864 000 сум',
    oldPrice: '4 050 000 сум',
    installment: '336 000 сум x 12 мес',
    discount: '-30%',
  },
  {
    title: 'Радар-детектор Neoline X-COP 8800s',
    imageSrc: 'https://olcha.uz/image/266x355/products/cdn_1/supplier/stores/1/2025-02-26/9GixDqSvMzkVbc1G5qmekNtUVCpJmVAf83pXMl6DfLVB3FOSPDpCvnOYqgsC.jpg',
    price: '2 560 000 сум',
    oldPrice: '3 512 000 сум',
    installment: '300 000 сум x 12 мес',
    discount: '-28%',
  },
];

const bannerImage = 'https://olcha.uz/image/272x444/homePage/cdn_1/2024-10-21/wadKwaxWqEHoDPMPlEmtTEcVmjwJJki4cSONiQ0HaGWArHHe0vt1W4tZ7CAt.jpg';

const SeasonalDeals: React.FC = () => {
  return (
    <div className="max-w-screen-2xl mx-auto px-4 py-6">
      <div className="flex flex-wrap lg:flex-nowrap gap-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 w-full">
          {productDeals.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
        <div className="hidden lg:block flex-shrink-0">
          <a href="#" className="block rounded-lg overflow-hidden h-full">
            <img src={bannerImage} alt="Сезонные скидки" className="h-full w-auto object-cover" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SeasonalDeals;