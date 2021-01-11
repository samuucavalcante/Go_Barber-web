import { Router } from 'express';
import appointmentRouter from '@modules/appointments/infra/http/routes/appointment.routes';
<<<<<<< HEAD
import sessionsRouter from '@modules/users/infra/http/routes/users.routes';
import usersRouter from '@modules/users/infra/http/routes/sessions.routes';
=======
import sessionsRouter from '@modules/users/infra/http/routes/sessions.routes';
import usersRouter from '@modules/users/infra/http/routes/users.routes';
>>>>>>> cb2bc667f0ef75969603faeff3837d25bab5bf9a

const app = Router();

app.use('/appointments', appointmentRouter);
app.use('/users', usersRouter);
app.use('/sessions', sessionsRouter);
export default app;
