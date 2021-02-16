import { hash } from 'bcryptjs';
import { inject, injectable } from "tsyringe";
import AppError from '../../../shared/errors/AppError';

import User from "../models/User";
import IUsersRepository from '../repositories/interfaces/IUsersRepository';

interface Request {
  name: string;
  login: string;
  password: string;
}

@injectable()
export class UsersService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) { }

  public async create({ name, login, password }: Request): Promise<User> {
    const checkIfUserExists = await this.usersRepository.findByLogin(login);

    if (checkIfUserExists)
      throw new AppError(404, 'Login unvalible.');

    const hashPassword = await hash(password, 8);

    const user = await this.usersRepository.create({
      name,
      login,
      password: hashPassword
    });

    await this.usersRepository.save(user);

    return user;
  }

}