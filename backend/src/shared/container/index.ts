import { container } from 'tsyringe';

import IAppointmentsRepository from '../../modules/appointments/repositories/interfaces/IAppointmentsRepository';
import { AppointmentsRepository } from '../../modules/appointments/repositories/AppointmentsRepository';

import IClientsRepository from '../../modules/clients/repositories/interfaces/IClientsRepository';
import { ClientsRepository } from '../../modules/clients/repositories/ClientsRepository';

import IFieldsRepository from '../../modules/fields/repositories/interfaces/IFieldsRepository';
import { FieldsRepository } from '../../modules/fields/repositories/FieldsRepository';

import IRecordsRepository from '../../modules/records/repositories/interfaces/IRecordsRepository';
import { RecordsRepository } from '../../modules/records/repositories/RecordsRepository';

import IUsersRepository from '../../modules/users/repositories/interfaces/IUsersRepository';
import { UsersRepository } from '../../modules/users/repositories/UsersRepository';

container.registerSingleton<IAppointmentsRepository>('AppointmentsRepository', AppointmentsRepository);
container.registerSingleton<IClientsRepository>('ClientsRepository', ClientsRepository);
container.registerSingleton<IFieldsRepository>('FieldsRepository', FieldsRepository);
container.registerSingleton<IRecordsRepository>('RecordsRepository', RecordsRepository);
container.registerSingleton<IUsersRepository>('UsersRepository', UsersRepository);

