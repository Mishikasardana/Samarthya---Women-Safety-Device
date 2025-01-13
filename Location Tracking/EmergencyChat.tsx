import React, { useCallback } from 'react';
import { Message } from './Message';
import { LocationButton } from './LocationButton';
import { EmergencyIcon, NavigationIcon } from './icons/IconSet';
import { MessageProps } from './types';

export const EmergencyChat: React.FC = () => {
  const chatMessages: MessageProps[] = [
    { sender: "Dad", message: "Hi, Cherry!! Is everything fine?" },
    { sender: "Me", message: "Yes Dad.", isSelf: true },
    { sender: "Dad", message: "When you will get back home?" },
    { sender: "Me", message: "Umm.. around 5PM.", isSelf: true },
    { sender: "Dad", message: "See you soon!!" }
  ];

  const handleLocationRequest = useCallback(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          console.log(`Location: ${latitude}, ${longitude}`);
        },
        (error) => {
          console.error('Error getting location:', error);
        }
      );
    }
  }, []);

  return (
    <div className="flex overflow-hidden flex-col pt-9 mx-auto w-full text-base bg-orange-100 max-w-[480px] rounded-[30px]">
      <div className="flex flex-col items-start px-5 w-full">
        <div className="flex gap-5 justify-between ml-3.5 max-w-full text-2xl text-stone-800 w-[188px]">
          <EmergencyIcon />
          <h1>Emergency Contacts</h1>
        </div>
        
        <div role="list">
          {chatMessages.map((msg, index) => (
            <Message
              key={index}
              sender={msg.sender}
              message={msg.message}
              isSelf={msg.isSelf}
            />
          ))}
        </div>

        <LocationButton onLocationRequest={handleLocationRequest} />
      </div>
      <div className="mt-8">
        <NavigationIcon />
      </div>
    </div>
  );
};
