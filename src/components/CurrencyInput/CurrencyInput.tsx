import Box from "@mui/material/Box";
import { styled } from "@mui/system";
import CurrencySelect from "components/CurrencySelect/CurrencySelect";
import NumericalInput from "components/NumericalInput/NumericalInput";

const InputWrapper = styled(Box)`
  margin-bottom: 10px;
  background-color: ${({ theme }) => theme.palette.grey[100]};
  border-radius: 20px;
  border: 1px solid white;
  width: 100%;
`;

export interface CurrencyInputProps {
  value: string | number;
  onUserInput: (value: string) => void;
}

export default function CurrencyInput({
  onUserInput,
  value,
}: CurrencyInputProps) {
  return (
    <InputWrapper>
      <NumericalInput onUserInput={onUserInput} value={value} />
      <CurrencySelect />
    </InputWrapper>
  );
}
