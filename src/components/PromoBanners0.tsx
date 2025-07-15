import React from 'react';

const banners = [
  {
    src: 'https://olcha.uz/image/original/homePage/cdn_1/2025-05-05/3HXsKaCbzqktXwnVnmYyMSIKofg9poZU7eWLFEiyrVhUJBT5s7zOSVigU2Bi.jpg',
    alt: 'Кондиционеры',
  },
  {
    src: 'https://olcha.uz/image/original/homePage/cdn_1/2025-05-05/lbPZht6jDm2vA3sXN6ux6mdvbvHArxfwCqSpnpOc0n1WXoV2KeHxrkeqMdCC.jpg',
    alt: 'Кулеры воды',
  },
];

const PromoBanners0: React.FC = () => (
  // 1. Устанавливаю МАКСИМАЛЬНО возможную ширину в рамках вашего дизайна
  <div className="max-w-screen-2xl mx-auto px-4 py-6">
    {/* 2. Отступ между баннерами также можно увеличить для лучшего вида */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
      {banners.map((banner) => (
        <a
          key={banner.alt}
          href="#"
          className="block rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
        >
          <img
            src={banner.src}
            alt={banner.alt}
            className="w-full h-auto object-cover"
          />
        </a>
      ))}
    </div>
  </div>
);

export default PromoBanners0;