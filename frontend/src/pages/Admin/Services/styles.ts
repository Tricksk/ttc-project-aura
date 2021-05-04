import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  width: calc(100% - 50px);
  height: 100%;
  overflow-y: auto;
  background-color: var(--white);
  padding: 20px 30px;
`;

export const ListTop = styled.div`
  display: flex;
  margin: 16px 0px;

  h1 {
    color: var(--gray);
    margin-right: 50px;
  }
`;

export const NovoUsuarioBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  height: 44px;
  width: 115px;
  background-color: var(--secundary);
  color: var(--white);
  border: 0;
  border-radius: 8px;
  padding: 10px;
  cursor: pointer;

  &:hover {
    background-color: ${shade(0.2, '#03A39C')}
  }

  svg {
    margin-right: 10px;
  }
`;
