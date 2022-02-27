import { useCallback, useMemo } from "react";
import styled from "@emotion/styled";
import { Field } from "state/swap/types";
import { useSwapActionHandlers, useSwapState } from "state/swap/hooks";
import CurrencyInputPanel from "components/CurrencyInput/CurrencyInput";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  max-width: 480px;
  min-height: 100vh;
  width: 100%;
  margin: 0 auto;
`;

const Swap = () => {
  const { onUserInput } = useSwapActionHandlers();
  const { typedValue, independendField } = useSwapState();

  const dependentField: Field =
    independendField === Field.INPUT ? Field.OUTPUT : Field.INPUT;

  const handleTypeInput = useCallback(
    (value: string) => {
      onUserInput(Field.INPUT, value);
    },
    [onUserInput]
  );

  const handleTypeOutput = useCallback(
    (value: string) => {
      onUserInput(Field.OUTPUT, value);
    },
    [onUserInput]
  );

  // const handleInputSelect = useCallback(
  //   (inputCurrency) => {
  //     onCurrencySelection(Field.INPUT, inputCurrency);
  //   },
  //   [onCurrencySelection]
  // );

  // const handleOutputSelect = useCallback(
  //   (outputCurrency) => {
  //     onCurrencySelection(Field.OUTPUT, outputCurrency);
  //   },
  //   [onCurrencySelection]
  // );

  const formattedAmounts = useMemo(
    () => ({
      [independendField]: typedValue,
      [dependentField]: "69",
    }),
    [dependentField, independendField, typedValue]
  );

  return (
    <Wrapper>
      <CurrencyInputPanel
        value={formattedAmounts[Field.INPUT]}
        onUserInput={handleTypeInput}
      />
      <CurrencyInputPanel
        value={formattedAmounts[Field.OUTPUT]}
        onUserInput={handleTypeOutput}
      />
    </Wrapper>
  );
};

export default Swap;
