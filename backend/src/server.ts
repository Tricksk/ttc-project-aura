import 'reflect-metadata';

import express from 'express';
import 'express-async-errors';

import routes from './routes';
import errorsMiddlewares from './shared/middlewares/errors.middlewares';

import './database';

const app = express();

app.use(express.json());
app.use(routes);

// Middlewares
app.use(errorsMiddlewares);

app.listen(3333, () => {
  console.clear();
  console.log('! Server started on port 3333 ! \n');
});