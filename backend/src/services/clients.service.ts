import { getCustomRepository } from 'typeorm';
import { ClientsRepository } from '../repositories/clients.repo';

import Client from '../models/Client';

interface Request {
  name: string;
  sex: 'F' | 'M';
  works_seated: boolean;
  birthday: Date;
  cellphone: string;
  contact: string;
  contact_cellphone: string;
}

export class ClientsService {
  public async create({
    name,
    sex,
    works_seated,
    birthday,
    cellphone,
    contact,
    contact_cellphone
  }: Request): Promise<Client> {
    const clientsRepository = getCustomRepository(ClientsRepository);

    const client = await clientsRepository.create({
      name,
      sex,
      works_seated,
      birthday,
      cellphone,
      contact,
      contact_cellphone
    });

    await clientsRepository.save(client);

    return client;
  }
}