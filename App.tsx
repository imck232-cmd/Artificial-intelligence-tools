import React from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ToolDirectory } from './components/ToolDirectory';
import { AdvancedView } from './components/AdvancedView';
import { CATEGORIES, CATEGORIES_STAGE_2 } from './constants/tools';
import { BackIcon } from './components/icons';

const App: React.FC = () => {
  const [view, setView] = React.useState<'landing' | 'stage1' | 'stage2' | 'advanced'>('landing');

  const renderLanding = () => (
    <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-6 mt-16 animate-fade-in">
      <button
        onClick={() => setView('stage1')}
        className="w-64 text-lg bg-teal-500 hover:bg-teal-600 text-white font-bold py-4 px-6 rounded-xl transition-transform transform hover:scale-105 shadow-lg"
      >
        الأدوات في المرحلة الأولى
      </button>
      <button
        onClick={() => setView('stage2')}
        className="w-64 text-lg bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-4 px-6 rounded-xl transition-transform transform hover:scale-105 shadow-lg"
      >
        الأدوات في المرحلة الثانية
      </button>
      <button
        onClick={() => setView('advanced')}
        className="w-64 text-lg bg-slate-700 hover:bg-slate-600 text-white font-bold py-4 px-6 rounded-xl transition-transform transform hover:scale-105 shadow-lg"
      >
        المرحلة المتقدمة المفصلة
      </button>
    </div>
  );
  
  const renderContent = () => {
    switch (view) {
      case 'stage1':
        return <ToolDirectory categories={CATEGORIES} />;
      case 'stage2':
        return <ToolDirectory categories={CATEGORIES_STAGE_2} />;
      case 'advanced':
        return <AdvancedView />;
      case 'landing':
      default:
        return renderLanding();
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white selection:bg-teal-500 selection:text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Header />

        <main>
          {view !== 'landing' && (
            <button
              onClick={() => setView('landing')}
              className="flex items-center gap-2 px-4 py-2 rounded-lg font-semibold border-2 
                         bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700 
                         transition-all duration-300 ease-in-out transform hover:-translate-y-1 mb-8"
              aria-label="العودة إلى القائمة الرئيسية"
            >
              <BackIcon />
              <span>العودة</span>
            </button>
          )}
          {renderContent()}
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default App;
