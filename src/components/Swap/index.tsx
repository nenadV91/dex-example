import { useCallback, useMemo } from "react";
import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import { useWeb3React } from "@web3-react/core";

import { ButtonStatus } from "./SwapButton";
import { Field } from "state/swap/types";
import { useSwapActionHandlers, useSwapState } from "state/swap/hooks";
import { isSupportedChain } from "utils/supportedChainId";
import CurrencyInputPanel from "components/CurrencyInput";
import SwapButton from "./SwapButton";

const Wrapper = styled.div`
	max-width: 480px;
	width: 100%;
	margin: 0 auto;
	padding: 1.2rem;
	background: white;
	border-radius: 10px;
`;

const Swap = () => {
	const { account, chainId } = useWeb3React();
	const { onUserInput, onCurrencySelection } = useSwapActionHandlers();
	const { typedValue, independendField, ...state } = useSwapState();

	const inputCurrencyId = state[Field.INPUT].currencyId;
	const outputCurrencyId = state[Field.OUTPUT].currencyId;

	console.log(inputCurrencyId, outputCurrencyId);

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

	const buttonStatus = useMemo(() => {
		if (!account) {
			return ButtonStatus.CONNECT_WALLET;
		} else if (!isSupportedChain(chainId)) {
			return ButtonStatus.UNSUPPORTED_CHAIN;
		} else if (!inputCurrencyId || !outputCurrencyId) {
			return ButtonStatus.UNSELECTED_TOKEN;
		} else if (!typedValue) {
			return ButtonStatus.NO_AMOUNT;
		}
	}, [account, chainId, inputCurrencyId, outputCurrencyId, typedValue]);

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
			<SwapButton status={buttonStatus} />
		</Wrapper>
	);
};

export default Swap;
