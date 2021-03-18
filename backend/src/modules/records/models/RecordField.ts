import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Field } from '../../fields/models/Field';
import { Record } from './Record';

@Entity('records_fields')
export class RecordFields {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ select: false, type: 'uuid' })
  record_id: string;

  @Column({ select: false, type: 'uuid' })
  field_id: string;

  @Column('integer')
  order: number;

  @ManyToOne(() => Record, record => record.record_fields)
  @JoinColumn({ name: 'record_id' })
  record: Record;

  @ManyToOne(() => Field, field => field.record_fields, { eager: true })
  @JoinColumn({ name: 'field_id' })
  field: Field;
}