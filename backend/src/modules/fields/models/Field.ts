import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { RecordFields } from '../../records/models/RecordField';

@Entity('fields')
export class Field {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar')
  ask: string;

  @Column('varchar')
  type: string;

  @Column('varchar')
  field_type: string;

  @Column('boolean')
  required: boolean;

  @OneToMany(() => RecordFields, record_fields => record_fields.field)
  record_fields: RecordFields[]
}