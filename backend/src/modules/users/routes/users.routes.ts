import { Router } from 'express';
import { container } from 'tsyringe';
import { UsersService } from '../services/users.service';

const routes = Router();

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