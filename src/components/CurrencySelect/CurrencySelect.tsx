import { styled } from "@mui/system";
import { Currency } from "@uniswap/sdk-core";
import { Button } from "@mui/material";

const CurrencySelectButton = styled(Button)``;

type CurrencySelectProps = {
  onCurrencySelect: (currency: Currency) => void;
};

export default function CurrencySelect({
  onCurrencySelect,
}: CurrencySelectProps) {
  return (
    <CurrencySelectButton variant="contained" size="small">
      Select a token
    </CurrencySelectButton>
  );
}
