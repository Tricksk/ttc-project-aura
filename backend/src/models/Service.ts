import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('services')
export class Service {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar')
  name: string;

  @Column('integer')
  duration: number;

  @Column('boolean')
  use_record: boolean;

  @Column('varchar')
  record_id: string | null;
}