import { Router } from 'express';
import Appointment from './appointment.routes';
import usersRouter from './users.routes';

const app = Router();

app.use('/appointments', Appointment);
app.use('/users', usersRouter);
export default app;
