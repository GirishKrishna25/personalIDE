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

const EditCardModal = ({ setIsOpen }: { setIsOpen: any }) => {
  return (
    <>
      <Header>
        <h2 className="Heading">Edit Card Title</h2>
        <CloseButton
          onClick={() => {
            setIsOpen({
              value: false,
              type: "",
              identifier: {
                folderId: "",
                cardId: ""
              }
            });
          }}
        >
          <GrFormClose />
        </CloseButton>
      </Header>
    </>
  );
};

export default function Modal() {
  const ModalFeatures = useContext(ModalContext)!;
  const setIsOpen = ModalFeatures.setIsOpen;
  const isOpen = ModalFeatures.isOpen;
  return (
    <ModalContainer>
      <ModalContent>
        {isOpen.type === "1" && <EditCardModal setIsOpen={setIsOpen} />}
      </ModalContent>
    </ModalContainer>
  );
}
