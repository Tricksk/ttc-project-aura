import { createConnection } from 'typeorm';

try {
  createConnection();
} catch (ex) {
  console.log('Falha ao realizar conexão com o banco.')
}