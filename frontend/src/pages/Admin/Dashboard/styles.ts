import styled, { css } from 'styled-components';
interface SubTitleProps {
  border?: boolean;
}

export const Columns = styled.div`
  display: flex;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  & + div {
    margin-left: 10px;
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: auto;
  background-color: var(--white);
  padding: 20px 45px;
`;

export const Title = styled.h1`
  font-size: 36px;
  color: var(--gray-2);
`;

export const InfoDate = styled.p`
  font-size: 16px;
  color: var(--secundary);
  font-weight: bold;
  margin-top: 8px;
`;

export const SubTitle = styled.h2<SubTitleProps>`
  font-size: 20px;
  color: var(--primary-5);
  margin-top: 32px;
  margin-bottom: 24px;
  padding-bottom: 8px;

  ${props => props.border && css`
    border-bottom: 1px solid var(--gray-3);
  `}
`;

export const Wrapper = styled.div`
`;

export const DashboardHeader = styled.div`
  position: relative;

  button {
    position: absolute;
    top: 0;
    right: 0;
    margin: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    height: 45px;
    width: unset;

    svg {
      margin-right: 10px;
    }

    p {
      font-size: 16px;
      font-weight: 400;
    }
  }
`;

export const Calendar = styled.div`
  width: 360px;
  margin: 0 auto;
`;