import { Schema, model } from 'mongoose';

interface IDimensions {
  weightInOunces?: number;
  weightInGrams?: number;
  sizeInYards?: number;
  sizeInMeteres?: number;
}

interface IWeight {
  weight: number;
  description: 'medium' | 'light' | 'heavy';
}

interface IMaterial {
  material: string;
  percent: number;
}
export interface ISkein {
  color: string;
  brandColorName?: string;
  description?: string;
  brand?: string;
  dimensions?: IDimensions;
  weight?: IWeight;
  material?: [IMaterial];
  image?: string;
}

const dimensionSchema = new Schema<IDimensions>({
  weightInOunces: { type: Number, required: false },
  weightInGrams: { type: Number, required: false },
  sizeInYards: { type: Number, required: false },
  sizeInMeteres: { type: Number, required: false },
});

const weightSchema = new Schema<IWeight>({
  weight: {
    type: Number,
    required: [true, 'Weight is required.'],
  },
  description: {
    type: String,
    enum: ['medium', 'light', 'heavy'],
    required: [true, 'Description is required.'],
  },
});

const materialSchema = new Schema<IMaterial>({
  material: {
    type: String,
    required: [true, 'Material is required.'],
  },
  percent: {
    type: Number,
    required: [true, 'Percent is required.'],
  },
});

const skeinSchema = new Schema<ISkein>({
  color: { type: String, required: [true, 'colorDescription is required.'] },
  brandColorName: { type: String, required: false },
  description: { type: String, required: false },
  brand: { type: String, required: false },
  dimensions: { type: dimensionSchema, required: false },
  weight: { type: weightSchema, required: false },
  material: { type: [materialSchema], required: false },
  image: { type: String, required: false },
});

export const Skein = model<ISkein>('Skein', skeinSchema);
