import { inject, injectable } from "tsyringe";

import IFieldsRepository from "../repositories/interfaces/IFieldsRepository";
import { Field } from "../models/Field";

interface Request {
  ask: string;
  type: string;
  field_type: string;
  required: boolean;
}

@injectable()
export class FieldsService {
  constructor(
    @inject('FieldsRepository')
    private fieldsRepository: IFieldsRepository
  ) { }

  public async create({ ask, type, field_type, required }: Request)
    : Promise<Field> {

    const field = await this.fieldsRepository.create({
      ask,
      type,
      field_type,
      required
    });

    await this.fieldsRepository.save(field);

    return field;
  }
}