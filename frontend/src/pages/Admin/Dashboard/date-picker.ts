import { shade } from 'polished';
import styled from 'styled-components';

import ArrowLeftIcon from '../../../assets/ArrowLeftIcon.svg'
import ArrowRightIcon from '../../../assets/ArrowRightIcon.svg'

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
