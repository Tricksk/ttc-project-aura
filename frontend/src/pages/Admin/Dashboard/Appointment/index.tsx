import React from 'react';
import { FiClock, FiTrash2 } from 'react-icons/fi';

import {
  Container, AppointmentHour, AppointmentContent, AppointmentInfo, RemoveButton
} from './styles';

const Appointment: React.FC = () => {
  return (
    <Container>
      <AppointmentHour>
        <FiClock size={24} color="var(--secundary)" />
        <p>08:00</p>
      </AppointmentHour>
      <AppointmentContent>
        <AppointmentInfo>
          <p>Patrick Braga</p>
          <span>Massagem Relaxante</span>
        </AppointmentInfo>

        <RemoveButton>
          <FiTrash2 color="var(--gray-4)" size={30} />
        </RemoveButton>
      </AppointmentContent>
    </Container>
  );
}

export default Appointment;