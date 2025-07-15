import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import ChevronLeftIcon from './icons/ChevronLeftIcon';
import ChevronRightIcon from './icons/ChevronRightIcon';

interface Category {
  name: string;
  image: string;
  key: string;
}

const CategorySwiper: React.FC = () => {
  const { t } = useTranslation();
  const scrollRef = useRef<HTMLDivElement>(null);

  const categories: Category[] = [
  {
    name: t('categories.tvAudioVideo'),
    key: "tvAudioVideo",
    image: "https://olcha.uz/image/128x128/category/cdn_1/2024-05-28/B1NA6mAiwsmrVapt6VbrdvPPIllRV2EnjtNEuUvSPhHoZ2beOWGv616dhaKj.png"
  },
  {
    name: t('categories.smartphones'),
    key: "smartphones",
    image: "https://olcha.uz/image/128x128/category/cdn_1/2024-05-28/K83YTs4SqPeI3Ohx1lN0bDnbiV1Z9EnwZHMr2HsjIlDhmT48cBgn4C0Ve9Br.png"
  },
  {
    name: t('categories.kitchen'),
    key: "kitchen",
    image: "https://olcha.uz/image/128x128/category/cdn_1/2024-05-28/eCJj0q3ixqzqS3xvZhnMSQnYC1SLTnLB475I5l5ltz6rxi9rUmYauATe5Pa6.png"
  },
  {
    name: t('categories.beautyHealth'),
    key: "beautyHealth",
    image: "https://olcha.uz/image/128x128/category/cdn_1/2024-05-28/Lio8FefcAG352o0hPeqHDkd7TVlr2NQ4ljQAQziRlTjWOz08RiB1fncFbe2D.png"
  },
  {
    name: t('categories.officeHomeGarden'),
    key: "officeHomeGarden",
    image: "https://olcha.uz/image/128x128/category/cdn_1/2024-05-28/ZiWkDeTfCnCNHDWZnu0xXtxwkZ6Qe3embHveXzJVRXfdnaJB5sRsnJiU22vS.png"
  },
  {
    name: t('categories.furniture'),
    key: "furniture",
    image: "https://olcha.uz/image/128x128/category/cdn_1/2024-05-28/adqzcIrhpWBLdv7My9MHp7DblhCNpQg2KkpsoeRQZdvKe5OR01jO2oXkKgcn.png"
  },
  {
    name: t('categories.repairConstruction'),
    key: "repairConstruction",
    image: "https://olcha.uz/image/128x128/category/cdn_1/2024-05-28/ioFNdT48mMJa0ARcbtJXbnLZN8CUB9x09SFDzFv06MJXreLROUEhytRsKavH.png"
  },
  {
    name: t('categories.gifts'),
    key: "gifts",
    image: "https://olcha.uz/image/128x128/category/cdn_1/2024-05-28/cBKUy2UyHjgTu7n0E4ZEtbo1Priwsl5oynQrRtxl6MixwxwknCUbTfyDJiKx.png"
  },
  {
    name: t('categories.laptopsComputers'),
    key: "laptopsComputers",
    image: "https://olcha.uz/image/128x128/category/cdn_1/2024-05-28/n4H7uKvN0pFwsYXSs66rsdUdHxGiRCWn8JVt9O0Qt1ecNl1fOEDJ7j0BHj81.png"
  },
  {
    name: t('categories.appliances'),
    key: "appliances",
    image: "https://olcha.uz/image/128x128/category/cdn_1/2024-05-28/yfGs0HUuX5wKnXwPbOyEswpZFzzGhmHdpptTriBTKm01HUxMqTBEg1QA2CQr.png"
  },
  {
    name: t('categories.sports'),
    key: "sports",
    image: "https://olcha.uz/image/128x128/category/cdn_1/2024-05-28/D1UNIE2gMBYHkx9XQl452O6I2jtQOpD4kvhOWQCtr9fuPliQWVSAkN9YXjiQ.png"
  },
  {
    name: t('categories.auto'),
    key: "auto",
    image: "https://olcha.uz/image/128x128/category/cdn_1/2024-05-28/xrGNIS4zILNfb5qMXC0nvDLo09QuwdrdXYEKqn7UOEI9PndrjYR1BNX6CQbA.png"
  },
  {
    name: t('categories.toys'),
    key: "toys",
    image: "https://olcha.uz/image/128x128/category/cdn_1/2024-05-28/e6S4NLdIceYAv1zDvwHPVHFWSEMMgUxMwbOjThhsguSxVUKTY6yKbXvwOJ6M.png"
  },
  {
    name: t('categories.gaming'),
    key: "gaming",
    image: "https://olcha.uz/image/128x128/category/cdn_1/2024-05-28/H36mM5MMLXtOjeOWB3Qm4FVp2ePbeijqE7VciIfLRsU5E4AAoPmf9avFASAg.png"
  },
  {
    name: t('categories.transport'),
    key: "transport",
    image: "https://olcha.uz/image/128x128/category/cdn_1/2024-05-28/ffn8LREBuqMNdbVFBdddB9BtV9eUM3IygL94CozDRxgwgjQiAyzfPtyWWkQe.png"
  },
  {
    name: t('categories.olchaOffer'),
    key: "olchaOffer",
    image: "https://olcha.uz/image/128x128/category/cdn_1/2025-07-05/fGTapfZMA233dXa0tw6Xv0ZljhH33B2BJS35JCMtoNr2txOwAlPrE9nPqfMq.png"
  }
];


  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative py-6">
      <div className="max-w-screen-2xl mx-auto px-4">
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 hover:bg-gray-100 transition-colors"
        >
          <ChevronLeftIcon className="w-6 h-6" />
        </button>
        
        <button
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 hover:bg-gray-100 transition-colors"
        >
          <ChevronRightIcon className="w-6 h-6" />
        </button>

        <div
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto scrollbar-hide px-12"
        >
          {categories.map((category) => (
            <div
              key={category.name}
              className="flex-shrink-0 w-40 text-center cursor-pointer hover:scale-105 transition-transform group"
            >
              <div className="w-32 h-32 mx-auto mb-3 group-hover:shadow-lg rounded-lg transition-shadow">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="text-sm font-medium text-gray-800">{category.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategorySwiper;