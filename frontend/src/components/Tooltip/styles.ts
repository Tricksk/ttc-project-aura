import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  span {
    background-color: var(--secundary);
    color: var(--white);
    padding: 8px;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 500;

    visibility: hidden;
    opacity: 0;
    transition: opacity .2s ease-in-out;

    position: absolute;
    bottom: 150%;
    left: 50%;
    transform: translateX(-50%);
    width: 160px;

    &::before {
      content: '';
      border-style: solid;
      border-color: var(--secundary) transparent;
      border-width: 6px 6px 0 6px;
      bottom: 20px;

      position: absolute;
      top: 100%;
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;