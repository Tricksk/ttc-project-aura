import { Router } from 'express';
import { startOfHour, parseISO, isEqual } from 'date-fns';

const routes = Router();

interface AppointmentRequest {
  serviceId: string;
  clientId: string;
  date: Date;
}

const appointments: Array<AppointmentRequest> = [];

routes.post('/', (request, response) => {
  const {
    serviceId,
    clientId,
    selectedDate
  } = request.body;

  const parsedBirthday = startOfHour(parseISO(selectedDate));

  if (appointments.find(a => isEqual(parsedBirthday, a.date))) {
    return response.status(400).json({ message: 'Date unvaliable' });
  }

  const appointment = {
    serviceId,
    clientId,
    date: parsedBirthday
  };

  appointments.push(appointment);

  return response.json(appointment);
});

export default routes;