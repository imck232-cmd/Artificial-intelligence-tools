
import React from 'react';
import type { Tool } from '../types';
import { KeyIcon } from './icons'; // Using a generic icon for all cards for simplicity and consistency.

interface ToolCardProps {
  tool: Tool;
}

export const ToolCard: React.FC<ToolCardProps> = ({ tool }) => {
  return (
    <a
      href={tool.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group block p-6 bg-slate-800 rounded-xl border border-slate-700 transition-all duration-300 ease-in-out hover:border-teal-500 hover:shadow-2xl hover:shadow-teal-500/10 hover:-translate-y-2"
    >
      <div className="flex flex-col h-full">
        <div className="flex-shrink-0">
          <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-slate-700 group-hover:bg-teal-500 transition-colors duration-300">
            <KeyIcon className="h-6 w-6 text-teal-400 group-hover:text-white transition-colors duration-300" />
          </div>
        </div>
        <div className="mt-4 flex-grow">
          <h3 className="text-lg font-bold text-slate-100 leading-tight">
            {tool.name}
          </h3>
          <p className="mt-2 text-sm text-slate-400">
            {tool.description}
          </p>
        </div>
      </div>
    </a>
  );
};
