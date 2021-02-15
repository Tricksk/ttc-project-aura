import { Router } from 'express';
import { startOfDay, parseISO } from 'date-fns';
import { ClientsService } from '../services/clients.service';

const routes = Router();
const clientsService = new ClientsService();

routes.post('/', async (request, response) => {
  const {
    name,
    sex,
    works_seated,
    birthday,
    cellphone,
    contact,
    contact_cellphone
  } = request.body;

  const parsedBirthday = startOfDay(parseISO(birthday));

  const client = await clientsService.create({
    name,
    sex,
    works_seated,
    birthday: parsedBirthday,
    cellphone,
    contact,
    contact_cellphone
  });

  return response.json(client);
});

export default routes;