import express from 'express';
import dotenv from 'dotenv';

import ordersRoute from './routes/orders'

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

app.use('/api/v1/orders', ordersRoute)

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Welcome to fast-food-fast API',
  });
});

app.listen(port, () => {
  //eslint-disable-next-line
  console.log(`App started and running on port ${port}`);
});

export default app;