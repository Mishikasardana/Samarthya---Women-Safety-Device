import * as React from 'react';
import { ChatGroupProps } from './types';

export const ChatGroup: React.FC<ChatGroupProps> = ({
  icon,
  title,
  onlineCount,
  totalCount,
  onClick
}) => {
  return (
    <button
      onClick={onClick}
      className="flex gap-2.5 items-start px-16 pt-1.5 pb-7 mt-4 max-w-full bg-orange-100 rounded-xl border-2 border-pink-700 border-solid w-[372px] text-left hover:bg-orange-200 transition-colors"
      aria-label={`${title} chat group with ${onlineCount} out of ${totalCount} users online`}
    >
      <img
        loading="lazy"
        src={icon}
        alt=""
        className="object-contain shrink-0 self-end mt-8 aspect-[1.7] w-[17px]"
      />
      <div className="flex flex-col self-start">
        <div className="self-start text-2xl">{title}</div>
        <div className="mt-1 text-xl">{onlineCount}/{totalCount} online</div>
      </div>
    </button>
  );
};
