import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 414px;
  border: 1px solid var(--gray);
  border-radius: 5px;
  padding: 8px 18px;
  font-size: 16px;

  input {
    flex: 1;
    border: 0;
    color: var(--gray-3);
  }
`;
