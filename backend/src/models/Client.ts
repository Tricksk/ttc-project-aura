import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('clients')
export default class Client {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar')
  name: string;

  @Column('varchar')
  sex: 'F' | 'M';

  @Column('boolean')
  works_seated: Boolean;

  @Column('date')
  birthday: Date;

  @Column('varchar')
  cellphone: string;

  @Column('varchar')
  contact: string;

  @Column('varchar')
  contact_cellphone: string;
}