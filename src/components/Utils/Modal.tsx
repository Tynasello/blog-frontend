import React from "react";
import styled from "styled-components";
import { Button } from "./Button";
import ReactDom from "react-dom";

interface ModalProps {
  isOpen: boolean;
  closeModal: any;
  children?: any;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  closeModal,
  children,
}) => {
  if (!isOpen) return null;

  return ReactDom.createPortal(
    <>
      <Overlay />
      <ModalContainer>
        <Button onClick={closeModal}>Close</Button>
        {children}
      </ModalContainer>
    </>,
    document.getElementById("portal")!
  );
};
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.7);
`;
const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80vw;

  background-color: #fff;
  padding: 50px;
  z-index: 1000;
`;
