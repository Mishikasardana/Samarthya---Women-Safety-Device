import * as React from 'react';
import { EmergencyDialog } from './EmergencyDialog';

export const EmergencyContainer: React.FC = () => {
  const handleYes = () => {
    // Handle yes action
  };

  const handleNo = () => {
    // Handle no action
  };

  return (
    <EmergencyDialog
      question="Do you want to make an emergency call?"
      timer="03"
      onYes={handleYes}
      onNo={handleNo}
    />
  );
};
