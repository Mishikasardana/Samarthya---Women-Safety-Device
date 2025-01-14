import * as React from 'react';
import { ChatGroup } from './ChatGroup';
import { ActionButton } from './ActionButton';
import { chatGroups, actionButtons } from './data';

export const ChatInterface: React.FC = () => {
  const handleGroupClick = (index: number) => {
    console.log(`Chat group ${index} clicked`);
  };

  const handleActionClick = (index: number) => {
    console.log(`Action button ${index} clicked`);
  };

  return (
    <div className="flex overflow-hidden flex-col items-center mx-auto w-full bg-orange-100 max-w-[480px] rounded-[30px] text-stone-800">
      <div className="w-full aspect-[0.99] rounded-[30px] bg-gradient-to-b from-pink-200 to-orange-200" />
      
      {chatGroups.map((group, index) => (
        <ChatGroup
          key={index}
          {...group}
          onClick={() => handleGroupClick(index)}
        />
      ))}

      <div className="flex gap-5 justify-between items-start mt-5 w-full text-lg font-medium leading-3 text-center text-orange-100 whitespace-nowrap max-w-[380px]">
        {actionButtons.map((button, index) => (
          <ActionButton
            key={index}
            {...button}
            onClick={() => handleActionClick(index)}
          />
        ))}
      </div>
      
      <div className="w-full aspect-[4.24] mt-4 bg-gradient-to-r from-pink-200 via-orange-200 to-pink-200" />
    </div>
  );
};
