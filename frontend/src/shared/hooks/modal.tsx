import React, { createContext, useCallback, useContext, useState } from "react";
import Modal, { IModalProps } from "../../components/Modal";

interface ModalContextData {
  modal?: IModalProps;
  setModal(modal?: IModalProps): void;
}

const ModalContext = createContext<ModalContextData>({} as ModalContextData);

const ModalProvider: React.FC = ({ children }) => {
  const [modal, setModal] = useState<IModalProps | undefined>();

  return (
    <ModalContext.Provider value={{ setModal, modal }}>
      {children}

      {modal && <Modal title={modal.title} content={modal.content} />}
    </ModalContext.Provider>
  );
}

function useModal(): ModalContextData {
  const context = useContext(ModalContext);

  if (!context)
    throw new Error('useModal must be used within a ModalProvider.');

  return context;
}

export { ModalProvider, useModal };
