import React, { useState, useEffect, useCallback } from 'react';
import ChevronLeftIcon from './icons/ChevronLeftIcon';
import ChevronRightIcon from './icons/ChevronRightIcon';
import ExpandIcon from './icons/ExpandIcon';
import SparklesIcon from './icons/SparklesIcon';

const slides = [

    { type: 'video', src: 'https://olcha.uz/image/original/sliders/ru/cdn_1/2025-07-04/c7uGdMfmGcpVxb68VjLsK7OxCHjfuMuZxa6uSYqKyeLaGBA1Fyr3xITwdUqF.mp4' },
    { type: 'image', src: 'https://olcha.uz/image/original/sliders/ru/cdn_1/2025-05-15/60YFHLbnb2xkZ2BBayyqKC9TltCje4OTRzQIm7hxJdy30XypcWSqr98RxpMV.jpg' },
    { type: 'image', src: 'https://olcha.uz/image/original/sliders/ru/cdn_1/2025-04-29/0IxdtGVlZtw4qs7p3cEqCl2RE5T3wVvLZrCUmo6RQjqs3TYfrc7aX7EQNqxI.png' },
    { type: 'image', src: 'https://olcha.uz/image/original/sliders/ru/cdn_1/2025-04-29/dmQ0YXk53kxDeBA8MXBt6CcE9YTcuNNmlZXKxnvyqxrDPTJsAOiPHGBmluyZ.jpg' },
    { type: 'image', src: 'https://olcha.uz/image/original/sliders/ru/cdn_1/2025-04-29/kRSA2V0RSzCkDUgIbPffvPLVNcwyjejgYXkVjZt4cG343LO8EabrYYVmaFd8.jpg' },
    { type: 'image', src: 'https://olcha.uz/image/original/sliders/ru/cdn_1/2025-05-15/ZHIohp2GUjfFTLWXJIe1BIZnHJjfIPUbnbuYOccVaUWxTvUlgGJILagkVyyT.jpg' },
];

const HeroSlider: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = useCallback(() => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }, [currentIndex]);

    const goToSlide = (slideIndex: number) => {
        setCurrentIndex(slideIndex);
    };

    useEffect(() => {
        const slideInterval = setInterval(goToNext, 5000);
        return () => clearInterval(slideInterval);
    }, [goToNext]);


    return (
        <div className="relative h-full w-full group">
            <div className="relative h-full overflow-hidden rounded-lg aspect-[2.3_/_1]">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute top-0 left-0 w-full h-full transition-opacity duration-700 ease-in-out ${index === currentIndex ? 'opacity-100 z-10' : 'opacity-0'}`}
                    >
                        {slide.type === 'video' ? (
                            <div className="relative w-full h-full">
                                <video className="w-full h-full object-cover" autoPlay muted loop playsInline>
                                    <source src={slide.src} type="video/mp4" />
                                </video>
                                <div className="absolute inset-0 bg-red-900/10 flex items-center justify-between p-8 md:p-12">
                                    <div className="absolute top-4 right-4 flex items-center space-x-2">
                                        <button className="bg-black/50 text-white rounded-md p-1.5 hover:bg-black/70 transition-colors">
                                            <ExpandIcon className="w-5 h-5" />
                                        </button>
                                        <button className="bg-[#405cff] text-white rounded-md p-1.5 hover:bg-blue-700 transition-colors">
                                            <SparklesIcon className="w-5 h-5" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <img src={slide.src} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
                        )}
                    </div>
                ))}
            </div>
            
            <div className="absolute z-20 top-1/2 -translate-y-1/2 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button onClick={goToPrevious} className="bg-white/80 rounded-full p-2 hover:bg-white shadow-md">
                    <ChevronLeftIcon className="h-6 w-6 text-gray-800" />
                </button>
            </div>
            <div className="absolute z-20 top-1/2 -translate-y-1/2 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button onClick={goToNext} className="bg-white/80 rounded-full p-2 hover:bg-white shadow-md">
                    <ChevronRightIcon className="h-6 w-6 text-gray-800" />
                </button>
            </div>

            <div className="absolute z-20 bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-2.5 h-2.5 rounded-full transition-colors ${currentIndex === index ? 'bg-red-500' : 'bg-gray-300/80 hover:bg-gray-200'}`}
                        aria-label={`Go to slide ${index + 1}`}
                    ></button>
                ))}
            </div>
        </div>
    );
};

export default HeroSlider;