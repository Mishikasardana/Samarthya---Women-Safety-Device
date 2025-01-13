import * as React from "react";
import { RegisterButtonProps } from "./types";

export const RegisterButton: React.FC<RegisterButtonProps> = ({ onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className="self-start px-8 py-5 text-2xl tracking-tight text-center whitespace-nowrap bg-orange-100 rounded-lg border border-amber-100 border-solid shadow-[0px_4px_4px_rgba(0,0,0,0.25)] text-stone-800"
    >
      {children}
    </button>
  );
}
