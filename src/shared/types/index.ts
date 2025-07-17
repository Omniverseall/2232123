export interface Product {
  id?: string;
  title: string;
  imageSrc: string;
  price: string;
  installment: string;
  oldPrice?: string;
  discount?: string;
}

export interface Category {
  id: string;
  name: string;
  image: string;
  key: string;
}

export interface Brand {
  id: string;
  name: string;
  logoSrc: string;
  categories: BrandCategory[];
}

export interface BrandCategory {
  id: string;
  name: string;
  imageSrc: string;
}

export interface User {
  id: string;
  email: string;
}

export interface NewsArticle {
  id: string;
  date: string;
  views: number;
  title: string;
  excerpt: string;
  imageSrc: string;
}

export type Theme = 'light' | 'dark' | 'system';
export type Language = 'ru' | 'uz';