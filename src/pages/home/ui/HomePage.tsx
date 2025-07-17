import React from 'react';
import { Header } from '../../../widgets/header';
import { Footer } from '../../../widgets/footer';
import Hero from '../../../components/Hero';
import CategorySwiper from '../../../components/CategorySwiper';
import PromoBanners from '../../../components/PromoBanners';
import ProductGridExact from '../../../components/ProductGridExact';
import SeasonalDeals from '../../../components/SeasonalDeals';
import AutoPartsSwiper from '../../../components/AutoPartsSwiper';
import InstallmentDeals from '../../../components/InstallmentDeals';
import ProductGridExact0 from '../../../components/ProductGridExact0';
import PromoBanners0 from '../../../components/PromoBanners0';
import AffordableConvenience from '../../../components/AffordableConvenience';
import HouseholdAppliances from '../../../components/HouseholdAppliances';
import TechCategorySwiper from '../../../components/TechCategorySwiper';
import BeautyBanners from '../../../components/BeautyBanners';
import BeautyAndHealth from '../../../components/BeautyAndHealth';
import GamingAndComputers from '../../../components/GamingAndComputers';
import ComputerCategorySwiper from '../../../components/ComputerCategorySwiper';
import FinalBanners from '../../../components/FinalBanners';
import ProCameras from '../../../components/ProCameras';
import SportsGoods from '../../../components/SportsGoods';
import KitchenBanners from '../../../components/KitchenBanners';
import KukmaraSelection from '../../../components/KukmaraSelection';
import Brands from '../../../components/Brands';
import ToolsBanners from '../../../components/ToolsBanners';
import RepairTools from '../../../components/RepairTools';
import FeaturedProducts from '../../../components/FeaturedProducts';
import AppleTech from '../../../components/AppleTech';
import NewsSwiper from '../../../components/NewsSwiper';
import InfoText from '../../../components/InfoText';

const HomePage: React.FC = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen font-sans">
      <Header />

      <main className="mx-auto max-w-screen-2xl p-4 sm:p-6 lg:p-8 space-y-6">
        <Hero />
        <CategorySwiper />
        <PromoBanners />
        <ProductGridExact />
        <SeasonalDeals />
        <AutoPartsSwiper />
        <InstallmentDeals />
        <ProductGridExact0 />
        <PromoBanners0 />
        <AffordableConvenience />
        <HouseholdAppliances />
        <TechCategorySwiper />
        <BeautyBanners />
        <BeautyAndHealth />
        <GamingAndComputers />
        <ComputerCategorySwiper />
        <FinalBanners />
        <ProCameras />
        <SportsGoods />
        <KitchenBanners />
        <KukmaraSelection />
        <Brands />
        <ToolsBanners />
        <RepairTools />
        <FeaturedProducts />
        <AppleTech />
        <NewsSwiper />
        <InfoText />
      </main>
      
      <Footer />
    </div>
  );
};

export default HomePage;