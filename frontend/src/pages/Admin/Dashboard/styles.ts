import styled, { css } from 'styled-components';
import { shade } from 'polished';

import ArrowLeftIcon from '../../../assets/ArrowLeftIcon.svg'
import ArrowRightIcon from '../../../assets/ArrowRightIcon.svg'
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

export const DatePicker = styled.div`
  .DayPicker {
    border-radius: 0.6rem;
  }

  .DayPicker-wrapper {
    padding-bottom: 0;
    background: var(--primary-4);
    border-radius: 0.6rem;
  }

  .DayPicker,
  .DayPicker-Month {
    width: 100%;
  }

  .DayPicker-NavButton {
    color: #ffffff40 !important;
  }
  .DayPicker-Month {
    border-collapse: separate;
    border-spacing: 8px;
    margin: 1rem 0 0 0;
    background-color: var(--primary);
    border-radius: 0 0 10px 10px;
  }

  .DayPicker-Caption {
    margin-bottom: 1rem;
    padding: 0 1rem;
    color: #f4ede8;

    > div {
      text-align: center;
    }
  }

  .DayPicker-Weekday {
    color: #ffffff40;
  }

  .DayPicker-Day {
    width: 2.5rem;
    height: 2.5rem;
  }

  .DayPicker-Day--available:not(.DayPicker-Day--outside) {
    background: var(--primary-4);
    border-radius: 0.6rem;
  }

  .DayPicker:not(.DayPicker--interactionDisabled)
    .DayPicker-Day:not(.DayPicker-Day--disabled):not(.DayPicker-Day--selected):not(.DayPicker-Day--outside):hover {
    background: ${shade(0.1, '#03A39C')};
  }

  .DayPicker-Day--today {
    font-weight: normal;
    color: var(--white);
  }

  .DayPicker-Day--disabled {
    color: #ffffff40;
    background: transparent !important;
  }

  .DayPicker-Day--selected {
    background: var(--secundary) !important;
    border-radius: 0.6rem;
    color: var(--white) !important;
  }

  .DayPicker-NavButton--prev {
    background: url(${ArrowLeftIcon}) no-repeat center;
    right: auto;
    left: 1.5em;
    margin-right: 0;
  }

  .DayPicker-NavButton--next {
    background: url(${ArrowRightIcon}) no-repeat center;
  }
`;
