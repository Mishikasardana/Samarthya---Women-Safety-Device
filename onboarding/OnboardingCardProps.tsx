import * as React from "react";
import { Button } from "./Button";
import { OnboardingCardProps } from "./types";

export const OnboardingCard: React.FC<OnboardingCardProps> = ({
  imageSrc = "/images/image-1.jpg",
  imageAlt = "Onboarding welcome image",
  onGetStarted
}) => {
  const handleGetStarted = React.useCallback(() => {
    if (onGetStarted) {
      onGetStarted();
    }
  }, [onGetStarted]);

  return (
    <div className="flex overflow-hidden flex-col pt-52 pb-28 mx-auto w-full text-xl font-bold tracking-tight text-center text-orange-100 bg-orange-100 max-w-[480px] rounded-[30px] shadow-[10px_10px_40px_rgba(0,0,0,0.3)]">
      <div className="flex relative flex-col items-center px-20 pt-96 pb-5 w-full aspect-[0.812]">
        <img
          loading="lazy"
          src={imageSrc}
          alt={imageAlt}
          className="object-cover absolute inset-0 size-full"
        />
        <Button 
          onClick={handleGetStarted}
          ariaLabel="Get started with onboarding"
        >
          Get Started
        </Button>
      </div>
    </div>
  );
};
