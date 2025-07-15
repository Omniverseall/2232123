import React, { useState, useEffect } from 'react';
import ChevronLeftIcon from './icons/ChevronLeftIcon';
import ChevronRightIcon from './icons/ChevronRightIcon';

interface TechCategory {
  name: string;
  imageSrc: string;
}

const techCategories: TechCategory[] = [
  { name: 'Телевизоры, фото-видео и аудио', imageSrc: 'https://olcha.uz/image/132x132/category/cdn_1/2024-08-21/oiPUxRUwlWSVgj1FU7pvax6ett2xvxiL1EBwKPZVR4gVID7tK8l2eI1d1LZk.png' },
  { name: 'Ноутбуки, принтеры,', imageSrc: 'https://olcha.uz/image/132x132/category/LMk7YuQAzKqsUIBDfr4jRA2IEFsLPsyFkWAWFHYkwlQZ8WRVvWut5Heb8Dju.png' },
  { name: 'Смартфоны, телефоны, гаджеты,', imageSrc: 'https://olcha.uz/image/132x132/category/M90cCGAT8ARmlnxJzt5sH4cTD4eBUjWocRW36j69zghIlMA6leRkjL9mvoBr.png' },
  { name: 'Бытовая техника', imageSrc: 'https://olcha.uz/image/132x132/category/gTEdspBADkaKoLWlt6Tyc1XrGeJAiyfd8zwwP52GBOFDtAVnVtj4jDOwbCMz.png' },
  { name: 'Все для кухни', imageSrc: 'https://olcha.uz/image/132x132/category/3OqvliYxYnrZoZKX7ZSuIyAPCC3C4lp11u45G04T8RbYWan6GDrMBB0gwre1.png' },
  { name: 'Спорт товары', imageSrc: 'https://olcha.uz/image/132x132/category/opA1z5cMyRtEZW6Oa02AXZnH0l74jiTNDA10QXTKZXS8fsoYNuPAmjID5xUT.png' },
  { name: 'Красота и здоровье', imageSrc: 'https://olcha.uz/image/132x132/category/v35JbK5fmf34Hl86Leu5QundGiGyP4BmhQ8olwbUdtUFZms0JWA5pp46yBSp.png' },
];

const cardBackgroundUrl = 'https://olcha.uz/image/original/homePage/cdn_1/2024-07-25/6l61foS3NxuhczhSNmbSapAGKy2AwXpgfu1x1KaTmWUxBQqHar8rNLmzLPyW.jpg';
const VISIBLE_ITEMS = 7;

const TechCategorySwiper: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(VISIBLE_ITEMS);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const items = [...techCategories.slice(-VISIBLE_ITEMS), ...techCategories, ...techCategories.slice(0, VISIBLE_ITEMS)];

  const handleTransitionEnd = () => {
    if (currentIndex <= VISIBLE_ITEMS - 1) {
      setIsTransitioning(false);
      setCurrentIndex(currentIndex + techCategories.length);
    } else if (currentIndex >= techCategories.length + VISIBLE_ITEMS) {
      setIsTransitioning(false);
      setCurrentIndex(currentIndex - techCategories.length);
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
                <p className="text-sm font-medium text-white mt-2 min-h-[40px] flex items-center justify-center drop-shadow-md">
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

export default TechCategorySwiper;