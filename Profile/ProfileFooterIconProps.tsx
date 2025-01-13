import React from 'react';

interface ProfileFooterIconProps {
  icon: React.ReactNode;
}

export default function ProfileFooterIcon({ icon }: ProfileFooterIconProps) {
  return <div className="object-contain mt-4 w-full aspect-[4.24]">{icon}</div>;
}
