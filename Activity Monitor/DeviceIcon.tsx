import * as React from 'react';
import { DeviceIconProps } from './types';

export const DeviceIcon: React.FC<DeviceIconProps> = ({ isConnected }) => {
  return (
    <svg
      width="46"
      height="46"
      viewBox="0 0 46 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="object-contain shrink-0 shadow-sm"
      role="img"
      aria-label={isConnected ? "Device connected" : "Device disconnected"}
    >
      <circle cx="23" cy="23" r="23" fill={isConnected ? "#4CAF50" : "#FF5252"} />
      <path
        d="M23 12C17.48 12 13 16.48 13 22C13 27.52 17.48 32 23 32C28.52 32 33 27.52 33 22C33 16.48 28.52 12 23 12ZM23 30C18.59 30 15 26.41 15 22C15 17.59 18.59 14 23 14C27.41 14 31 17.59 31 22C31 26.41 27.41 30 23 30Z"
        fill="white"
      />
      <path
        d="M24 19H22V25H24V19Z"
        fill="white"
      />
      <path
        d="M24 16H22V18H24V16Z"
        fill="white"
      />
    </svg>
  );
};
