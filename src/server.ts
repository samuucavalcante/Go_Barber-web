import 'reflect-metadata';
import express from 'express';
import routers from './routes';
import './database';

const app = express();
app.use(express.json());
app.use(routers);

app.listen(3333, () => {
  console.log('🐱‍🏍 Server Started on port 3333');
});
