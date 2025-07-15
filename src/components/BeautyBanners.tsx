import React from 'react';

const beautyBanners = [
  {
    src: 'https://olcha.uz/image/original/homePage/cdn_1/2025-05-05/nUDZ9Z8xNkqeRIoF5G7GJcNp1RCGed20fPi4UtvqIAHTbEvMz3HIc8gsWPbN.jpg',
    alt: 'Техника для красоты',
  },
  {
    src: 'https://olcha.uz/image/original/homePage/cdn_1/2025-05-05/FdLRgcAxuYjPaqFrSbQXfHe5v9SwGoEnkVGQbmq9XNQQ49OcgdlONmMjx6UY.jpg',
    alt: 'Косметика и парфюмерия',
  },
];

const BeautyBanners: React.FC = () => {
  return (
    <div className="max-w-screen-2xl mx-auto px-4 py-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {beautyBanners.map((banner) => (
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

export default BeautyBanners;