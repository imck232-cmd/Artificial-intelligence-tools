
import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="text-center py-8">
      <h1 className="text-4xl sm:text-5xl font-bold text-teal-400 tracking-wide">
        رفيقك في أدوات الذكاء الاصطناعي
      </h1>
      <p className="mt-4 text-lg sm:text-xl text-slate-300 font-medium">
        المستشار الإداري والتربوي: إبراهيم دخان
      </p>
      <p className="mt-2 text-md text-slate-400">
        1447هـ / 2025م
      </p>
    </header>
  );
};
