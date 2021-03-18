import { Router } from 'express';
import { RecordsService } from '../services/records.service';
import { container } from 'tsyringe';
import { RecordsRepository } from '../repositories/RecordsRepository';

const routes = Router();

routes.get('/', async (request, response) => {
  const recordsRepository = new RecordsRepository();

  const records = await recordsRepository.listAll();

  response.json(records);
});

routes.post('/', async (request, response) => {
  const { name, fields } = request.body;

  const recordsService = container.resolve(RecordsService);

  const record = await recordsService.create({ name, fields });

  return response.json(record);
});

export default routes;