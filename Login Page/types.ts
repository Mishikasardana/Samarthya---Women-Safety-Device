export interface InputFieldProps {
  label: string;
  type: "text" | "email" | "password";
  id: string;
}

export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}
