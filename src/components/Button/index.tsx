import React from "react";
import { StyledButton } from "./index.style";

interface ButtonProps {
  onClick: (payload: any) => void;
  secondary?: boolean;
  color?: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, color, secondary, children }) => {
  return (
    <StyledButton onClick={onClick} secondary={secondary ?? false} color={color}>
      {children}
    </StyledButton>
  );
};

export default Button;
