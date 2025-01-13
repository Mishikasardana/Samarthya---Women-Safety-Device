import React from 'react';

interface ProfileFieldProps {
  title: string;
  value: string;
}

export default function ProfileField({ title, value }: ProfileFieldProps) {
  return (
    <>
      <div className="mt-3 text-lg font-bold tracking-tight text-center text-stone-800">{title}</div>
      <div className="px-16 py-4 max-w-full text-xl font-semibold tracking-tight text-center whitespace-nowrap bg-orange-100 rounded-xl shadow-[0px_1px_4px_rgba(0,0,0,0.25)] text-stone-800">
        {value}
      </div>
    </>
  );
}
