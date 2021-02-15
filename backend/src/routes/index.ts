import { Router } from 'express';
import clientsRouter from './clients.routes';
import appointmentsRouter from './appointments.routes';
import recordsRouter from './records.routes';

const routes = Router();

routes.use('/clients', clientsRouter);
routes.use('/appointments', appointmentsRouter);
routes.use('/records', recordsRouter);

export default routes;