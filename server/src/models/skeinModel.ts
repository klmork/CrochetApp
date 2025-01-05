import { Schema, model } from 'mongoose';

interface IDimensions {
  weightInOunces?: number;
  weightInGrams?: number;
  sizeInYards?: number;
  sizeInMeteres?: number;
}

interface IColor {
  brandColorName?: string;
  color: string;
}

interface IWeight {
  weight: number;
  description: 'medium' | 'light' | 'heavy';
}

interface IMaterial {
  material: string;
  percent: number;
}
interface ISkein {
  color: IColor;
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

const colorSchema = new Schema<IColor>({
  brandColorName: { type: String, required: false },
  color: {
    type: String,
    required: [true, 'Color is required.'],
  },
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
  color: {
    type: colorSchema,
    required: [
      true,
      'Color is required: { brandColorName: { type: String, required: false },color: {type: String, required: true} ',
    ],
  },
  description: { type: String, required: false },
  brand: { type: String, required: false },
  dimensions: { type: dimensionSchema, required: false },
  weight: { type: weightSchema, required: false },
  material: { type: [materialSchema], required: false },
  image: { type: String, required: false },
});

const Skein = model<ISkein>('Skein', skeinSchema);
export default Skein;
