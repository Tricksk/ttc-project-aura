import { Router } from 'express';
import { FieldsService } from '../services/fields.service';
import { container } from 'tsyringe';

const routes = Router();

routes.post('/', async (request, response) => {
  const {
    ask,
    type,
    field_type,
    required
  } = request.body;

  const fieldsService = container.resolve(FieldsService);

  const client = await fieldsService.create({
    ask,
    type,
    field_type,
    required
  });

  return response.json(client);
});

export default routes;