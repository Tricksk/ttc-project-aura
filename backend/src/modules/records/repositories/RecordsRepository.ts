import { Repository, getRepository } from 'typeorm';
import IRecordsRepository from './interfaces/IRecordsRepository';

import { Record } from '../models/Record';
import ICreateRecordDTO from '../dtos/ICreateRecordDTO';

export class RecordsRepository implements IRecordsRepository {

  private ormRepository: Repository<Record>;

  constructor() {
    this.ormRepository = getRepository(Record);
  }

  public async findByName(name: string): Promise<Record | undefined> {
    return this.ormRepository.findOne({
      where: {
        name
      }
    });
  }

  public async create(data: ICreateRecordDTO): Promise<Record> {
    return this.ormRepository.create({ ...data });
  }

  public async save(record: Record): Promise<Record> {
    return this.ormRepository.save(record);
  }
}