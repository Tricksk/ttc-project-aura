import { inject, injectable } from 'tsyringe';
import IRecordsRepository from '../repositories/interfaces/IRecordsRepository';
import IFieldsRepository from '../../fields/repositories/interfaces/IFieldsRepository';

import { Record } from '../models/Record';
import AppError from '../../../shared/errors/AppError';

interface ICreateRecordRequest {
  name: string;
  fields: Array<{
    id: string;
    order: number;
  }>
}

@injectable()
export class RecordsService {

  constructor(
    @inject('RecordsRepository')
    private recordsRepository: IRecordsRepository,

    @inject('FieldsRepository')
    private fieldsRepository: IFieldsRepository
  ) { }

  public async create({ name, fields }: ICreateRecordRequest): Promise<Record> {
    const existingRecordWithBothName = await this.recordsRepository.findByName(name);

    if (existingRecordWithBothName)
      throw new AppError(400, 'Record already exists.');

    const findedFields = await this.fieldsRepository
      .findByIds(fields.map(x => x.id));

    if (findedFields.length !== fields.length)
      throw new AppError(400, 'Fields not finded.');

    const fieldsMapped = fields.map(field => ({
      field_id: field.id,
      order: field.order
    }));

    return await this.recordsRepository.create({ name, fields: fieldsMapped });
  }
}