import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.button`
  background-color: var(--secundary);
  color: var(--white);
  font-weight: 500;

  border: 0;
  border-radius: 10px;

  padding: 0 16px;
  margin-top: 16px;
  height: 56px;
  width: 100%;

  transition: background .2s ease-in-out;
  cursor: pointer;

  &:hover {
    background: ${shade(0.2, '#03A39C')}
  }
`;