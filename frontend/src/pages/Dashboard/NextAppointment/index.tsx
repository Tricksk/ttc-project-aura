import React from 'react';
import { FiClock } from 'react-icons/fi';

import { Container, NextAppointmentInfo, NextAppointmentHour } from './styles';

const NextAppointment: React.FC = () => {
  return (
    <Container>
      <NextAppointmentInfo>
        <p>Patrick Braga</p>
        <span>Massagem Relaxante</span>
      </NextAppointmentInfo>
      <NextAppointmentHour>
        <FiClock size={30} color="var(--secundary)" />
        <p>08:00</p>
      </NextAppointmentHour>
    </Container>
  );
}

export default NextAppointment;