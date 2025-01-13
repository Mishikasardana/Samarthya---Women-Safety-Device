import * as React from "react";

interface OrangeCardProps {
  children?: React.ReactNode;
}

export default function OrangeCard({ children }: OrangeCardProps) {
  return (
    <div className="flex overflow-hidden flex-col justify-center items-center px-20 py-96 mx-auto w-full bg-orange-100 max-w-[480px] rounded-[30px] shadow-[10px_10px_40px_rgba(0,0,0,0.3)]">
      {children}
    </div>
  );
}
