import { getCustomRepository } from 'typeorm';
import { Record } from '../models/Record';
import { RecordsRepository } from '../repositories/records.repo';
import AppError from '../shared/errors/AppError';

export class RecordsService {
  public async create(name: string): Promise<Record> {
    const recordsRepository = getCustomRepository(RecordsRepository)

    const existingRecordWithBothName = await recordsRepository.findOne({ name });

    if (existingRecordWithBothName)
      throw new AppError(400, 'Record already exists.');

    const record = await recordsRepository.create({ name });

    recordsRepository.save(record);

    return record;
  }
}