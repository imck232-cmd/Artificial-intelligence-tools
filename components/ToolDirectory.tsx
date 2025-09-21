import React, { useState, useMemo, useEffect } from 'react';
import { CategoryButton } from './CategoryButton';
import { ToolCard } from './ToolCard';
import type { Category } from '../types';

interface ToolDirectoryProps {
  categories: Category[];
}

export const ToolDirectory: React.FC<ToolDirectoryProps> = ({ categories }) => {
  const [activeCategory, setActiveCategory] = useState<string>(categories[0]?.id ?? '');

  useEffect(() => {
    // Reset active category when the set of categories changes
    if (categories.length > 0) {
      setActiveCategory(categories[0].id);
    }
  }, [categories]);

  const activeTools = useMemo(() => {
    return categories.find((cat: Category) => cat.id === activeCategory)?.tools || [];
  }, [activeCategory, categories]);

  if (!categories || categories.length === 0) {
    return <p className="text-center text-slate-400">لا توجد أدوات لعرضها.</p>;
  }

  return (
    <>
      <div className="flex flex-wrap justify-center gap-2 sm:gap-4 my-8 sm:my-12">
        {categories.map((category) => (
          <CategoryButton
            key={category.id}
            category={category}
            isActive={activeCategory === category.id}
            onClick={() => setActiveCategory(category.id)}
          />
        ))}
      </div>

      <div
        key={activeCategory}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 animate-fade-in"
      >
        {activeTools.map((tool, index) => (
          <ToolCard key={`${activeCategory}-${index}`} tool={tool} />
        ))}
      </div>
    </>
  );
};
