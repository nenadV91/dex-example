import { styled } from "@mui/material";

const StyledInputWrapper = styled("div")`
  padding: 1rem;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
`;

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

  ::placeholder {
    color: ${({ theme }) => theme.palette.text.secondary};
  }
`;

export type NumericalInputProps = {
  placeholder?: string;
  value: string | number;
  onUserInput: (input: string) => void;
};

export default function NumericalInput({
  onUserInput,
  placeholder,
  value,
}: NumericalInputProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onUserInput(event.target.value);
  };

  return (
    <StyledInputWrapper>
      <StyledInput
        value={value}
        placeholder={placeholder || "0.0"}
        pattern="^[0-9]*[.,]?[0-9]*$"
        minLength={1}
        maxLength={79}
        spellCheck={false}
        onChange={handleChange}
      />
    </StyledInputWrapper>
  );
}
