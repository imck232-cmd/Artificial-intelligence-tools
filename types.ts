
import type React from 'react';

export interface Tool {
  name: string;
  description: string;
  link: string;
}

export interface Category {
  id: string;
  name: string;
  icon: React.ReactNode;
  tools: Tool[];
}
