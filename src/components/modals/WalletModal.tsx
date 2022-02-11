import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useModalOpen } from "state/app/hooks";
import { ApplicationModal } from "state/app/types";
import { useSetModalOpen } from "state/app/hooks";
import dynamic from "next/dynamic";
import { useEffect } from "react";

const MetaMask = dynamic(() => import("components/connectors/MetaMask"), {
  ssr: false,
});

const WalletConnect = dynamic(
  () => import("components/connectors/WalletConnect"),
  {
    ssr: false,
  }
);

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

export default function WalletModal() {
  const isModalOpen = useModalOpen(ApplicationModal.WALLET);

  const closeModal = useSetModalOpen(null);

  useEffect(() => {});

  return (
    <div>
      <Modal
        open={isModalOpen}
        onClose={() => closeModal()}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography>Connect wallet with</Typography>

          <div>
            <WalletConnect />
            <MetaMask />
          </div>
        </Box>
      </Modal>
    </div>
  );
}
