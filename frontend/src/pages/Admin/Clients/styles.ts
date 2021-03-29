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
