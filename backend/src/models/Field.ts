import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

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
}