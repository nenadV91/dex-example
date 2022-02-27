import Box from "@mui/material/Box";
import { styled } from "@mui/system";
import CurrencySelect from "components/CurrencySelect/CurrencySelect";
import NumericalInput from "components/NumericalInput/NumericalInput";
import { Currency } from "@uniswap/sdk-core";

const InputWrapper = styled(Box)`
  margin-bottom: 10px;
  background-color: ${({ theme }) => theme.palette.grey[100]};
  border-radius: 20px;
  border: 1px solid white;
  width: 100%;
`;

const InputRow = styled(`div`)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 1rem;
`;

export interface CurrencyInputProps {
  value: string | number;
  onUserInput: (value: string) => void;
  onCurrencySelect: (currency: Currency) => void;
}

export default function CurrencyInput({
  onCurrencySelect,
  onUserInput,
  value,
}: CurrencyInputProps) {
  return (
    <InputWrapper>
      <InputRow>
        <NumericalInput onUserInput={onUserInput} value={value} />
        <CurrencySelect onCurrencySelect={onCurrencySelect} />
      </InputRow>
    </InputWrapper>
  );
}
