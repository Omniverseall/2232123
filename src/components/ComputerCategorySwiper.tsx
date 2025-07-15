import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import ChevronLeftIcon from './icons/ChevronLeftIcon';
import ChevronRightIcon from './icons/ChevronRightIcon';

interface ComputerCategory {
  name: string;
  imageSrc: string;
  key: string;
}

const ComputerCategorySwiper: React.FC = () => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(VISIBLE_ITEMS);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const computerCategories: ComputerCategory[] = [
  { name: t('computerCategories.laptops'), key: 'laptops', imageSrc: 'https://olcha.uz/image/132x132/category/Zzb97hGmwgC8EpGI3uVEwgdtvf4k9Wx404mtejcvF2qvbTSIA6HMben2CDJL.png' },
  { name: t('computerCategories.monitors'), key: 'monitors', imageSrc: 'https://olcha.uz/image/132x132/category/b9ndmxu7R1o0rNIfa66oTO5C8yGLz0rqSKPVIgsNOXf11pmxhJkp7zTOCZet.png' },
  { name: t('computerCategories.components'), key: 'components', imageSrc: 'https://olcha.uz/image/132x132/category/Iq6S7Cpq55aiyWLPqwZlQ2xUfoflhJEdZMA6134N6LNtL6vm1T5Gx0HK7zHD.png' },
  { name: t('computerCategories.office'), key: 'office', imageSrc: 'https://olcha.uz/image/132x132/category/rtlaqqb3RCtkWwTGNzGuP7XYTQKXEwlhYcOXjQnb2rv0l1pkM2KaJO6hYDrx.png' },
  { name: t('computerCategories.bags'), key: 'bags', imageSrc: 'https://olcha.uz/image/132x132/category/tyKzuzHsiwtcG0EOir6M99veVVAqq5e5Pl2XjzbcG6qTHmIHqkBn6QWrJFAs.png' },
  { name: t('computerCategories.network'), key: 'network', imageSrc: 'https://olcha.uz/image/132x132/category/ZwXYo5i5foFOx0KeoI1j7gWfkVZQmkcd0rvUYHg1022ZxDgIh2aDSGns2JZo.png' },
  { name: t('computerCategories.monoblock'), key: 'monoblock', imageSrc: 'https://olcha.uz/image/132x132/category/mO9VmUuKmuNeXQUfCW9Zj1XcVsYrt1NcZXrAKEcmZhvyw2RnLKcfnkuTRceb.png' },
];

const cardBackgroundUrl = 'https://olcha.uz/image/original/homePage/cdn_1/2024-07-25/6l61foS3NxuhczhSNmbSapAGKy2AwXpgfu1x1KaTmWUxBQqHar8rNLmzLPyW.jpg';

  const items = [...computerCategories.slice(-VISIBLE_ITEMS), ...computerCategories, ...computerCategories.slice(0, VISIBLE_ITEMS)];

  const handleTransitionEnd = () => {
    if (currentIndex <= VISIBLE_ITEMS - 1) {
      setIsTransitioning(false);
      setCurrentIndex(currentIndex + computerCategories.length);
    } else if (currentIndex >= computerCategories.length + VISIBLE_ITEMS) {
      setIsTransitioning(false);
      setCurrentIndex(currentIndex - computerCategories.length);
    }
  };

  useEffect(() => {
    if (!isTransitioning) {
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
    <div className="relative max-w-screen-2xl mx-auto px-4 py-8">
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
                className="w-full text-center cursor-pointer group rounded-2xl overflow-hidden p-4 flex flex-col justify-center items-center"
                style={{
                  backgroundImage: `url(${cardBackgroundUrl})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <img
                  src={category.imageSrc}
                  alt={category.name}
                  className="w-24 h-24 object-contain group-hover:scale-110 transition-transform mx-auto"
                />
                <p className="text-sm font-medium text-white mt-2 min-h-[40px] flex items-center justify-center text-center drop-shadow-lg">
                  {category.name}
                </p>
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

export default ComputerCategorySwiper;