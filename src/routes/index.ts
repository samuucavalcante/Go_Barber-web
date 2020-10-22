import { Router } from 'express';
import Appointment from './appointment.routes';

const app = Router();

app.use('/appointments', Appointment);

export default app;
