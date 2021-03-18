import { Appointment } from "../../models/Appointment";
import ICreateAppointmentDTO from "../../dtos/ICreateAppointmentDTO";

export default interface IAppointmentsRepository {
  findAllAppointmentsFromCurrentDay(): Promise<Appointment[]>;

  listAllAppointments(): Promise<Appointment[]>;
  findByDate(date: Date): Promise<Appointment | undefined>;

  create(data: ICreateAppointmentDTO): Promise<Appointment>;
  save(appointment: Appointment): Promise<Appointment>;
}
