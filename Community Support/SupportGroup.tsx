import * as React from "react";
import { SupportGroupProps } from "./types";

export const SupportGroup: React.FC<SupportGroupProps> = ({ title, subtitle, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex gap-5 justify-between px-2.5 py-2 mt-6 w-full bg-orange-100 rounded-xl border border-pink-700 border-solid max-w-[345px] shadow-[0px_1px_4px_rgba(0,0,0,0.25)] hover:bg-orange-200 focus:outline-none focus:ring-2 focus:ring-pink-700 focus:ring-offset-2 transition-colors"
      aria-label={`Join ${title}`}
    >
      <div className="flex flex-col text-left">
        <div className="text-xl font-semibold text-pink-700">{title}</div>
        <div className="self-start ml-4 text-base font-extralight text-black">
          {subtitle}
        </div>
      </div>
      <svg 
        className="w-6 h-6 my-auto text-pink-700"
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M9 5l7 7-7 7"
        />
      </svg>
    </button>
  );
};
