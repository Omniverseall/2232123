import React from 'react';

const kitchenBanners = [
  {
    src: 'https://olcha.uz/image/original/homePage/cdn_1/2025-05-05/lV6aXsCgq0edskg4VTeBnrSvT8ijKkY6irAT1ZXOV4wo95PzbJWMIlVc1lZc.jpg',
    alt: 'Все необходимое для кухни',
  },
  {
    src: 'https://olcha.uz/image/original/homePage/cdn_1/2025-05-05/d7GyYd9dJSMSI3vyq8OFuDvdJVYYLt9H0xTA1bjgAQc7cVuUzxzq9usfxZbH.jpg',
    alt: 'Полный ассортимент для вашей кухни',
  },
];

const KitchenBanners: React.FC = () => {
  return (
    <div className="max-w-screen-2xl mx-auto px-4 py-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {kitchenBanners.map((banner) => (
          <a
            key={banner.alt}
            href="#"
            className="block rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={banner.src}
              alt={banner.alt}
              className="w-full h-full object-cover"
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default KitchenBanners;