import * as React from "react";
import { InputFieldProps } from "./types";

export const InputField: React.FC<InputFieldProps> = ({ label, type = "text" }) => {
  const inputId = `${label.toLowerCase().replace(/\s/g, "-")}-input`;
  
  return (
    <div className="flex flex-col gap-2.5">
      <label htmlFor={inputId} className="relative text-sm text-orange-100 border border-amber-100 border-solid">
        {label}
      </label>
      <input
        id={inputId}
        type={type}
        className="flex relative shrink-0 max-w-full rounded-xl border border-amber-100 border-solid bg-blue-500 bg-opacity-0 h-[41px] w-[310px]"
        aria-label={label}
      />
    </div>
  );
}
