import { Field } from "../../models/Field";
import ICreateFieldDTO from "../../dtos/ICreateFieldDTO";

export default interface IFieldsRepository {
  create(data: ICreateFieldDTO): Promise<Field>;
  save(field: Field): Promise<Field>;
}