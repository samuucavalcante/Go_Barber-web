import { Router } from 'express';
import multer from 'multer';
import uploadConfig from '@config/upload';
import CreateUsersService from '@modules/users/services/CreateUsersService';

<<<<<<< HEAD:server/src/modules/users/infra/http/routes/users.routes.ts
import UpdateUserAvatarService from '@modules/users/services/UpdateUserAvatarService';
import ensureAuthenticated from '@modules/users/infra/http/middleware/ensureAuthenticated';
=======
import UsersRepository from '@modules/users/infra/typeorm/repositories/UserRepositories';

import ensureAuthenticated from '@modules/users/infra/http/middleware/ensureAuthenticated';

import UpdateUserAvatarService from '@modules/users/services/UpdateUserAvatarService';
>>>>>>> cb2bc667f0ef75969603faeff3837d25bab5bf9a:server/src/routes/users.routes.ts

const usersRouter = Router();
const upload = multer(uploadConfig);

usersRouter.post('/', async (request, response) => {
  try {
    const { name, email, password } = request.body;

    const usersRepository = new UsersRepository();
    const createUser = new CreateUsersService(usersRepository);

    const user = await createUser.execute({
      name,
      email,
      password,
    });

    return response.json(user);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

usersRouter.patch(
  '/avatar',
  ensureAuthenticated,
  upload.single('avatar'),
  async (request, response) => {
    try {
      const updateUserAvatarService = new UpdateUserAvatarService(
        usersRepository,
      );

      const user = await updateUserAvatarService.execute({
        user_id: request.user.id,
        avatarFilename: request.file.filename,
      });

      return response.json(user);
    } catch (err) {
      return response.status(400).json({ err: err.message });
    }
  },
);
export default usersRouter;
