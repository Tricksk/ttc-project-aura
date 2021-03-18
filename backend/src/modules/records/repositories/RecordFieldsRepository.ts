import { Repository, getRepository } from 'typeorm';
import IRecordFieldsRepository from './interfaces/IRecordFieldsRepository';

import ICreateRecordFieldsDTO from '../dtos/ICreateRecordFieldsDTO';
import { RecordFields } from '../models/RecordField';

export class RecordFieldsRepository implements IRecordFieldsRepository {

  private ormRepository: Repository<RecordFields>;

  constructor() {
    this.ormRepository = getRepository(RecordFields);
  }

  public async create(data: ICreateRecordFieldsDTO): Promise<RecordFields> {
    const recordFields = this.ormRepository.create({ ...data });

    return this.ormRepository.save(recordFields);
  }

  public async save(recordFields: RecordFields): Promise<RecordFields> {
    return this.ormRepository.save(recordFields);
  }
}