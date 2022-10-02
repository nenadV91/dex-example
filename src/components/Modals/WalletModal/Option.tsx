import Image from "next/image";
import Button from "@mui/material/Button";
import { styled } from "@mui/system";

type OptionProps = {
	onClick: () => void;
	isActive: boolean;
	children: React.ReactNode;
	icon: string | StaticImageData;
};

const StyledButton = styled(Button)`
	margin-bottom: 10px;
	padding: 10px 21px;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const IconWrapper = styled("span")`
	width: 20px;

	& span {
		vertical-align: middle;
	}
`;

export function Option({ onClick, children, icon }: OptionProps) {
	return (
		<StyledButton
			size="large"
			variant="outlined"
			color="primary"
			onClick={onClick}
		>
			<span>{children}</span>

			<IconWrapper>
				<Image src={icon} alt={"Icon"} />
			</IconWrapper>
		</StyledButton>
	);
}
