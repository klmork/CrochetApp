import cors from 'cors';
import express, { Express } from 'express';

const app: Express = express();

// middleware
app.use(cors());
app.use(express.json());

// Mount Routers
app.all('/message', (req, res, next) => {
  res.send('Hello World');
});
app.all('*', (req, res, next) => {
  res.status(404).json({ status: 'fail', message: `Can't find ${req.url}` });
});

export default app;
