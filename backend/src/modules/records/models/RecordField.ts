import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Field } from '../../fields/models/Field';
import { Record } from './Record';

@Entity('records_fields')
export class RecordFields {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('uuid')
  @ManyToOne(() => Record, record => record.record_fields)
  record_id: string;

  @JoinColumn({ name: 'record_id' })
  record: Record

  @Column('uuid')
  @ManyToOne(() => Field, field => field.record_fields)
  field_id: string;

  @JoinColumn({ name: 'field_id' })
  field: Field;

  @Column('integer')
  order: number;
}