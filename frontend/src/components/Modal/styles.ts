import { makeStyles } from '@material-ui/core';
import { shade } from 'polished';
import styled from 'styled-components';

export const useStyles = makeStyles({
  buttonPrimary: {
    backgroundColor: 'var(--secundary)',
    color: 'var(--white)',

    fontFamily: 'Roboto Slab',
    textTransform: 'none',
    fontWeight: 'normal',

    padding: '8px 16px',

    '&:hover': {
      backgroundColor: shade(0.2, '#03A39C')
    },

    margin: '0px 10px'
  },
  buttonCancel: {
    backgroundColor: 'var(--gray-5)',
    color: 'var(--white)',

    fontFamily: 'Roboto Slab',
    textTransform: 'none',
    fontWeight: 'normal',

    padding: '8px 16px',

    '&:hover': {
      backgroundColor: shade(0.2, '#BEBEBE')
    }
  }
})

export const Container = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  color: var(--gray-2);
`;

export const Background = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;

  background-color: #00000050;
  z-index: 3;
`;

export const ModalWrapper = styled.div`
  position: relative;

  max-height: 600px;
  width: 50vw;

  background-color: var(--white);
  border-radius: 10px;

  padding: 20px 30px;

  z-index: 4;
`;

export const ModalHeader = styled.div`
  button {
    position: absolute;

    right: 0;
    top: 0;
  }
`;

export const ModalTitle = styled.h2`
  border-bottom: 1px solid var(--gray-2);

  width: 100%;
`;

export const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;

  margin-top: 20px;
`;

