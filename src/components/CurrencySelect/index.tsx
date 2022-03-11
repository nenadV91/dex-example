import { styled } from "@mui/system";
import { Button } from "@mui/material";
import { useAllTokens } from "state/tokens/hooks";

const CurrencySelectButton = styled(Button)``;

type CurrencySelectProps = {
  onClick: () => void;
};

export default function CurrencySelect({ onClick }: CurrencySelectProps) {
  const allTokens = useAllTokens();
  return (
    <CurrencySelectButton onClick={onClick} variant="contained" size="small">
      Select a token
    </CurrencySelectButton>
  );
}
