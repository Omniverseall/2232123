import React from 'react';

const banners = [
  {
    src: 'https://olcha.uz/image/460x152/homePage/cdn_1/2025-05-12/LoJ8ZOFNjvMLx6pdFBxYgNf8QxRDaymfh7Woi0rZZdR51dK4i308M2jSCeO3.png',
    alt: 'Кондиционеры',
  },
  {
    src: 'https://olcha.uz/image/460x152/homePage/cdn_1/2025-05-12/rofcFSbXd8yOMeXpJCGx5ZM6RLAUL9lgeB3KiTsX9WxTXxwfFqeQneqF8REK.jpg',
    alt: 'Кулеры воды',
  },
  {
    src: 'https://olcha.uz/image/460x152/homePage/cdn_1/2025-05-12/oOb15kfOj8vaY9pDvQ0RdJZ8umoCIgdMD7pSHRQ55NHd9NEXRo0lXhDomqnt.png',
    alt: 'Генераторы',
  },
];

const PromoBanners: React.FC = () => (
  <div className="max-w-screen-2xl mx-auto px-4 py-6">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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

export default PromoBanners;