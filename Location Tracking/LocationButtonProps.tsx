import React from 'react';
import { LocationIcon } from './icons/IconSet';
import { LocationButtonProps } from './types';

export const LocationButton: React.FC<LocationButtonProps> = ({ onLocationRequest }) => {
  return (
    <div className="flex gap-5 justify-between self-stretch py-2.5 pr-3 pl-14 mt-80 font-extralight bg-white rounded-xl text-stone-800">
      <button 
        onClick={onLocationRequest}
        className="my-auto border border-black border-solid px-4 py-2 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-700 transition-colors"
        aria-label="Request current location"
      >
        ASK FOR CURRENT LOCATION
      </button>
      <LocationIcon />
    </div>
  );
};
