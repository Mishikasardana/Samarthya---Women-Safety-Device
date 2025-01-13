import React from 'react';
import { MessageProps } from './types';

export const Message: React.FC<MessageProps> = ({ sender, message, isSelf }) => {
  return (
    <div 
      className={`flex gap-${isSelf ? '3' : '5'} items-center mt-6 ml-${isSelf ? '5' : '3'}`}
      role="listitem"
    >
      <div className="my-auto text-pink-700">{sender}</div>
      <div className="flex gap-2.5">
        <div className="text-pink-700" aria-hidden="true">:</div>
        <div className="my-auto basis-auto text-stone-800">{message}</div>
      </div>
    </div>
  );
};
