import * as React from 'react';
import { MetricCardProps } from './types';

export const MetricCard: React.FC<MetricCardProps> = ({
  icon,
  value,
  label,
  progressColor,
  progressWidth,
  showIcon = false
}) => {
  return (
    <div className="flex gap-2 items-center px-6 py-5 mt-4 w-full bg-white rounded-lg max-w-[328px] min-h-[80px]">
      {showIcon && (
        <div className="flex justify-center items-center self-stretch px-0.5 my-auto w-10 h-10 bg-red-600 min-h-[40px] rounded-[64px]">
          <img
            loading="lazy"
            src={icon}
            alt=""
            className="object-contain flex-1 shrink w-9 aspect-square basis-0"
          />
        </div>
      )}
      <div className="flex flex-col flex-1 shrink justify-center self-stretch my-auto w-full basis-0 min-w-[240px]">
        <div className="flex gap-2 items-end self-start text-lg font-bold leading-loose text-center text-neutral-800">
          <div>{value ? `${value}` : label}</div>
          <div className="flex gap-2.5 pb-1 min-h-[19px]" />
        </div>
        <div className="flex overflow-hidden gap-2 mt-1 w-full bg-neutral-200 min-h-[8px] rounded-[64px]">
          <div 
            className={`flex min-h-[8px] rounded-[64px] ${progressColor} ${progressWidth}`}
            role="progressbar"
            aria-valuenow={parseInt(progressWidth)}
            aria-valuemin={0}
            aria-valuemax={100}
          />
        </div>
      </div>
    </div>
  );
};
