import { Router } from 'express';
import { uuid } from 'uuidv4';
import { startOfHour, parseISO } from 'date-fns';

const routes = Router();

routes.post('/', (request, response) => {
  const {
    name,
    sex,
    worksSeated,
    birthday,
    cellphone,
    contact,
    contactCellphone
  } = request.body;

  const parsedBirthday = startOfHour(parseISO(birthday));

  const client = {
    id: uuid(),
    name,
    sex,
    worksSeated,
    parsedBirthday,
    cellphone,
    contact,
    contactCellphone
  };

  return response.json(client);
});

export default routes;