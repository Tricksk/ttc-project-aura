import { Repository, getRepository } from 'typeorm';
import IRecordsRepository from './interfaces/IRecordsRepository';

import { Record } from '../models/Record';
import ICreateRecordDTO from '../dtos/ICreateRecordDTO';

export class RecordsRepository implements IRecordsRepository {

  private ormRepository: Repository<Record>;

  constructor() {
    this.ormRepository = getRepository(Record);
  }

  public listAll(): Promise<Record[]> {
    return this.ormRepository.find();
  }

  public async findById(id: string): Promise<Record | undefined> {
    return await this.ormRepository.findOne(id);
  }

  public async findByName(name: string): Promise<Record | undefined> {
    return this.ormRepository.findOne({
      where: { name }
    });
  }

  public async delete(id: string): Promise<void> {
    await this.ormRepository.delete({ id: id });
  }

  public async create({ name, fields }: ICreateRecordDTO): Promise<Record> {
    const record = this.ormRepository.create({ name, record_fields: fields });

    return await this.ormRepository.save(record);
  }

  public async save(record: Record): Promise<Record> {
    return this.ormRepository.save(record);
  }
}