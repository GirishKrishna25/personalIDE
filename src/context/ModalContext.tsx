import { useState, createContext } from "react";

interface PopupFields {
  value: boolean; // if popup open or not
  type: string; // which type of popup it is
  identifier: {
    folderId: string; // the folder which is seclected
    cardId: string; // the card which is selected
  }
}

interface ModalContextType {
  isOpen: PopupFields;
  setIsOpen: (isOpen: PopupFields) => void;
}

export const ModalContext = createContext<ModalContextType | null>(null);

export default function ModalProvider({ children }: { children: any }) {
  const initialPopupFields: PopupFields = {
    value: false,
    type: "",
    identifier: {
      folderId: '',
      cardId: '',
    }
  }

  const [isOpen, setIsOpen] = useState<PopupFields>({...initialPopupFields});

  const makeAvailableGlobally: ModalContextType = {
    isOpen: isOpen,
    setIsOpen: setIsOpen
  };

  return (
    <ModalContext.Provider value={makeAvailableGlobally}>
      {children}
    </ModalContext.Provider>
  );
}
