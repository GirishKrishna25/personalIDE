import { useState, createContext } from "react";

interface ModalContextType {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export const ModalContext = createContext<ModalContextType | null>(null);

export default function ModalProvider({ children }: { children: any }) {
  const [isOpen, setIsOpen] = useState(false);

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
