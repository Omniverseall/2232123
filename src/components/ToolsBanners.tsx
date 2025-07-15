import React from 'react';

const toolsBanners = [
  {
    src: 'https://olcha.uz/image/original/homePage/cdn_1/2024-12-07/3fwgUZL7JEHw0BSHErw1L2OcVL47vSQGkNtojvoMasCTNNsMMtnrYYsSdzHL.png',
    alt: 'Инструменты для ремонта',
  },
  {
    src: 'https://olcha.uz/image/original/homePage/cdn_1/2024-12-07/e2qBeXA0qsulwhHVHUSAHB6Q6gmEPixodtaEavNyzUXRc0vaacP8AbyT8zmR.png',
    alt: 'Набор инструментов',
  },
];

const ToolsBanners: React.FC = () => {
  return (
    <div className="max-w-screen-2xl mx-auto px-4 py-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {toolsBanners.map((banner) => (
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

export default ToolsBanners;