export interface ContactCardProps {
  name: string;
  location: string;
  onContactClick: () => void;
}

export interface EmergencyContact {
  name: string;
  location: string;
}
