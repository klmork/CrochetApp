import s3Client from './s3Config';
import { GetObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

export const getSignedUrlFromS3 = async (
  bucketName: string,
  key: string,
): Promise<string> => {
  const command = new GetObjectCommand({ Bucket: bucketName, Key: key });
  const url = await getSignedUrl(s3Client, command, { expiresIn: 15 * 60 }); // expires in seconds
  return url;
};
