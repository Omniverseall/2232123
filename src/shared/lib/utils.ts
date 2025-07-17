import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatPrice = (price: string): string => {
  return price.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
};

export const formatInstallment = (installment: string): string => {
  return installment;
};