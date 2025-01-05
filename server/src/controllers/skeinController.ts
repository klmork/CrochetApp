import { Skein, ISkein } from '../models/skeinModel';
import { Request, Response } from 'express';

export const getAllSkeins = async (req: Request, res: Response) => {
  try {
    const skeins: ISkein[] = await Skein.find();
    res.status(200).json({
      status: 'success',
      results: skeins.length,
      data: { skeins },
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
