import { Skein, ISkein } from '../models/skeinModel';
import { Request, Response } from 'express';
import { getSignedUrlFromS3 } from '../aws/s3Service';
import dotenv from 'dotenv';

dotenv.config();

const bucketName: string = process.env.S3_BUCKET_NAME || '';

type SkeinWithImageUrl = ISkein & { imageUrl: string };

const getSkeinWithUrl = async (skein: ISkein): Promise<SkeinWithImageUrl> => {
  const key: string = skein.image || 'skeins/no-image.png';
  const url: string = await getSignedUrlFromS3(bucketName, key);
  return { ...skein, imageUrl: url };
};

export const getAllSkeins = async (req: Request, res: Response) => {
  try {
    const skeins: ISkein[] = await Skein.find().lean();
    const skeinsWithImageUrl = await Promise.all(skeins.map(getSkeinWithUrl));
    res.status(200).json({
      status: 'success',
      results: skeinsWithImageUrl.length,
      data: { skeinsWithImageUrl },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: `Error getting all skeins: ${err instanceof Error ? err.message : err}`,
    });
  }
};

export const addSkein = async (req: Request, res: Response): Promise<void> => {
  try {
    const { description, brand, dimensions, color, weight, material, image } =
      req.body;

    const newSkein = new Skein({
      description,
      brand,
      dimensions,
      color,
      weight,
      material,
      image,
    });

    await newSkein.save();

    res.status(201).json({
      status: 'success',
      data: { skein: newSkein },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: `Error adding skein: ${err instanceof Error ? err.message : err}`,
    });
  }
};
