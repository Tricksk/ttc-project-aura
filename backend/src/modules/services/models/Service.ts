import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Record } from '../../records/models/Record';

@Entity('services')
export default class Service {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar')
  name: string;

  @Column('integer')
  duration: number;

  @Column('boolean')
  use_record: boolean;

  @Column('uuid')
  record_id: string;

  @ManyToOne(() => Record)
  @JoinColumn({ name: 'record_id' })
  record: Record
}