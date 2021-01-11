import path from 'path';
import fs from 'fs';
import User from '@modules/users/infra/typeorm/entities/User';
import uploadConfig from '@config/upload';

<<<<<<< HEAD:server/src/modules/users/services/UpdateUserAvatarService.ts
import AppError from '@shared/errors/AppError';

=======
import IUsersRepository from '@modules/users/repositories/IUsersRepository';

import AppError from '@shared/errors/AppError';

>>>>>>> cb2bc667f0ef75969603faeff3837d25bab5bf9a:server/src/services/UpdateUserAvatarService.ts
interface IRequest {
  user_id: string;
  avatarFilename: string;
}

class UpdateUserAvatarService {
<<<<<<< HEAD:server/src/modules/users/services/UpdateUserAvatarService.ts
  public async execute({ user_id, avatarFilename }: IRequest): Promise<User> {
    const usersRepository = getRepository(User);
=======
  constructor(private usersRepository: IUsersRepository) {}
>>>>>>> cb2bc667f0ef75969603faeff3837d25bab5bf9a:server/src/services/UpdateUserAvatarService.ts

  public async execute({ user_id, avatarFilename }: IRequest): Promise<User> {
    const user = await this.usersRepository.findById(user_id);

    if (!user) {
      throw new AppError('Only authenticated users can change avatar.', 401);
    }

    if (user.avatar) {
      // Deletar avatar anterior

      const userAvatarFilePath = path.join(uploadConfig.directory, user.avatar);

      const userAvatarFileExist = await fs.promises.stat(userAvatarFilePath);

      if (userAvatarFileExist) {
        await fs.promises.unlink(userAvatarFilePath);
      }
    }

    user.avatar = avatarFilename;

    await this.usersRepository.save(user);

    return user;
  }
}

export default UpdateUserAvatarService;
