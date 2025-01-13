import * as React from "react";
import { ContactCard } from "./ContactCard";
import { EmergencyContact } from "./types";

const contactsData: EmergencyContact[] = [
  {
    name: "Dad",
    location: "Office",
  },
  {
    name: "Mom",
    location: "Home",
  }
];

export const EmergencyContacts: React.FC = () => {
  const handleContactClick = (contact: EmergencyContact) => {
    window.location.href = `tel:${contact.name}`;
  };

  return (
    <div className="flex overflow-hidden flex-col items-center pt-8 mx-auto w-full bg-orange-100 max-w-[480px] rounded-[30px] min-h-screen">
      <h1 className="text-3xl font-extrabold text-center text-stone-800 w-[269px]">
        Emergency Contacts
      </h1>
      <div className="flex flex-col mt-16 w-full">
        {contactsData.map((contact, index) => (
          <ContactCard
            key={`${contact.name}-${index}`}
            name={contact.name}
            location={contact.location}
            onContactClick={() => handleContactClick(contact)}
          />
        ))}
      </div>
      <button
        className="mt-auto mb-8 px-6 py-3 bg-pink-700 text-white rounded-lg font-semibold hover:bg-pink-800 focus:outline-none focus:ring-2 focus:ring-pink-700 focus:ring-offset-2"
        onClick={() => window.location.href = "tel:911"}
        aria-label="Call Emergency Services"
      >
        Emergency Services
      </button>
    </div>
  );
};
