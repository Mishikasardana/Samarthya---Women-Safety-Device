export interface MetricCardProps {
  icon?: string;
  value?: string;
  label: string;
  progressColor: string;
  progressWidth: string;
  showIcon?: boolean;
}

export interface DeviceStatusProps {
  isConnected: boolean;
  deviceIcon: string;
}

export interface BackButtonProps {
  onClick: () => void;
}

export interface DeviceIconProps {
  isConnected: boolean;
}
