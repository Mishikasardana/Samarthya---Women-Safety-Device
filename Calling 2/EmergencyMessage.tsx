import * as React from "react";
import { EmergencyMessageProps } from "./types";

export const EmergencyMessage: React.FC<EmergencyMessageProps> = ({
  countdown,
  title,
  description
}) => {
  return (
    <div className="flex overflow-hidden flex-col px-11 pt-14 pb-56 mx-auto w-full bg-orange-100 max-w-[480px] rounded-[30px]">
      <h1 className="self-center text-3xl font-extrabold text-stone-800">
        {title}
      </h1>
      <div 
        role="timer"
        aria-live="polite"
        tabIndex={0}
        className="self-start px-16 py-20 mt-16 text-7xl font-bold text-white whitespace-nowrap bg-orange-100 rounded-full leading-[175px]"
      >
        {countdown}
      </div>
      <p className="mt-6 text-xl text-center text-black">
        {description}
      </p>
    </div>
  );
};
