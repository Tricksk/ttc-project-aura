import IClientsRepository from '../repositories/interfaces/IClientsRepository';

import Client from '../models/Client';
import { inject, injectable } from 'tsyringe';

interface Request {
  name: string;
  sex: 'F' | 'M';
  works_seated: boolean;
  birthday: Date;
  cellphone: string;
  contact: string;
  contact_cellphone: string;
}

@injectable()
export class ClientsService {
  constructor(
    @inject('ClientsRepository')
    private clientsRepository: IClientsRepository
  ) { }

  public async create({
    name,
    sex,
    works_seated,
    birthday,
    cellphone,
    contact,
    contact_cellphone
  }: Request): Promise<Client> {
    const client = await this.clientsRepository.create({
      name,
      sex,
      works_seated,
      birthday,
      cellphone,
      contact,
      contact_cellphone
    });

    await this.clientsRepository.save(client);

    return client;
  }
}