import { styled } from "@mui/material";
import { escapeRegExp } from "utils";

type StyledInputProps = {
  fontSize?: string;
};

const StyledInput = styled("input")<StyledInputProps>`
  color: ${({ theme }) => theme.palette.text.primary};
  background-color: ${({ theme }) => theme.palette.grey[100]};
  font-size: ${({ fontSize }) => fontSize ?? "28px"};
  width: 0;
  flex: 1 1 auto;
  outline: none;
  border: none;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 0;

  ::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  [type="number"] {
    -moz-appearance: textfield;
  }

  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  ::placeholder {
    color: ${({ theme }) => theme.palette.text.secondary};
  }
`;

export type NumericalInputProps = {
  placeholder?: string;
  value: string | number;
  onUserInput: (input: string) => void;
};

const inputRegex = RegExp(`^\\d*(?:\\\\[.])?\\d*$`);

export default function NumericalInput({
  onUserInput,
  placeholder,
  value,
}: NumericalInputProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    if (value === "" || inputRegex.test(escapeRegExp(value))) {
      onUserInput(value.replace(/,/g, "."));
    }
  };

  return (
    <StyledInput
      inputMode="decimal"
      autoComplete="off"
      autoCorrect="off"
      value={value}
      placeholder={placeholder || "0.0"}
      pattern="^[0-9]*[.,]?[0-9]*$"
      minLength={1}
      maxLength={79}
      spellCheck={false}
      onChange={handleChange}
    />
  );
}
