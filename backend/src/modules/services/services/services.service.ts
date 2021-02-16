import { inject, injectable } from 'tsyringe';

import IServicesRepository from '../repositories/interfaces/IServicesRepository';

import Service from "../models/Service";

interface Request {
  name: string;
  duration: number;
  use_record: boolean;
  record_id: string;
}

@injectable()
export class ServicesService {

  constructor(
    @inject('ServicesRepository')
    private servicesRepository: IServicesRepository
  ) { }

  public async create({
    name,
    duration,
    use_record,
    record_id
  }: Request): Promise<Service> {
    let service = await this.servicesRepository.create({
      name,
      duration,
      use_record,
      record_id
    });

    await this.servicesRepository.save(service);

    return service;
  }
}