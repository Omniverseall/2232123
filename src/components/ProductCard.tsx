import React from 'react';
import { useTranslation } from 'react-i18next';
import HeartIcon from './icons/HeartIcon';
import ChartBarIcon from './icons/ChartBarIcon';
import ShoppingCartIcon from './icons/ShoppingCartIcon';

export interface Product {
  title: string;
  imageSrc: string;
  price: string;
  installment: string;
  oldPrice?: string;
  discount?: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { t } = useTranslation();
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden flex flex-col group border border-transparent hover:border-gray-200 dark:hover:border-gray-700 hover:shadow-xl transition-all duration-300 h-full">
      <div className="relative bg-gray-50 dark:bg-gray-700 h-56 overflow-hidden">
        <img 
          src={product.imageSrc} 
          alt={product.title} 
          className="h-full w-full object-contain group-hover:scale-105 transition-transform duration-300"
        />
        {product.discount && (
          <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
            {product.discount}
          </div>
        )}
        <div className="absolute top-2 right-2 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="bg-white dark:bg-gray-800 p-2 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-700">
            <HeartIcon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
          </button>
          <button className="bg-white dark:bg-gray-800 p-2 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-700">
            <ChartBarIcon />
          </button>
        </div>
      </div>
      
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-gray-800 dark:text-gray-200 text-sm font-medium flex-grow min-h-[40px]">{product.title}</h3>
        
        <div className="mt-2">
          <div className="text-lg font-bold text-black dark:text-white">{product.price}</div>
          <div className="min-h-[22px]"> 
            {product.oldPrice && (
              <div className="text-sm text-gray-500 dark:text-gray-400 line-through">{product.oldPrice}</div>
            )}
          </div>
        </div>

        <div className="mt-2">
          <span className="bg-yellow-200 text-gray-800 text-xs font-semibold px-3 py-1 rounded-md">
            {product.installment}
          </span>
        </div>
      </div>
      
      <div className="p-4 pt-0 flex items-center space-x-2">
        <button className="p-2 border-2 border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
          <ShoppingCartIcon className="w-6 h-6 text-black dark:text-white" />
        </button>
        <button className="flex-1 text-center font-bold text-red-600 border-2 border-red-600 rounded-lg py-2 text-sm hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors">
          {t('productCard.buyInInstallments')}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;