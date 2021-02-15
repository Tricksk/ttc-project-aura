import { EntityRepository, Repository } from 'typeorm';
import { Record } from '../models/Record';

@EntityRepository(Record)
export class RecordsRepository extends Repository<Record> {

}