import * as React from 'react';
import { MetricCard } from './MetricCard';
import { DeviceStatus } from './DeviceStatus';
import { BackButton } from './BackButton';

export const ActivityMonitor: React.FC = () => {
  const handleBackClick = React.useCallback(() => {
    window.history.back();
  }, []);

  const metrics = [
    {
      value: "85 bpm",
      label: "Heart Rate",
      progressColor: "bg-red-600",
      progressWidth: "w-full",
      showIcon: true
    },
    {
      label: "Stress Level",
      progressColor: "bg-green-700",
      progressWidth: "w-[124px]"
    },
    {
      label: "Mental Fitness",
      progressColor: "bg-blue-700",
      progressWidth: "w-[179px]"
    },
    {
      label: "Physical Fitness",
      progressColor: "bg-amber-400",
      progressWidth: "w-full"
    }
  ];

  return (
    <div className="flex overflow-hidden flex-col items-center px-5 pt-12 pb-64 mx-auto w-full bg-orange-100 max-w-[480px] rounded-[30px]">
      <div className="flex gap-10 self-start text-3xl font-extrabold text-center text-stone-800">
        <BackButton onClick={handleBackClick} />
        <div className="basis-auto">Activity Monitor</div>
      </div>
      
      <DeviceStatus isConnected={true} deviceIcon="" />

      {metrics.map((metric, index) => (
        <MetricCard
          key={index}
          {...metric}
        />
      ))}
    </div>
  );
};
