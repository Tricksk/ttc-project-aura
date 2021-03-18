import { Field } from "../../models/Field";
import ICreateFieldDTO from "../../dtos/ICreateFieldDTO";

export default interface IFieldsRepository {
  listAll(): Promise<Field[]>;

  findByIds(ids: string[]): Promise<Field[]>
  create(data: ICreateFieldDTO): Promise<Field>;
  save(field: Field): Promise<Field>;
}