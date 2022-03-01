import { styled } from "@mui/system";
import { Button } from "@mui/material";

const CurrencySelectButton = styled(Button)``;

type CurrencySelectProps = {
  onClick: () => void;
};

export default function CurrencySelect({ onClick }: CurrencySelectProps) {
  return (
    <CurrencySelectButton onClick={onClick} variant="contained" size="small">
      Select a token
    </CurrencySelectButton>
  );
}
