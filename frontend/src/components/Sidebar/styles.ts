import styled from 'styled-components';

export const Container = styled.div`
  min-width: 490px;
  padding: 30px 0;

  background-color: var(--primary);

  display: flex;
  flex-direction: column;

  float: left;
  z-index: 2;

  > a {
    display: flex;
    align-items: center;

    text-decoration: none;

    height: 80px;
    width: 100%;

    border-radius: 0 10px 10px 0;

    transition: width .2s ease-in;

    &:hover {
      background-color: var(--primary-3);
    }

    &.active {
      background-color: var(--primary-4);
      width: calc(100% + 10px);
    }

    & + a {
      margin-top: 8px;
    }

    p {
      color: var(--white);
      font-size: 24px;
    }

    svg {
      margin: 0 40px 0 20px;
    }
  }
`;
