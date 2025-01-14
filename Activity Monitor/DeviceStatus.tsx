import * as React from 'react';
import { DeviceStatusProps } from './types';
import { DeviceIcon } from './DeviceIcon';

export const DeviceStatus: React.FC<DeviceStatusProps> = ({ isConnected }) => {
  return (
    <div 
      className="flex gap-5 justify-between self-stretch py-2 pr-6 pl-1 mt-8 text-xl font-bold tracking-tight text-orange-100 bg-pink-700 rounded-lg shadow-[0px_4px_4px_rgba(0,0,0,0.25)]"
      role="status"
      aria-live="polite"
    >
      <div className="my-auto">
        {isConnected ? 'Device Connected' : 'Device Disconnected'}
      </div>
      <DeviceIcon isConnected={isConnected} />
    </div>
  );
};
