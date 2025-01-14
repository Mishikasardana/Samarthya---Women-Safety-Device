import * as React from 'react';
import { EmergencyHeaderProps } from './types';

export const EmergencyHeader: React.FC<EmergencyHeaderProps> = ({ title }) => (
  <header className="self-center text-3xl font-extrabold text-center text-stone-800">
    {title}
  </header>
);
