import { useCallback, useMemo } from "react";
import { useWeb3React } from "@web3-react/core";

import { getConnection, getConnectionName } from "connection/utils";
import { shortenAddress } from "utils";
import { useAppDispatch } from "state/hooks";
import { updateSelectedWallet } from "state/user/reducer";
import { getExplorerLink, ExplorerDataType } from "utils/getExplorerLink";
import useCopyClipboard from "hooks/useCopyClipboard";

import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import IconButton from "@mui/material/IconButton";
import LaunchIcon from "@mui/icons-material/Launch";

import * as styled from "./styled";

export function AccountDetails() {
	const { connector, account, chainId } = useWeb3React();

	const dispatch = useAppDispatch();

	const [isCopied, setCopied] = useCopyClipboard();

	// get connection name
	const connectionName = useMemo(() => {
		const type = getConnection(connector).type;
		const name = getConnectionName(type);
		return name;
	}, [connector]);

	// handle copy
	const copy = useCallback(() => {
		setCopied(account || "");
	}, [account, setCopied]);

	// handle view on explorer
	const viewOnExplorer = useCallback(() => {
		if (!chainId || !account) {
			return;
		}

		window.open(getExplorerLink(chainId, account, ExplorerDataType.ADDRESS));
	}, [account, chainId]);

	// handle disconnect
	const disconnect = useCallback(() => {
		if (connector.deactivate) {
			connector.deactivate();
		} else {
			connector.resetState();
		}

		dispatch(updateSelectedWallet({ wallet: undefined }));
	}, [connector, dispatch]);

	if (!account) {
		return null;
	}

	return (
		<styled.Wrapper>
			<styled.Heading>
				<span>
					Connected with <strong>{connectionName}</strong>
				</span>

				<styled.DisconnectButton
					onClick={disconnect}
					variant="outlined"
					size="small"
				>
					Disconnect
				</styled.DisconnectButton>
			</styled.Heading>

			<styled.Body>
				<styled.Account>
					<span>{shortenAddress(account)}</span>
				</styled.Account>

				<styled.Options>
					<styled.Option>
						<span>{isCopied ? "Coppied!" : "Copy address"}</span>
						<IconButton onClick={copy}>
							<ContentCopyIcon fontSize="small" />
						</IconButton>
					</styled.Option>

					<styled.Option>
						<span>View on Explorer</span>
						<IconButton onClick={viewOnExplorer}>
							<LaunchIcon fontSize="small" />
						</IconButton>
					</styled.Option>
				</styled.Options>
			</styled.Body>
		</styled.Wrapper>
	);
}
