import cors from 'cors';
import dotenv from 'dotenv';
import express, { Express, Request, Response } from 'express';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 8000;

// middleware
app.use(cors());
app.use(express.json());

// test route
app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

// start the Express server
app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
