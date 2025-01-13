import React from 'react';

interface ProfileButtonProps {
  label: string;
}

export default function ProfileButton({ label }: ProfileButtonProps) {
  return (
    <div className="px-6 py-3.5 bg-pink-700 rounded-lg shadow-[0px_4px_4px_rgba(0,0,0,0.25)] cursor-pointer focus:outline-none focus:ring-2 focus:ring-pink-300 focus:ring-opacity-75">
      {label}
    </div>
  );
}
