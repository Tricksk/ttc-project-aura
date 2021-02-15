import { Router } from 'express';
import { getCustomRepository } from 'typeorm';
import { RecordsRepository } from '../repositories/records.repo';
import { RecordsService } from '../services/records.service';

const routes = Router();
const recordsService = new RecordsService();

routes.get('/', async (request, response) => {
  const recordsRepository = getCustomRepository(RecordsRepository);

  const records = await recordsRepository.find();

  response.json(records);
});

routes.post('/', async (request, response) => {
  const { name } = request.body;

  const record = await recordsService.create(name);

  return response.json(record);
});

export default routes;