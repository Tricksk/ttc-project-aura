import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('appointments')
export class Appointment {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('uuid')
  service_id: string;

  @Column('uuid')
  client_id: string;

  @Column('timestamp with time zone')
  date: Date;
}