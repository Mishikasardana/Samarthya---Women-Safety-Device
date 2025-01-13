import * as React from "react";
import { ButtonProps } from "./types";

export const Button: React.FC<ButtonProps> = ({ children, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`px-11 py-5 text-2xl tracking-tight text-center whitespace-nowrap bg-orange-100 rounded-lg shadow-[0px_4px_4px_rgba(0,0,0,0.25)] text-stone-800 ${className}`}
    >
      {children}
    </button>
  );
};
