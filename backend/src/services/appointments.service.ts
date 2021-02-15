import { startOfHour } from "date-fns";
import { AppointmentsRepository } from '../repositories/appointments.repo';
import { Appointment } from '../models/Appointment';
import AppError from '../shared/errors/AppError';
import { getCustomRepository } from "typeorm";

interface Request {
  serviceId: string;
  clientId: string;
  selectedDate: Date;
}

export class AppoitmentsService {
  public async create({ serviceId, clientId, selectedDate }: Request)
    : Promise<Appointment> {
    const appointmentsRepository = getCustomRepository(AppointmentsRepository);

    const appointmentDate = startOfHour(selectedDate);

    const findAppointment = await appointmentsRepository.findByDate(appointmentDate);
    if (findAppointment)
      throw new AppError(400, 'Date unvaliable.');

    const appointment = await appointmentsRepository.create({
      service_id: serviceId,
      client_id: clientId,
      date: appointmentDate
    });

    await appointmentsRepository.save(appointment);

    return appointment;
  }
}