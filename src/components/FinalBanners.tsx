import React from 'react';

const finalBanners = [
  {
    src: 'https://olcha.uz/image/original/homePage/cdn_1/2025-05-05/R7gIFg5XIw12ql41gqCuDBjyZ7NZ1ORoYbOetExI0d33ekDyqo0vhjJNE3zA.jpg',
    alt: 'Современные телевизоры',
  },
  {
    src: 'https://olcha.uz/image/original/homePage/cdn_1/2025-05-05/CRklYko2ryFy23dEkkyHjRGi882XCVQ1hhFmLPDUNb0lwx4j8qZOHXQhRhhw.jpg',
    alt: 'Наушники и акустика',
  },
];

const FinalBanners: React.FC = () => {
  return (
    <div className="max-w-screen-2xl mx-auto px-4 py-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {finalBanners.map((banner) => (
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

export default FinalBanners;