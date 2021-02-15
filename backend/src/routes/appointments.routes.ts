import { Router } from 'express';
import { parseISO } from 'date-fns';
import { AppointmentsRepository } from '../repositories/appointments.repo';
import { AppoitmentsService } from '../services/appointments.service';
import { getCustomRepository } from 'typeorm';

const routes = Router();

routes.get('/', async (_, response) => {
  const appointmentsRepository = getCustomRepository(AppointmentsRepository);

  const appointments = await appointmentsRepository.find();

  response.json(appointments);
});

routes.post('/', async (request, response) => {
  const {
    serviceId,
    clientId,
    selectedDate
  } = request.body;

  const parsedDate = parseISO(selectedDate);

  const appoitmentsService = new AppoitmentsService();

  const appointment = await appoitmentsService.create({
    serviceId,
    clientId,
    selectedDate: parsedDate
  });

  return response.json(appointment);
});

export default routes;