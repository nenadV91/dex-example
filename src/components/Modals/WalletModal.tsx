import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import { useModalOpen } from "state/app/hooks";
import { ApplicationModal } from "state/app/types";
import { useSetModalOpen } from "state/app/hooks";
import { styled } from "@mui/system";
import { SUPPORTED_WALLETS } from "constants/wallets";
import CircularProgress from "@mui/material/CircularProgress";
import { useWeb3React, UnsupportedChainIdError } from "@web3-react/core";
import { useState, useEffect, useCallback } from "react";
import usePrevious from "hooks/usePrevious";
import { AbstractConnector } from "@web3-react/abstract-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";

const ModalContent = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 400px;
  background-color: ${({ theme }) => theme.palette.background.paper};
  box-shadow: ${({ theme }) => theme?.shadows[4]};
  padding: ${({ theme }) => theme.spacing(2)};
`;

const SpinnerWrapper = styled(Box)`
  display: flex;
  justify-content: center;
  padding: 25px;
`;

const ErrorText = styled(Typography)`
  color: ${({ theme }) => theme.palette.error.main};
`;

export enum WalletViews {
  ACCOUNT = "ACCOUNT",
  PENDING = "PENDING",
  ERROR = "ERROR",
}

export default function WalletModal() {
  const { error, active, activate, account, connector } = useWeb3React();

  const isModalOpen = useModalOpen(ApplicationModal.WALLET);

  const [walletView, setWalletView] = useState(WalletViews.ACCOUNT);
  const [pendingError, setPendingError] = useState<boolean>(false);

  const closeModal = useSetModalOpen(null);

  const previousAccount = usePrevious(account);
  const previousConnector = usePrevious(connector);

  useEffect(() => {
    if (isModalOpen) {
      setWalletView(WalletViews.ACCOUNT);
      setPendingError(false);
    }
  }, [isModalOpen]);

  useEffect(() => {
    if (
      isModalOpen &&
      account !== previousAccount &&
      connector !== previousConnector &&
      !error
    ) {
      setWalletView(WalletViews.ACCOUNT);
      closeModal();
    }
  }, [
    account,
    closeModal,
    connector,
    error,
    isModalOpen,
    previousAccount,
    previousConnector,
  ]);

  const tryActivation = useCallback(
    async (connector: AbstractConnector | undefined) => {
      if (connector !== previousConnector) {
        setWalletView(WalletViews.PENDING);
        setPendingError(false);
      }

      console.log(connector);

      if (connector instanceof WalletConnectConnector) {
        connector.walletConnectProvider = undefined;
      }

      if (connector) {
        activate(connector, undefined, true).catch((error) => {
          console.log("Error connecting to wallet", error);
          setPendingError(true);
          setWalletView(WalletViews.ACCOUNT);
        });
      }
    },
    [activate, previousConnector]
  );

  const getModalContent = useCallback(() => {
    if (error) {
      if (error instanceof UnsupportedChainIdError) {
        return (
          <Typography mb={2} variant="subtitle1">
            Unsuppported chain! Please switch the network!
          </Typography>
        );
      }
    }

    return walletView === WalletViews.PENDING ? (
      <SpinnerWrapper>
        <CircularProgress />
      </SpinnerWrapper>
    ) : (
      Object.entries(SUPPORTED_WALLETS).map(([key, { connector, name }]) => (
        <Button
          fullWidth
          key={key}
          sx={{ marginBottom: "10px" }}
          onClick={() => tryActivation(connector)}
          variant="contained"
        >
          {name}
        </Button>
      ))
    );
  }, [error, tryActivation, walletView]);

  return (
    <div>
      <Modal
        open={isModalOpen}
        onClose={() => closeModal()}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ModalContent>
          <Typography mb={2} variant="subtitle1">
            {active ? "Change Wallet" : "Connect Wallet"}
          </Typography>

          {pendingError || error ? (
            <ErrorText mb={2} variant="subtitle1">
              Error connecting to the wallet! Please try again.
            </ErrorText>
          ) : null}

          <div>{getModalContent()}</div>
        </ModalContent>
      </Modal>
    </div>
  );
}
