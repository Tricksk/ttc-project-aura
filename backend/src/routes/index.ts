import { Router } from 'express';
import clientsRouter from './clients.routes';
import appointmentsRouter from './appointments.routes';

const routes = Router();

routes.use('/clients', clientsRouter);
routes.use('/appointments', appointmentsRouter);

export default routes;