import ICreateRecordDTO from "../../dtos/ICreateRecordDTO";
import { Record } from '../../models/Record';

export default interface IRecordsRepository {
  listAll(): Promise<Record[]>;
  findByName(name: string): Promise<Record | undefined>;

  delete(id: string): Promise<void>
  findById(id: string): Promise<Record | undefined>
  create(data: ICreateRecordDTO): Promise<Record>;
  save(record: Record): Promise<Record>;
}