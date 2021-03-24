import React from 'react';
import { FiCalendar } from 'react-icons/fi';
import Button from '../../components/Button';
import Appointment from './Appointment';
import NextAppointment from './NextAppointment';

import { Container, Columns, Column, Title, InfoDate, SubTitle, Wrapper, DashboardHeader } from './styles';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <DashboardHeader>
        <Title>Horários Agendados</Title>
        <InfoDate>Hoje | Dia 09 | Terça-feira</InfoDate>
        <Button>
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

        </Column>
      </Columns>

    </Container>
  );
}

export default Dashboard;