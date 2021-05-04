import { Router } from 'express';
import { container } from 'tsyringe';
import { getCustomRepository } from 'typeorm';
import { UsersRepository } from '../repositories/UsersRepository';
import { UsersService } from '../services/users.service';

const routes = Router();

routes.get('/', async (request, response) => {
  const usersRepository = getCustomRepository(UsersRepository);

  const users = await usersRepository.list();

  return response.json(users);
});

routes.post('/', async (request, response) => {
  const { name, login, password } = request.body;

  const usersService = container.resolve(UsersService);

  const user = await usersService.create({
    name,
    login,
    password
  });

  return response.json(user);
});

export default routes;