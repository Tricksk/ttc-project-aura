import { inject, injectable } from 'tsyringe';
import IRecordsRepository from '../repositories/interfaces/IRecordsRepository';

import { Record } from '../models/Record';
import AppError from '../../../shared/errors/AppError';

@injectable()
export class RecordsService {

  constructor(
    @inject('RecordsRepository')
    private recordsRepository: IRecordsRepository
  ) { }

  public async create(name: string): Promise<Record> {
    const existingRecordWithBothName = await this.recordsRepository.findByName(name);

    if (existingRecordWithBothName)
      throw new AppError(400, 'Record already exists.');

    const record = await this.recordsRepository.create({ name });

    await this.recordsRepository.save(record);

    return record;
  }
}