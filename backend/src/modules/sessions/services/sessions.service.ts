import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import { inject, injectable } from 'tsyringe';

import { AUTH_CONFIG } from '../../../shared/config/auth.config';
import AppError from '../../../shared/errors/AppError';
import User from '../../users/models/User';
import { UsersRepository } from '../../users/repositories/UsersRepository';

interface Request {
  login: string;
  password: string;
}

@injectable()
export default class SessionsService {

  constructor(
    @inject('UsersRepository')
    private usersRepository: UsersRepository
  ) { }

  public async authenticate({ login, password }: Request)
    : Promise<{ user: User, token: string }> {

    const user = await this.usersRepository.findByLogin(login);

    if (!user)
      throw new AppError(400, 'Incorrect email/password.');

    const passwordMatched = await compare(password, user.password);

    if (!passwordMatched)
      throw new AppError(400, 'Incorrect email/password.');

    const token = sign({}, AUTH_CONFIG.jwt.secret, {
      subject: user.id,
      expiresIn: AUTH_CONFIG.jwt.expiresIn
    });

    return {
      user,
      token
    }
  }
}