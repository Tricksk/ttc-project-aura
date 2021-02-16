import { Router } from 'express';
import { getCustomRepository } from 'typeorm';
import { RecordsService } from '../services/records.service';
import { container } from 'tsyringe';

const routes = Router();

// routes.get('/', async (request, response) => {
//   const recordsRepository = getCustomRepository(RecordsRepository);

//   const records = await recordsRepository.find({ loadEagerRelations: true });

//   response.json(records);
// });

routes.post('/', async (request, response) => {
  const { name } = request.body;

  const recordsService = container.resolve(RecordsService);

  const record = await recordsService.create(name);

  return response.json(record);
});

export default routes;