import { Router } from 'express';
import { container } from 'tsyringe';
import SessionsService from '../services/sessions.service';

const routes = Router();

routes.post('/', async (request, response) => {
  const { login, password } = request.body;

  const sessionsService = container.resolve(SessionsService);

  const { user, token } = await sessionsService.authenticate({
    login,
    password
  });

  return response.json({ user, token });
});

export default routes;