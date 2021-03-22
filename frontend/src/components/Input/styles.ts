import styled, { css } from 'styled-components';
import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  hasError: boolean;
}

export const Container = styled.div<ContainerProps>`
  background-color: var(--primary-2);

  border: 0;
  border-radius: 10px;
  border: 2px solid var(--primary-2);
  color: var(--gray);

  padding: 16px;
  width: 100%;

  display: flex;
  align-items: center;

  ${props => props.hasError && css`
    border-color: var(--error);
  `}

  ${props => props.isFocused && css`
    color: var(--secundary);
    border-color: var(--secundary);
  `}

  ${props => props.isFilled && css`
    color: var(--secundary);
  `}



  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: var(--white-2);

    &::placeholder {
      color: var(--gray);
    }
  }

  & + div {
    margin-top: 8px;
  }

  svg {
    margin-right: 16px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;

  svg {
    margin-right: 0;
    cursor: pointer;
  }

  &:hover span {
      opacity: 1;
      visibility: visible;
  }

  span {
    background-color: var(--error);

    &::before {
      border-color: var(--error) transparent;
    }
  }
`;