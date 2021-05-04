import ICreateClientDTO from '../../dtos/ICreateClientDTO';
import Client from '../../models/Client';

export default interface IClientsRepository {
  create(data: ICreateClientDTO): Promise<Client>;
  save(user: Client): Promise<Client>;
  list(): Promise<Client[]>;
}