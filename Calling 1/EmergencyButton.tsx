import * as React from 'react';
import { ButtonProps } from './types';

export const EmergencyButton: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="px-11 py-3.5 bg-pink-700 rounded-lg shadow-[0px_4px_4px_rgba(0,0,0,0.25)] text-xl font-bold tracking-tight text-orange-100"
      aria-label={text}
    >
      {text}
    </button>
  );
};
