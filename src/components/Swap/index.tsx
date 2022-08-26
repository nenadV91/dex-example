import { useCallback, useMemo } from "react";
import styled from "@emotion/styled";
import { Field } from "state/swap/types";
import { Typography } from "@mui/material";
import { useSwapActionHandlers, useSwapState } from "state/swap/hooks";
import CurrencyInputPanel from "components/CurrencyInput";

const Wrapper = styled.div`
	max-width: 480px;
	width: 100%;
	margin: 0 auto;
	padding: 1rem;
	background: white;
	border-radius: 10px;
`;

const Swap = () => {
	const { onUserInput, onCurrencySelection } = useSwapActionHandlers();
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

	const handleInputSelect = useCallback(
		(inputCurrency) => {
			onCurrencySelection(Field.INPUT, inputCurrency);
		},
		[onCurrencySelection]
	);

	const handleOutputSelect = useCallback(
		(outputCurrency) => {
			onCurrencySelection(Field.OUTPUT, outputCurrency);
		},
		[onCurrencySelection]
	);

	const formattedAmounts = useMemo(
		() => ({
			[independendField]: typedValue,
			[dependentField]: "69",
		}),
		[dependentField, independendField, typedValue]
	);

	return (
		<Wrapper>
			<Typography mb={1} ml={1} variant="body1">
				Swap
			</Typography>
			<CurrencyInputPanel
				value={formattedAmounts[Field.INPUT]}
				onCurrencySelect={handleInputSelect}
				onUserInput={handleTypeInput}
			/>
			<CurrencyInputPanel
				value={formattedAmounts[Field.OUTPUT]}
				onCurrencySelect={handleOutputSelect}
				onUserInput={handleTypeOutput}
			/>
		</Wrapper>
	);
};

export default Swap;
