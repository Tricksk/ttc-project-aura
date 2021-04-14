import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 88px;
  border-radius: 10px;

  & + div {
    margin-top: 18px;
  }
`;

export const AppointmentHour = styled.div`
  display: flex;
  align-items: center;
  margin: 25px;

  p {
    font-size: 16px;
    color: var(--gray-2);
    margin-left: 10px;
  }
`;

export const AppointmentContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #783f680d;
  height: 100%;
  width: 80%;
  border-radius: 10px;
  padding: 24px 28px;
`;

export const AppointmentInfo = styled.div`
  p {
    color: var(--gray-2);
    font-size: 20px;
    font-weight: 500;
  }

  span {
    color: var(--gray-4);
    font-size: 14px;
  }
`;

export const RemoveButton = styled.button`
  background-color: transparent;
  border: 0;
  border-radius: 50%;

  width: 50px;
  height: 50px;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);

    svg {
      color: var(--error) !important;
    }
  }

  cursor: pointer;
`;