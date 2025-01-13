export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  ariaLabel?: string;
}

export interface OnboardingCardProps {
  imageSrc?: string;
  imageAlt?: string;
  onGetStarted?: () => void;
}
