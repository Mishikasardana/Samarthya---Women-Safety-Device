import React from 'react';

interface ProfileSettingProps {
  title: string;
}

export default function ProfileSetting({ title }: ProfileSettingProps) {
  return (
    <div className="flex gap-10 px-1.5 py-2.5 mt-6 bg-orange-100 rounded-xl shadow-[0px_1px_4px_rgba(0,0,0,0.25)]">
      <div className="my-auto text-xl font-semibold tracking-tight text-center basis-auto text-stone-800">{title}</div>
      <div className="flex flex-col justify-center items-start px-3.5 py-0.5 bg-lime-400 rounded-[50px]">
        <div className="flex shrink-0 rounded-full h-[26px] w-[27px]" />
      </div>
    </div>
  );
}
