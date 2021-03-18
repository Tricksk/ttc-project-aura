import { Repository, getRepository } from 'typeorm';
import IFieldsRepository from './interfaces/IFieldsRepository';

import { Field } from "../models/Field";
import ICreateFieldDTO from '../dtos/ICreateFieldDTO';

export class FieldsRepository implements IFieldsRepository {

  private ormRepository: Repository<Field>;

  constructor() {
    this.ormRepository = getRepository(Field);
  }

  public async listAll(): Promise<Field[]> {
    return this.ormRepository.find();
  }

  public async findByIds(ids: string[]): Promise<Field[]> {
    return this.ormRepository.findByIds(ids);
  }

  public async create(data: ICreateFieldDTO): Promise<Field> {
    return this.ormRepository.create({ ...data });
  }

  public async save(field: Field): Promise<Field> {
    return this.ormRepository.save(field);
  }
}