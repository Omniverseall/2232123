import React from 'react';
import ProductOfTheDay from './ProductOfTheDay';
import HeroSlider from './HeroSlider';

const Hero: React.FC = () => {
    return (
        <div className="flex flex-col md:flex-row items-stretch gap-6">
            <div className="w-full md:flex-grow">
                <HeroSlider />
            </div>
            <div className="w-full md:w-auto md:max-w-xs lg:max-w-sm flex-shrink-0">
                <ProductOfTheDay />
            </div>
        </div>
    );
}

export default Hero;