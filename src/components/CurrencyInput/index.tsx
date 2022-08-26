import { useState } from "react";
import { styled } from "@mui/system";
import { Currency } from "@uniswap/sdk-core";
import Box from "@mui/material/Box";
import CurrencySelect from "components/CurrencySelect";
import NumericalInput from "components/NumericalInput";
import CurrencyModal from "components/CurrencyModal";
import { sendEvent } from "components/analytics";

const InputPanel = styled(Box)`
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
	const [modalOpen, setModalOpen] = useState(false);

	const handleModalClose = () => {
		setModalOpen(false);
	};

	const handleSelectClick = () => {
		setModalOpen(true);
		sendEvent({
			category: "Currency",
			action: "Open currency select modal",
		});
	};

	return (
		<InputPanel>
			<InputRow>
				<NumericalInput onUserInput={onUserInput} value={value} />
				<CurrencySelect onClick={handleSelectClick} />
				<CurrencyModal onClose={handleModalClose} isOpen={modalOpen} />
			</InputRow>
		</InputPanel>
	);
}
