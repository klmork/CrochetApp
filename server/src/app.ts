import cors from 'cors';
import express, { Express, Request, Response } from 'express';

const app: Express = express();

// middleware
app.use(cors());
app.use(express.json());

// test route
app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

export default app;
