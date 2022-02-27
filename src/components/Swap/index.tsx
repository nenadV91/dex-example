import { useCallback } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import styled from "@emotion/styled";
import { Field } from "state/swap/types";
import { useSwapActionHandlers, useSwapState } from "state/swap/hooks";

const InputWrapper = styled(Box)`
  min-width: 300px;
  margin-bottom: 10px;
`;

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 75px;
  flex-direction: column;
  width: 100%;
`;

const Swap = () => {
  const { onUserInput } = useSwapActionHandlers();
  const { typedValue, independendField } = useSwapState();

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

  return (
    <Wrapper>
      <InputWrapper>
        <TextField
          onChange={(event) => handleTypeInput(event.target.value)}
          fullWidth
          id="outlined-basic"
          variant="outlined"
        />
      </InputWrapper>

      <InputWrapper>
        <TextField
          onChange={(event) => handleTypeOutput(event.target.value)}
          fullWidth
          id="outlined-basic"
          variant="outlined"
        />
      </InputWrapper>
    </Wrapper>
  );
};

export default Swap;
