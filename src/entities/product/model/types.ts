export interface Product {
  id?: string;
  title: string;
  imageSrc: string;
  price: string;
  installment: string;
  oldPrice?: string;
  discount?: string;
}

export interface ProductFilters {
  category?: string;
  brand?: string;
  priceRange?: [number, number];
  inStock?: boolean;
}