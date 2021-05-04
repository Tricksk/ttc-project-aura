import { getRepository, Repository } from 'typeorm';
import IClientsRepository from './interfaces/IClientsRepository';

import Client from '../models/Client';
import ICreateClientDTO from '../dtos/ICreateClientDTO';

export class ClientsRepository implements IClientsRepository {

  private ormRepository: Repository<Client>;

  constructor() {
    this.ormRepository = getRepository(Client);
  }

  public async create(data: ICreateClientDTO): Promise<Client> {
    return this.ormRepository.create({ ...data });
  }

  public async save(client: Client): Promise<Client> {
    return this.ormRepository.save(client);
  }

  public async list(): Promise<Client[]> {
    return this.ormRepository.find();
  }
}
