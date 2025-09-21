
import React, { useState, useMemo } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { CategoryButton } from './components/CategoryButton';
import { ToolCard } from './components/ToolCard';
import { CATEGORIES } from './constants/tools';
import type { Category } from './types';

const App: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>(CATEGORIES[0].id);

  const activeTools = useMemo(() => {
    return CATEGORIES.find((cat: Category) => cat.id === activeCategory)?.tools || [];
  }, [activeCategory]);

  return (
    <div className="min-h-screen bg-slate-900 text-white selection:bg-teal-500 selection:text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Header />

        <main>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 my-8 sm:my-12">
            {CATEGORIES.map((category) => (
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
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default App;
