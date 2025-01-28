import { Crop } from '../crops/crop.interface';

export class Farm {
  name: string;
  city: string;
  state: string;
  totalArea: number;
  agriculturalArea: number;
  vegetationArea: number;
  crops: Crop[];
}
