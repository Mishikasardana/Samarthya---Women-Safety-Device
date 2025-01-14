import * as React from 'react';
import { EmergencyMessageProps } from './types';

export const EmergencyMessage: React.FC<EmergencyMessageProps> = ({ heading, description }) => (
  <div className="flex flex-col items-start pr-14 pl-3 mt-12 w-full">
    <h1 className="text-3xl font-extrabold text-stone-800">
      {heading}
    </h1>
    <div className="mt-4 text-xl text-black">
      {description.map((line, index) => (
        <p key={index} className="leading-relaxed">
          {line}
        </p>
      ))}
    </div>
  </div>
);
