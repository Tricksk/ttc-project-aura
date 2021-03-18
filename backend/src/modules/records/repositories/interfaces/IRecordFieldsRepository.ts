import ICreateRecordFieldsDTO from "../../dtos/ICreateRecordFieldsDTO";
import { RecordFields } from "../../models/RecordField";

export default interface IRecordFieldsRepository {
  create(data: ICreateRecordFieldsDTO): Promise<RecordFields>
  save(recordFields: RecordFields): Promise<RecordFields>
}