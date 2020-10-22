import express from 'express';
import routers from './routes';

const app = express();
app.use(express.json());
app.use(routers);

app.listen(3333, () => {
  console.log('🐱‍🏍 Server Started on port 3333');
});
