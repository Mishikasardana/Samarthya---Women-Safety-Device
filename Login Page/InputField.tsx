import * as React from "react";
import { InputFieldProps } from "./types";

export const InputField: React.FC<InputFieldProps> = ({ label, type, id }) => {
  return (
    <div className="flex flex-col w-full">
      <label htmlFor={id} className="text-sm font-bold text-orange-100">
        {label}
      </label>
      <input
        type={type}
        id={id}
        className="flex shrink-0 mt-2.5 max-w-full rounded-xl bg-blue-500 bg-opacity-0 h-[41px] w-[310px]"
        aria-label={label}
      />
    </div>
  );
};
