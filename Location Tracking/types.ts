export interface MessageProps {
  sender: string;
  message: string;
  isSelf?: boolean;
}

export interface ChatMessageProps {
  messages: MessageProps[];
}

export interface LocationButtonProps {
  onLocationRequest: () => void;
}
