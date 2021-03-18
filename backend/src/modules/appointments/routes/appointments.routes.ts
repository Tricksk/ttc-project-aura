import { Router } from 'express';
import { container } from 'tsyringe';

import { parseISO } from 'date-fns';

import { AppoitmentsService } from '../services/appointments.service';
import { AppointmentsRepository } from '../repositories/AppointmentsRepository';

const routes = Router();

routes.get('/today', async (_, response) => {
  const appoitmentsService = container.resolve(AppoitmentsService);

  const appointments = await appoitmentsService.listAllAppointmentsFromCurrentDay();

  response.json(appointments);
});

routes.post('/', async (request, response) => {
  const {
    serviceId,
    clientId,
    selectedDate
  } = request.body;

  const parsedDate = parseISO(selectedDate);

  const appoitmentsService = container.resolve(AppoitmentsService);

  const appointment = await appoitmentsService.create({
    serviceId,
    clientId,
    selectedDate: parsedDate
  });

  return response.json(appointment);
});

export default routes;