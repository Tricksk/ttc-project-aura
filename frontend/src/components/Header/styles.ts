import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  background-color: var(--primary);

  width: 100%;
  height: var(--header-height);

  box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.2);

  display: flex;
  align-items: center;

  position: relative;
  z-index: 3;

  > div:last-child {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
  }
`;

export const LogoContainer = styled.div`
  width: var(--sidebar-width);
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    height: calc(100% - 25px);
  }
`;

export const UserLoggedInfo = styled.div`
  display: flex;
  align-items: center;

  div:first-child {
    margin-right: 16px;

    img {
      height: 80px;
      width: 80px;
      border-radius: 50%;
      object-fit: cover;
    }
  }

  p {
    font-size: 20px;
    font-weight: 400;
  }

  p:last-child {
    color: var(--secundary);
    font-weight: 500;
  }
`;

export const LogoutButton = styled.button`
  background-color: transparent;
  border: 0;
  border-radius: 50%;
  justify-self: end;

  width: 80px;
  height: 80px;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${shade(0.2, '#552C49')}
  }

  cursor: pointer;

  svg {
    opacity: 0.5
  }
`;

export const HeaderContent = styled.div`
  margin: 0px 20px;
`;