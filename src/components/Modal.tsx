import React, { useContext } from "react";
import styled from "styled-components";
import { GrFormClose } from "react-icons/gr";
import { ModalContext } from "../context/ModalContext";

const ModalContainer = styled.div`
  background: rgba(0, 0, 0, 0.4);
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  z-index: 2;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContent = styled.div`
  background: white;
  width: 35%;
  padding: 2rem;
  border-radius: 10px;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CloseButton = styled.button`
  background: transparent;
  outline: 0;
  border: 0;
  font-size: 2rem;
  cursor: pointer;
`;

export default function Modal() {
  const ModalFeatures = useContext(ModalContext);
  const setIsOpen = ModalFeatures?.setIsOpen;

  return (
    <ModalContainer>
      <ModalContent>
        <Header>
          <h2 className="Heading">Update Folder Name</h2>
          <CloseButton
            onClick={() => {
              if (setIsOpen) setIsOpen(false);
            }}
          >
            <GrFormClose />
          </CloseButton>
        </Header>
      </ModalContent>
    </ModalContainer>
  );
}
