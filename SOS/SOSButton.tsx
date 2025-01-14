import * as React from 'react';
import { SOSIcon } from './icons/SOSIcon';
import { SOSButtonProps } from './types';

export const SOSButton: React.FC<SOSButtonProps> = ({ onClick, isLoading = false }) => (
  <button
    onClick={onClick}
    disabled={isLoading}
    className="self-end px-16 py-20 mt-4 text-7xl font-bold text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:ring-red-300 rounded-full leading-[175px] transition-colors duration-200 ease-in-out focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
    aria-label={isLoading ? "Sending emergency signal..." : "Emergency SOS Button"}
  >
    <span className="flex items-center justify-center gap-4">
      <SOSIcon size={64} className="animate-pulse" />
      SOS
    </span>
  </button>
);
