import React, { useCallback, useEffect, useState } from 'react';
import DayPicker, { DayModifiers, Modifier } from 'react-day-picker';
import { useModal } from '../../../shared/hooks/modal';

import 'react-day-picker/lib/style.css'
import Button from '../../../components/Button';

import { FiCalendar } from 'react-icons/fi';
import Appointment from './Appointment';
import NextAppointment from './NextAppointment';

import {
  Container, Columns, Column, Title, InfoDate,
  SubTitle, Wrapper, DashboardHeader, Calendar, DatePicker
} from './styles';
import NewAppointment from './NewAppointment';

const configDayPicker: Modifier[] = [
  { before: new Date() },
  { daysOfWeek: [0, 6] }
];

const dayPickerConfig = {
  fromMonth: new Date(),
  weekdaysShort: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'],
  months: [
    'Janeiro', 'Fevereiro',
    'Março', 'Abril', 'Maio',
    'Junho', 'Julho', 'Agosto',
    'Setembro', 'Outubro', 'Novembro',
    'Dezembro'
  ],
  modifiers: {
    available: {
      daysOfWeek: [1, 2, 3, 4, 5]
    }
  }
}

const Dashboard: React.FC = () => {
  const { setModal } = useModal();

  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [currentMonth, setCurrentMonth] = useState<number>(selectedDate.getMonth());

  const handleDateChange = useCallback((day: Date, modifiers: DayModifiers) => {
    if (modifiers.available)
      setSelectedDate(day);
  }, []);

  const handleMonthChange = useCallback((month: Date) => {
    setCurrentMonth(month.getMonth());
  }, []);

  const handleOpenModal = useCallback(() => {
    setModal({
      title: 'Novo Agendamento',
      content: <NewAppointment />
    })
  }, []);

  useEffect(() => {
    // api.get()
  }, [])

  return (
    <Container>
      <DashboardHeader>
        <Title>Horários Agendados</Title>
        <InfoDate>Hoje | Dia 09 | Terça-feira</InfoDate>
        <Button onClick={handleOpenModal}>
          <FiCalendar size={20} color="var(--white)" />
          <p>Novo Agendamento</p>
        </Button>
      </DashboardHeader>

      <Columns>
        <Column>
          <Wrapper>
            <SubTitle>Próximo atendimento</SubTitle>
            <NextAppointment />
          </Wrapper>

          <Wrapper>
            <SubTitle border >Manhã</SubTitle>
            <Appointment />
            <Appointment />
          </Wrapper>

          <Wrapper>
            <SubTitle border >Tarde</SubTitle>
            <Appointment />
            <Appointment />
          </Wrapper>
        </Column>

        <Column>
          <Calendar>
            <DatePicker>
              <DayPicker
                disabledDays={configDayPicker}
                onDayClick={handleDateChange}
                onMonthChange={handleMonthChange}
                selectedDays={selectedDate}
                {...dayPickerConfig}
              />
            </DatePicker>
          </Calendar>
        </Column>
      </Columns>

    </Container>
  );
}

export default Dashboard;