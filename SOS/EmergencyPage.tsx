import * as React from 'react';
import { EmergencyHeader } from './EmergencyHeader';
import { EmergencyMessage } from './EmergencyMessage';
import { SOSButton } from './SOSButton';

export const EmergencyPage: React.FC = () => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const handleSOSClick = async () => {
    setIsLoading(true);
    try {
      if ('geolocation' in navigator) {
        const position = await new Promise<GeolocationPosition>((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(resolve, reject);
        });
        
        const { latitude, longitude } = position.coords;
        
        await fetch('/api/emergency', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            latitude,
            longitude,
            timestamp: new Date().toISOString(),
          }),
        });
      }
    } catch (error) {
      console.error('Emergency signal failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="flex overflow-hidden flex-col pt-9 mx-auto w-full bg-orange-100 max-w-[480px] rounded-[30px] min-h-screen">
      <EmergencyHeader title="Samarthya" />
      <EmergencyMessage 
        heading="Are you in an emergency?"
        description={[
          "Press the SOS button, your live location will be shared",
          "with the nearest help centre and your emergency contacts"
        ]}
      />
      <SOSButton onClick={handleSOSClick} isLoading={isLoading} />
    </main>
  );
};
