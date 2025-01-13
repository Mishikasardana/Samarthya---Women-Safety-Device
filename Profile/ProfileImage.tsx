import React from 'react';

interface ProfileImageProps {
  mainIcon: React.ReactNode;
  icon: React.ReactNode;
}

export default function ProfileImage({ mainIcon, icon }: ProfileImageProps) {
  return (
    <div className="flex flex-col items-center self-center px-5 pt-12 mt-6 w-48 h-48 rounded-full bg-zinc-400">
      <div className="flex relative z-10 flex-col items-end px-5 pt-32 -mb-2.5 w-full aspect-[0.993]">
        <div className="absolute inset-0 size-full">{mainIcon}</div>
        <div className="flex relative flex-col justify-center items-center px-1 bg-white rounded-full h-[33px] w-[33px]">
          {icon}
        </div>
      </div>
    </div>
  );
}
