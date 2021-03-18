import { Between, getRepository, Repository, Raw } from 'typeorm';
import IAppointmentsRepository from './interfaces/IAppointmentsRepository';

import ICreateAppointmentDTO from '../dtos/ICreateAppointmentDTO';
import Appointment from '../models/Appointment';
import { parseISO, endOfDay, startOfDay } from 'date-fns';

export class AppointmentsRepository implements IAppointmentsRepository {

  private ormRepository: Repository<Appointment>

  constructor() {
    this.ormRepository = getRepository(Appointment);
  }

  public async listAllAppointments(): Promise<Appointment[]> {
    return this.ormRepository.find();
  }

  public async findByDate(date: Date): Promise<Appointment | undefined> {
    const appointment = await this.ormRepository.findOne({
      where: { date }
    });

    return appointment;
  }

  public async findAllAppointmentsFromCurrentDay(): Promise<Appointment[]> {
    const currentDay = new Date();

    const appoitments = await this.ormRepository.find({
      where: {
        date: Between(startOfDay(currentDay), endOfDay(currentDay))
      }
    })

    return appoitments;
  }

  public async create(data: ICreateAppointmentDTO): Promise<Appointment> {
    return this.ormRepository.create({ ...data });
  }

  public async save(appointment: Appointment): Promise<Appointment> {
    return this.ormRepository.save(appointment);
  }
}