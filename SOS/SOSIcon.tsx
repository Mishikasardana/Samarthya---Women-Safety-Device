import * as React from 'react';
import { IconProps } from '../types';

export const SOSIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', className = '' }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke={color}
    className={className}
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="10" strokeWidth="2"/>
    <path d="M12 8v8M8 12h8" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);
