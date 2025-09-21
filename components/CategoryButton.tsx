
import React from 'react';
import type { Category } from '../types';

interface CategoryButtonProps {
  category: Category;
  isActive: boolean;
  onClick: () => void;
}

export const CategoryButton: React.FC<CategoryButtonProps> = ({ category, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`
        flex items-center gap-2 px-4 py-2 rounded-lg font-semibold border-2 
        transition-all duration-300 ease-in-out transform
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-teal-500
        ${
          isActive
            ? 'bg-teal-500 border-teal-500 text-white shadow-lg -translate-y-1'
            : 'bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700 hover:border-slate-600 hover:-translate-y-1'
        }
      `}
    >
      {category.icon}
      <span>{category.name}</span>
    </button>
  );
};
