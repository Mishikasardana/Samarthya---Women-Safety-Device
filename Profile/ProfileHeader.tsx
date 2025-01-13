import React from 'react';

interface ProfileHeaderProps {
  title: string;
  icon: React.ReactNode;
}

export default function ProfileHeader({ title, icon }: ProfileHeaderProps) {
  return (
    <div className="flex gap-5 justify-between self-end w-56 max-w-full text-3xl font-extrabold whitespace-nowrap text-stone-800">
      <div>{title}</div>
      <div className="object-contain shrink-0 w-6 aspect-square">{icon}</div>
    </div>
  );
}
