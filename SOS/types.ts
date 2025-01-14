export interface EmergencyHeaderProps {
  title: string;
}

export interface EmergencyMessageProps {
  heading: string;
  description: string[];
}

export interface SOSButtonProps {
  onClick: () => void;
  isLoading?: boolean;
}

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
}
