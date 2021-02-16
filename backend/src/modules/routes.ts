import { Router } from 'express';

import clientsRouter from './clients/routes/clients.routes';
import appointmentsRouter from './appointments/routes/appointments.routes';
import recordsRouter from './records/routes/records.routes';
import fieldsRouter from './fields/routes/fields.routes';
import servicesRouter from './services/routes/services.routes';
import usersRouter from './users/routes/users.routes';
import sessionsRouter from './sessions/routes/sessions.routes';

import authenticateMiddleware from '../shared/middlewares/authenticate.middlewares';

const routes = Router();

routes.use('/clients', authenticateMiddleware, clientsRouter);
routes.use('/appointments', authenticateMiddleware, appointmentsRouter);
routes.use('/records', authenticateMiddleware, recordsRouter);
routes.use('/fields', authenticateMiddleware, fieldsRouter);
routes.use('/services', authenticateMiddleware, servicesRouter);
routes.use('/users', authenticateMiddleware, usersRouter);

routes.use('/sessions', sessionsRouter);

export default routes;