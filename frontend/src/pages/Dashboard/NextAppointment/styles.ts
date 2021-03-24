import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  position: relative;

  background-color: #783f680d;
  height: 112px;
  border-radius: 10px;

  padding: 40px 50px;

  &::before {
    content: ' ';
    position: absolute;
    left: 0;
    background-color: var(--secundary);
    height: calc(100% - 30px);
    width: 6px;
    border-radius: 0 20px 20px 0;
  }
`;

export const NextAppointmentInfo = styled.div`
  p {
    color: var(--gray-2);
    font-size: 24px;
    font-weight: 500;
  }

  span {
    color: var(--gray-4);
    font-size: 16px;
  }
`;

export const NextAppointmentHour = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    font-size: 20px;
    color: var(--primary-5);
    margin-left: 10px;
  }
`;
