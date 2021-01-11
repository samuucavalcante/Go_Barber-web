import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

<<<<<<< HEAD:server/src/modules/users/infra/http/middleware/ensureAuthenticated.ts
import authConfig from '../../../../../config/auth';

import AppError from '../../../../../shared/errors/AppError';
=======
import authConfig from '@config/auth';

import AppError from '@shared/errors/AppError';
>>>>>>> cb2bc667f0ef75969603faeff3837d25bab5bf9a:server/src/middleware/ensureAuthenticated.ts

interface ITokenPayload {
  iat: number;
  exp: number;
  sub: string;
}

export default function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction,
): void {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError('JWT token is missing', 401);
  }

  const [, token] = authHeader.split(' ');

  try {
    const decoded = verify(token, authConfig.jwt.secret);

    const { sub } = decoded as ITokenPayload;

    request.user = {
      id: sub,
    };

    next();
  } catch {
    throw new AppError('Invalid JWT token', 401);
  }
}
