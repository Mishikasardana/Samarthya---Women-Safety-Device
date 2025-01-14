import * as React from 'react';
import { ActionButtonProps } from './types';

export const ActionButton: React.FC<ActionButtonProps> = ({
  icon,
  bgColor,
  onClick,
  ariaLabel
}) => {
  return (
    <button
      onClick={onClick}
      className={`object-contain shrink-0 ${bgColor} rounded-full aspect-[1.03] h-[69px] w-[69px] hover:opacity-90 transition-opacity focus:ring-2 focus:ring-offset-2 focus:ring-pink-700`}
      aria-label={ariaLabel}
    >
      <img
        loading="lazy"
        src={icon}
        alt=""
        className="w-full h-full object-contain"
      />
    </button>
  );
};
