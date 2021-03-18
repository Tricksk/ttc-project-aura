import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { RecordFields } from './RecordField';

@Entity('records')
export class Record {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar')
  name: string;

  @OneToMany(
    () => RecordFields,
    record_fields => record_fields.record,
    { eager: true, cascade: ['insert'] }
  )
  record_fields: RecordFields[];
}