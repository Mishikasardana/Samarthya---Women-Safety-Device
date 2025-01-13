import * as React from "react";
import { ContactCardProps } from "./types";
import { PhoneIcon, UserCircleIcon } from "@heroicons/react/24/solid";

export const ContactCard: React.FC<ContactCardProps> = ({
  name,
  location,
  onContactClick
}) => {
  return (
    <button
      onClick={onContactClick}
      className="flex flex-col mt-7 w-full whitespace-nowrap max-w-[345px] focus:outline-none focus:ring-2 focus:ring-pink-700 focus:ring-offset-2"
      aria-label={`Call ${name} at ${location}`}
    >
      <div className="flex flex-col w-full rounded-none">
        <div className="flex gap-5 justify-between px-3.5 py-4 w-full bg-orange-100 rounded-xl border border-pink-700 border-solid shadow-[0px_1px_4px_rgba(0,0,0,0.25)]">
          <div className="flex gap-4">
            <UserCircleIcon className="h-[30px] w-[30px] text-pink-700" />
            <div className="flex flex-col">
              <div className="text-2xl font-semibold text-pink-700">{name}</div>
              <div className="self-start mt-3.5 text-sm text-stone-800">
                {location}
              </div>
            </div>
          </div>
          <PhoneIcon className="h-6 w-6 text-pink-700" />
        </div>
      </div>
    </button>
  );
};
