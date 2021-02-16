import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

import { AUTH_CONFIG } from '../config/auth.config';

import AppError from '../errors/AppError';

export default function authenticated(request: Request, response: Response, next: NextFunction): void {
  const authHeader = request.headers.authorization;

  if (!authHeader)
    throw new AppError(403, 'JWT token is missing.');

  const [, token] = authHeader.split(' ');

  try {
    const decoded = verify(token, AUTH_CONFIG.jwt.secret);

    return next();
  } catch {
    throw new AppError(403, 'Invalid JWT token.');
  }

}