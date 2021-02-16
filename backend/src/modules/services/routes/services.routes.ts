import { Router } from 'express';
import { ServicesService } from '../services/services.service';
import { getCustomRepository } from 'typeorm';
import { container } from 'tsyringe';

const routes = Router();

// routes.get('/', async (request, response) => {
//   const servicesRepository = getCustomRepository(ServicesRepository);

//   const services = await servicesRepository.find();

//   return response.json(services);
// });

routes.post('/', async (request, response) => {
  const {
    name,
    duration,
    use_record,
    record_id
  } = request.body;

  const servicesService = container.resolve(ServicesService);

  const client = await servicesService.create({
    name,
    duration,
    use_record,
    record_id
  });

  return response.json(client);
});

export default routes;