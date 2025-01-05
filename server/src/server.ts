import app from './app';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

// Set up connection to DB

const databaseURL = process.env.DATABASE || '';
const databasePassword = process.env.DATABASE_PASSWORD || '';
if (!databaseURL || !databasePassword) {
  throw new Error('Database URL or password not found - set in .env');
}
const DB = databaseURL.replace('<PASSWORD>', databasePassword);
mongoose
  .connect(DB)
  .then(() => {
    console.log('DB connection successful');
  })
  .catch((err) => {
    console.log('DB Error: ', err);
  });

// start the Express server
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
