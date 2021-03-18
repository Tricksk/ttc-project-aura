import 'reflect-metadata';
// import cors from 'cors';

import express from 'express';
import 'express-async-errors';

import routes from './modules/routes';
import errorsMiddlewares from './shared/middlewares/errors.middlewares';

import './database';
import './shared/container';

const app = express();

// app.use(cors())
app.use(express.json());
app.use(routes);

// Middlewares
app.use(errorsMiddlewares);

app.listen(3333, () => {
  console.clear();
  console.log('! Server started on port 3333 ! \n');
});