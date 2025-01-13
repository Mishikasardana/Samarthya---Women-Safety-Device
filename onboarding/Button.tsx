import * as React from "react";
import { ButtonProps } from "./types";

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  onClick,
  className = "",
  ariaLabel
}) => {
  return (
    <button
      onClick={onClick}
      aria-label={ariaLabel}
      className={`relative px-14 py-4 max-w-full bg-pink-700 rounded-lg shadow-[0px_4px_4px_rgba(0,0,0,0.25)] w-[244px] hover:bg-pink-800 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 transition-colors ${className}`}
    >
      {children}
    </button>
  );
};
