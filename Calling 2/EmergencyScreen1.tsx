import * as React from "react";
import { EmergencyMessage } from "./EmergencyMessage";

export const EmergencyScreen1: React.FC = () => {
  return (
    <EmergencyMessage
      countdown="02"
      title="Calling Emergency...."
      description="Please stand by, we are currently requesting for help. Your emergency contacts and nearby rescue services would see your call for help"
    />
  );
};
