import { S3Client, S3ClientConfig } from '@aws-sdk/client-s3';
import dotenv from 'dotenv';

dotenv.config();
const s3Configuration: S3ClientConfig = {
  credentials: {
    accessKeyId: process.env.S3_ACCESS_KEY!,
    secretAccessKey: process.env.S3_SECRET_ACCESS_KEY!,
  },
  region: 'us-east-1',
};
console.log('s3Configuration:', s3Configuration);
const s3Client = new S3Client(s3Configuration);

export default s3Client;
