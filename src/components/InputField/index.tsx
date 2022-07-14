import React from "react";
import { StyledInput, StyledLabel, StyledTextArea, StyledWrapper } from "./styles";

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  textArea?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({ name, label, textArea, ...rest }) => {
  const [focused, setFocused] = React.useState(false);

  const inputElement: JSX.Element = React.useMemo(() => {
    if (textArea) {
      //@ts-ignore
      return <StyledTextArea name={name} style={{ resize: 'none' }} rows={4} {...rest} />
    }
    return <StyledInput name={name} {...rest} />
  }, [])

  return (
    <StyledWrapper>
      <StyledLabel htmlFor={name}>
        {label}
      </StyledLabel>
      {inputElement}
    </StyledWrapper>
  );
};

export default InputField;
