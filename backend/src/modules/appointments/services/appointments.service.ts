import { startOfHour } from "date-fns";
import IAppointmentsRepository from "../repositories/interfaces/IAppointmentsRepository";

import Appointment from '../models/Appointment';

import AppError from "../../../shared/errors/AppError";
import { inject, injectable } from "tsyringe";

interface Request {
  serviceId: string;
  clientId: string;
  selectedDate: Date;
}

@injectable()
export class AppoitmentsService {

  constructor(
    @inject('AppointmentsRepository')
    private appointmentsRepository: IAppointmentsRepository
  ) { }

  public async create({ serviceId, clientId, selectedDate }: Request)
    : Promise<Appointment> {
    const appointmentDate = startOfHour(selectedDate);
    const today = new Date();

    if (appointmentDate.toLocaleDateString() === today.toLocaleDateString())
      throw new AppError(400, 'Date unvaliable.');

    const findAppointment = await this.appointmentsRepository.findByDate(appointmentDate);

    if (findAppointment)
      throw new AppError(400, 'Date unvaliable.');

    const appointment = await this.appointmentsRepository.create({
      service_id: serviceId,
      client_id: clientId,
      date: appointmentDate
    });

    await this.appointmentsRepository.save(appointment);

    return appointment;
  }

  public async listAllAppointmentsFromCurrentDay(): Promise<Appointment[]> {
    return await this.appointmentsRepository
      .findAllAppointmentsFromCurrentDay();
  }
}