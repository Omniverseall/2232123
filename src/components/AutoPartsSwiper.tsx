import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import ChevronLeftIcon from './icons/ChevronLeftIcon';
import ChevronRightIcon from './icons/ChevronRightIcon';

const VISIBLE_ITEMS = 5;

interface AutoCategory {
  name: string;
  imageSrc: string;
  key: string;
}

const AutoPartsSwiper: React.FC = () => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(VISIBLE_ITEMS);
  const [isTransitioning, setIsTransitioning] = useState(true);
  
  const autoCategories: AutoCategory[] = [
  {
    name: t('autoCategories.bodyParts'),
    key: 'bodyParts',
    imageSrc: 'https://olcha.uz/image/132x132/category/RbDum1lvs5E2ucgiNJdRckok7T0fSd4sQAT3EX0lMyvwaujhPgpnOSdUAor8.',
  },
  {
    name: t('autoCategories.otherParts'),
    key: 'otherParts',
    imageSrc: 'https://olcha.uz/image/132x132/category/ogqZFCBIX10HjQotve3SYHcOs2HYueDelpayni403zGwqsmuXUo88oRFysWa.',
  },
  {
    name: t('autoCategories.audio'),
    key: 'audio',
    imageSrc: 'https://olcha.uz/image/132x132/category/MSUrr0Epa7dmBKl0xNpJPljxAZf14SPU6j2erlQKRefsQ1lRjmsdJ8D5x4zw.png',
  },
  {
    name: t('autoCategories.videoRadar'),
    key: 'videoRadar',
    imageSrc: 'https://olcha.uz/image/132x132/category/d4d6t7a1qSh6fBEToCRfVQY5O3w3mMxiChSDsbVALBxjxXGVeDo3qKG10Npi.png',
  },
  {
    name: t('autoCategories.accessories'),
    key: 'accessories',
    imageSrc: 'https://olcha.uz/image/132x132/category/VasWe4boWvAg1agTYMzm9oh5SwRyrYcO8PMjks2Tl7n4RhICTS8eoWzm8yVI.png',
  },
  {
    name: t('autoCategories.washers'),
    key: 'washers',
    imageSrc: 'https://olcha.uz/image/132x132/category/jsUPuEA9IHAEvkuJAwNGHjYkeVa2yJa6eQWK7EcDIdQMInif8HjQvQ8YlI36.png',
  },
  {
    name: t('autoCategories.steering'),
    key: 'steering',
    imageSrc: 'https://olcha.uz/image/132x132/category/1T79CVFM1tfWRjatnqv7RsWiFzFhvAeMEhbMZjc1bNceJR7ara6LAMBrjDb5.png',
  },
];

const cardBackgroundUrl = 'https://olcha.uz/image/original/homePage/cdn_1/2024-10-21/s20iyffyDK2Dt6sKtfErj84SSYDBi2JiKX2iiHgQG54uHslc0WVde552XUAj.jpg';
  
  const items = [...autoCategories.slice(-VISIBLE_ITEMS), ...autoCategories, ...autoCategories.slice(0, VISIBLE_ITEMS)];

  const handleTransitionEnd = () => {
    if (currentIndex <= VISIBLE_ITEMS -1) {
      setIsTransitioning(false);
      setCurrentIndex(currentIndex + autoCategories.length);
    } else if (currentIndex >= autoCategories.length + VISIBLE_ITEMS) {
      setIsTransitioning(false);
      setCurrentIndex(currentIndex - autoCategories.length);
    }
  };

  useEffect(() => {
    if (!isTransitioning) {
        // Даем браузеру отрисовать "прыжок" и сразу включаем анимацию обратно
        requestAnimationFrame(() => setIsTransitioning(true));
    }
  }, [isTransitioning]);

  const changeSlide = (direction: number) => {
    if (!isTransitioning) return;
    setCurrentIndex(prev => prev + direction);
  };
  
  const prevSlide = () => changeSlide(-1);
  const nextSlide = () => changeSlide(1);

  return (
    <div className="relative max-w-screen-2xl mx-auto px-4 py-6">
       <div className="overflow-hidden relative">
            <div
                className="flex"
                style={{
                    transform: `translateX(-${currentIndex * (100 / VISIBLE_ITEMS)}%)`,
                    transition: isTransitioning ? 'transform 0.4s ease-in-out' : 'none',
                }}
                onTransitionEnd={handleTransitionEnd}
            >
                {items.map((category, index) => (
                    <div key={index} style={{ flex: `0 0 ${100 / VISIBLE_ITEMS}%` }} className="px-2">
                        <div
                            className="w-full h-48 text-center cursor-pointer group rounded-2xl overflow-hidden relative"
                            style={{
                            backgroundImage: `url(${cardBackgroundUrl})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            }}
                        >
                            <div className="w-full h-full flex flex-col justify-center items-center p-4 bg-gradient-to-t from-black/40 to-transparent transition-all hover:from-black/60">
                                <img
                                    src={category.imageSrc}
                                    alt={category.name}
                                    className="w-24 h-24 object-contain group-hover:scale-110 transition-transform"
                                />
                                <p className="text-sm font-semibold text-white mt-2 drop-shadow-md">{category.name}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
       </div>

      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur-sm shadow-lg rounded-full p-2 hover:bg-white transition-all"
      >
        <ChevronLeftIcon className="w-6 h-6 text-gray-700" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur-sm shadow-lg rounded-full p-2 hover:bg-white transition-all"
      >
        <ChevronRightIcon className="w-6 h-6 text-gray-700" />
      </button>
    </div>
  );
};

export default AutoPartsSwiper;