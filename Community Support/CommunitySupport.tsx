import * as React from "react";
import { SupportGroup } from "./SupportGroup";

export const CommunitySupport: React.FC = () => {
  const handleGroupClick = (groupName: string) => {
    console.log(`Clicked ${groupName}`);
  };

  const supportGroups = [
    {
      title: "Support Group A",
      subtitle: "15 members",
      onClick: () => handleGroupClick("Support Group A")
    },
    {
      title: "Counselling Chat",
      subtitle: "Professional Support",
      onClick: () => handleGroupClick("Counselling Chat")
    },
    {
      title: "Local Safety Network",
      subtitle: "Nearby Helpers",
      onClick: () => handleGroupClick("Local Safety Network")
    }
  ];

  return (
    <div className="flex overflow-hidden flex-col items-end pt-14 pr-8 pl-2.5 mx-auto w-full bg-orange-100 max-w-[480px] pb-[507px] rounded-[30px]">
      <div className="flex gap-6 self-start text-3xl font-extrabold text-center text-stone-800">
        <svg 
          className="w-6 h-6 self-start text-stone-800"
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
        <h1 className="flex-auto">Community Support</h1>
      </div>
      {supportGroups.map((group, index) => (
        <SupportGroup
          key={index}
          title={group.title}
          subtitle={group.subtitle}
          onClick={group.onClick}
        />
      ))}
    </div>
  );
};
