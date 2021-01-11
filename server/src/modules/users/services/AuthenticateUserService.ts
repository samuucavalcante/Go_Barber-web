import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import User from '@modules/users/infra/typeorm/entities/User';

import auth from '@config/auth';

import AppError from '@shared/errors/AppError';

<<<<<<< HEAD:server/src/modules/users/services/AuthenticateUserService.ts
=======
import IUsersRepository from '@modules/users/repositories/IUsersRepository';

>>>>>>> cb2bc667f0ef75969603faeff3837d25bab5bf9a:server/src/services/AuthenticateUserService.ts
interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: User;
  token: string;
}

class AuthenticateUserService {
<<<<<<< HEAD:server/src/modules/users/services/AuthenticateUserService.ts
  public async execute({ email, password }: IRequest): Promise<IResponse> {
    const userRepository = getRepository(User);
=======
  constructor(private usersRepository: IUsersRepository) {}
>>>>>>> cb2bc667f0ef75969603faeff3837d25bab5bf9a:server/src/services/AuthenticateUserService.ts

  public async execute({ email, password }: IRequest): Promise<IResponse> {
    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      throw new AppError('Incorrect email/password combination.', 401);
    }

    const passwordMatched = await compare(password, user.password);

    if (!passwordMatched) {
      throw new AppError('Incorrect email/password combination.', 401);
    }

    const { secret, expiresIn } = auth.jwt;

    const token = sign({}, secret, {
      subject: user.id,
      expiresIn,
    });

    return {
      user,
      token,
    };
  }
}

export default AuthenticateUserService;
