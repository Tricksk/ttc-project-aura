import { Column, PrimaryGeneratedColumn } from "typeorm";

export default class Answers {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('uuid')
  client_id: string;

  @Column('uuid')
  record_field_id: string;

  @Column('varchar')
  answer: string;
}