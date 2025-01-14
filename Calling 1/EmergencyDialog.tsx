import * as React from 'react';
import { EmergencyButton } from './EmergencyButton';
import { EmergencyDialogProps } from './types';

export const EmergencyDialog: React.FC<EmergencyDialogProps> = ({
  question,
  timer,
  onYes,
  onNo
}) => {
  return (
    <div className="flex overflow-hidden flex-col items-center px-4 pt-14 pb-48 mx-auto w-full bg-orange-100 max-w-[480px] rounded-[30px] text-stone-800">
      <div className="text-3xl font-extrabold">Calling Emergency....</div>
      <div className="px-16 py-20 mt-16 w-full text-7xl font-bold text-white whitespace-nowrap bg-orange-100 rounded-full leading-[175px] max-w-[311px]">
        {timer}
      </div>
      <div className="flex flex-col items-start self-stretch py-2 pl-2.5 mt-7 w-full bg-orange-100 rounded-xl border-2 border-pink-700 border-solid">
        <div className="text-2xl">{question}</div>
        <div className="ml-20 text-xs">...</div>
        <div className="flex gap-5 justify-between self-center w-full max-w-[309px]">
          <EmergencyButton text="YES" onClick={onYes} />
          <EmergencyButton text="NO" onClick={onNo} />
        </div>
      </div>
    </div>
  );
};
