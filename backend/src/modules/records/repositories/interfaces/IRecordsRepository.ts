import ICreateRecordDTO from "../../dtos/ICreateRecordDTO";
import { Record } from '../../models/Record';

export default interface IRecordsRepository {
  findByName(name: string): Promise<Record | undefined>;
  create(data: ICreateRecordDTO): Promise<Record>;
  save(record: Record): Promise<Record>;
}