import React from 'react';
import { HeartIcon } from './icon'; 

const ChartBarSimpleIcon = () => (
    <svg className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6m3 6V9m3 6V5" />
    </svg>
);

interface DealProduct {
  title: string;
  imageSrc: string;
  price: string;
  installment: string;
  discount?: string;
}

const dealColumns: (DealProduct | DealProduct[])[] = [
    [ 
        {
            title: 'Tecno SPARK 30C Whit 6/128 GB',
            imageSrc: 'https://olcha.uz/image/220x220/products/cdn_1/supplier/stores/1/2024-12-03/TJDEb7hAOAAYXoX60FG5fABLp4BJcq9RmG7MNoM6EStrGsUVLvaoa2EZUuc5.jpg',
            price: '2 698 040 сум',
            installment: '317 000 сум x 12 мес',
            discount: '-1%',
        },
        {
            title: 'Tecno SPARK 30C Blac 6/128 GB',
            imageSrc: 'https://olcha.uz/image/220x220/products/cdn_1/supplier/stores/1/2025-04-28/I6wUzUXiVkVpMwlz3xvTd4zQmLKQ8DRwykCKDzF9ZeRImnc7mAXUMPMKH85q.jpg',
            price: '2 698 040 сум',
            installment: '317 000 сум x 12 мес',
            discount: '-1%',
        }
    ],
    {
        title: 'Tecno SPARK 30C White 8/256 GB',
        imageSrc: 'https://olcha.uz/image/220x220/products/cdn_1/supplier/stores/1/2024-12-03/bMRDlk9YH1oMbqP70m9DDCGeRkJc9mLdnqUj95Xk7luFFEvV55IFPpFjIu0e.jpg',
        price: '1 918 800 сум',
        installment: '225 000 сум x 12 мес',
        discount: '-1%',
    },
    {
        title: 'Tecno SPARK 30C Black 8/256 GB',
        imageSrc: 'https://olcha.uz/image/220x220/products/cdn_1/supplier/stores/1/2024-11-08/RvYGFf9pzNl8D0B9ZRpkDsh7eQkO0XM6AIgQNBS5LwYsPGPCa4aLtqPtUD1C.jpg',
        price: '1 939 290 сум',
        installment: '228 000 сум x 12 мес',
        discount: '-1%',
    },
    {
        title: 'Tecno SPARK 30C',
        imageSrc: 'https://olcha.uz/image/220x220/products/cdn_1/supplier/stores/1/2024-11-08/LbftC2LozzlHUb0ZoqutUUXeGzmM3Obt5328lxZ104nyas3eAv72Yu6FdWaw.jpg',
        price: '1 918 800 сум',
        installment: '225 000 сум x 12 мес',
        discount: '-1%',
    },
    {
        title: 'Tecno GO 1 White 4/64 GB',
        imageSrc: 'https://olcha.uz/image/220x220/products/cdn_1/supplier/stores/1/2025-02-20/kAC5QTxZ4Nk2z1sYj8Qx5XeB72gk15YqWtWDzQyXQ0gPs1VF4hgqK8e4hKz7.jpg',
        price: '1 349 900 сум',
        installment: '159 000 сум x 12 мес',
        discount: '-1%',
    },
];

const SingleProductCard: React.FC<{ product: DealProduct }> = ({ product }) => (
    <div className="bg-white rounded-xl flex flex-col h-full relative p-3 group">
        <div className="absolute top-2 right-2 flex flex-col items-center space-y-2 z-10">
            <button className="hover:text-red-500 transition-colors"><HeartIcon className="w-6 h-6 text-gray-400" /></button>
            <button><ChartBarSimpleIcon /></button>
        </div>
        {product.discount && (
            <span className="absolute top-2 left-2 bg-red-100 text-red-500 text-xs font-bold px-2 py-1 rounded">{product.discount}</span>
        )}
        <div className="flex-shrink-0 h-48 flex items-center justify-center my-4">
            <img src={product.imageSrc} alt={product.title} className="max-h-full max-w-full object-contain" />
        </div>
        <div className="flex flex-col flex-grow mt-auto">
            <p className="text-sm min-h-[40px]">{product.title}</p>
            <p className="text-lg font-bold my-2">{product.price}</p>
            <span className="bg-yellow-100 text-gray-800 text-xs font-semibold px-3 py-1.5 rounded-md self-start">
                {product.installment}
            </span>
        </div>
        <div className="mt-4 flex items-center space-x-2">
            <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors">
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
            </button>
            <button className="flex-1 text-center font-semibold text-sm text-red-600 border border-red-600 rounded-lg py-2.5 hover:bg-red-50 transition-colors">
                В рассрочку
            </button>
        </div>
    </div>
);

const SplitProductCard: React.FC<{ products: DealProduct[] }> = ({ products }) => (
    <div className="bg-white rounded-xl flex flex-col h-full">
        {products.map((product, index) => (
            <div key={index} className={`relative p-3 flex-1 flex flex-col justify-center group ${index === 0 ? 'border-b border-gray-200' : ''}`}>
                <div className="absolute top-2 right-2 flex flex-col items-center space-y-2 z-10">
                   <button className="hover:text-red-500 transition-colors"><HeartIcon className="w-6 h-6 text-gray-400" /></button>
                   <button><ChartBarSimpleIcon /></button>
                </div>
                {product.discount && (
                    <span className="absolute top-2 left-2 bg-red-100 text-red-500 text-xs font-bold px-2 py-1 rounded">{product.discount}</span>
                )}
                <div className="flex items-center">
                    <div className="w-24 h-24 flex-shrink-0 flex items-center justify-center">
                         <img src={product.imageSrc} alt={product.title} className="max-h-full max-w-full object-contain" />
                    </div>
                    <div className="flex flex-col ml-3">
                         <p className="text-sm">{product.title}</p>
                         <p className="text-base font-bold my-1">{product.price}</p>
                         <span className="bg-yellow-100 text-gray-800 text-xs font-semibold px-2 py-1 rounded-md self-start">
                            {product.installment}
                         </span>
                    </div>
                </div>
            </div>
        ))}
    </div>
);


const InstallmentDeals: React.FC = () => {
  return (
    <div className="max-w-screen-2xl mx-auto px-4 py-6">
        <div className="mb-4">
            <img src="https://i.ibb.co/4Z5tTYf0/2025-07-13-182125196.png" alt="Рассрочка" className="w-full rounded-xl" />
        </div>
        <div className="bg-red-500 rounded-2xl p-4">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {dealColumns.map((column, index) => (
                    <div 
                        key={index} 
                        className={Array.isArray(column) ? 'md:col-span-3 lg:col-span-2' : 'md:col-span-1'}
                    >
                        {Array.isArray(column) ? (
                            <SplitProductCard products={column} />
                        ) : (
                            <SingleProductCard product={column} />
                        )}
                    </div>
                ))}
            </div>
        </div>
    </div>
  );
};

export default InstallmentDeals;