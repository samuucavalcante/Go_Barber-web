import { Router } from 'express';
import AuthenticateUserService from '@modules/users/services/AuthenticateUserService';
<<<<<<< HEAD:server/src/modules/users/infra/http/routes/sessions.routes.ts
=======
import UsersRepository from '@modules/users/infra/typeorm/repositories/UserRepositories';
>>>>>>> cb2bc667f0ef75969603faeff3837d25bab5bf9a:server/src/routes/sessions.routes.ts

const sessionsRouter = Router();
sessionsRouter.post('/', async (request, response) => {
  try {
    const { email, password } = request.body;

    const usersRepository = new UsersRepository();
    const authenticateUser = new AuthenticateUserService(usersRepository);

    const { user, token } = await authenticateUser.execute({
      email,
      password,
    });

    return response.json({ user, token });
  } catch (err) {
    return response.status(err.statusCode).json({ error: err.message });
  }
});

export default sessionsRouter;
