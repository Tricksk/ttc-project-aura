import { EntityRepository, Repository, getRepository } from 'typeorm';
import ICreateUserDTO from '../dtos/ICreateUserDTO';
import User from '../models/User';
import IUsersRepository from './interfaces/IUsersRepository';


@EntityRepository(User)
export class UsersRepository implements IUsersRepository {

  private ormRepositorio: Repository<User>

  constructor() {
    this.ormRepositorio = getRepository(User);
  }

  public async list(): Promise<User[]> {
    return this.ormRepositorio.find();
  }

  public async findByLogin(login: string): Promise<User | undefined> {
    return this.ormRepositorio.findOne({
      where: { login }
    });
  }

  public async create(data: ICreateUserDTO): Promise<User> {
    return this.ormRepositorio.create({ ...data });
  }

  public async save(user: User): Promise<User> {
    return this.ormRepositorio.save(user);
  }
}