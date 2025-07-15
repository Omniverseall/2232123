// File: src/components/icons/HeartIcon.tsx
import React from 'react';

const HeartIcon: React.FC<{ className?: string }> = ({ className = "h-7 w-7 text-gray-800 dark:text-gray-300" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.5l1.318-1.182a4.5 4.5 0 116.364 6.364L12 21l-7.682-7.682a4.5 4.5 0 010-6.364z" />
  </svg>
);

export default HeartIcon;