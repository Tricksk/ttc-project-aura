import ICreateUserDTO from '../../dtos/ICreateUserDTO';
import User from '../../models/User';

export default interface IUsersRepository {
  findByLogin(login: string): Promise<User | undefined>;

  create(data: ICreateUserDTO): Promise<User>;
  save(user: User): Promise<User>;
}