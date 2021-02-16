import { EntityRepository, Repository, getRepository } from 'typeorm';
import ICreateServiceDTO from '../dtos/ICreateServiceDTO';
import Service from "../models/Service";

export class ServicesRepository {

  private ormRepository: Repository<Service>;

  constructor() {
    this.ormRepository = getRepository(Service);
  }

  public async create(data: ICreateServiceDTO): Promise<Service> {
    return this.ormRepository.create({ ...data });
  }

  public async save(service: Service): Promise<Service> {
    return this.ormRepository.save(service);
  }
}