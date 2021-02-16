import { getRepository, Repository } from 'typeorm';
import IAppointmentsRepository from './interfaces/IAppointmentsRepository';

import ICreateAppointmentDTO from '../dtos/ICreateAppointmentDTO';
import Appointment from '../models/Appointment';

export class AppointmentsRepository implements IAppointmentsRepository {

  private ormRepository: Repository<Appointment>

  constructor() {
    this.ormRepository = getRepository(Appointment);
  }

  public async findByDate(date: Date): Promise<Appointment | undefined> {
    const appointment = await this.ormRepository.findOne({
      where: { date }
    });

    return appointment;
  }

  public async create(data: ICreateAppointmentDTO): Promise<Appointment> {
    return this.ormRepository.create({ ...data });
  }
  public async save(appointment: Appointment): Promise<Appointment> {
    return this.ormRepository.save(appointment);
  }
}