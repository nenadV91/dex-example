import { useState } from "react";
import { styled } from "@mui/system";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CurrencySearch from "components/CurrencySearch";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";

type CurrencyModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export enum CurrencyModalView {
  search,
  manage,
  importToken,
  importList,
}

const ModalContent = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 480px;
  background: white;
  padding: 1rem;
  border-radius: 10px;
`;

const ModalHeader = styled(`div`)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ModalBody = styled(`div`)``;

export default function CurrencyModal({ isOpen, onClose }: CurrencyModalProps) {
  const [modalView, setModalView] = useState<CurrencyModalView>(
    CurrencyModalView.search
  );

  let content = null;

  switch (modalView) {
    case CurrencyModalView.search:
      content = <CurrencySearch />;
  }

  return (
    <Modal onClose={onClose} open={isOpen}>
      <ModalContent>
        <ModalHeader>
          <Typography variant="body1">Select a token</Typography>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </ModalHeader>

        <ModalBody>{content}</ModalBody>
      </ModalContent>
    </Modal>
  );
}
