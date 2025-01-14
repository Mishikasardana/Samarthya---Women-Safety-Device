export interface ButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
  ariaLabel?: string;
}

export interface MessageProps {
  text: string;
  isUser?: boolean;
  timestamp?: string;
}

export interface ActionButtonProps extends ButtonProps {
  variant?: 'primary' | 'secondary';
}

export interface ChatInputProps {
  onSendMessage: (message: string) => void;
  disabled?: boolean;
}
