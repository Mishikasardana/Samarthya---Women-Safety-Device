export interface ButtonProps {
  text: string;
  onClick: () => void;
}

export interface EmergencyDialogProps {
  question: string;
  timer: string;
  onYes: () => void;
  onNo: () => void;
}
