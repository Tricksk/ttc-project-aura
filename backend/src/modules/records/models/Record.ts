import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { RecordFields } from './RecordField';

@Entity('records')
export class Record {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar')
  name: string;

  @OneToMany(() => RecordFields, fields => fields.field)
  record_fields: RecordFields[];
}