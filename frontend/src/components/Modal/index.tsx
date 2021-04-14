import { Button, IconButton } from '@material-ui/core';
import React, { useCallback } from 'react';
import { FiSave, FiX, FiXCircle } from 'react-icons/fi';
import { useModal } from '../../shared/hooks/modal';

import { Container, Background, ModalFooter, ModalHeader, ModalTitle, ModalWrapper, useStyles } from './styles';

export interface IModalProps {
  title: string;
  content: JSX.Element;
}

const Modal: React.FC<IModalProps> = ({ title, content }) => {
  const classes = useStyles();
  const { setModal } = useModal();

  const handleCloseModal = useCallback(() => {
    setModal(undefined);
  }, [])

  return (
    <>
      <Container>
        <ModalWrapper>

          <ModalHeader>
            <ModalTitle>{title}</ModalTitle>

            <IconButton onClick={handleCloseModal}>
              <FiX color="var(--gray-2)" size={24} />
            </IconButton>
          </ModalHeader>

          <div>
            {content}
          </div>

          <ModalFooter>
            <Button
              startIcon={<FiSave size={20} color="var(--white)" />}
              className={classes.buttonPrimary}>
              Salvar
            </Button>
            <Button
              startIcon={<FiXCircle size={20} color="var(--white)" />}
              className={classes.buttonCancel}>
              Cancelar
            </Button>
          </ModalFooter>
        </ModalWrapper>
      </Container>
      <Background onClick={handleCloseModal} />
    </>
  );
}

export default Modal;