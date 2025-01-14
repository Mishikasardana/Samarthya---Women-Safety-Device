export interface ChatGroupProps {
  icon: string;
  title: string;
  onlineCount: number;
  totalCount: number;
  onClick?: () => void;
}

export interface ActionButtonProps {
  icon: string;
  bgColor: string;
  onClick?: () => void;
  ariaLabel: string;
}

export interface ChatData {
  icon: string;
  title: string;
  onlineCount: number;
  totalCount: number;
}

export interface ActionButtonData {
  icon: string;
  bgColor: string;
  ariaLabel: string;
}
