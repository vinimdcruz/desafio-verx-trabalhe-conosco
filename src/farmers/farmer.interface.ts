import { Farm } from '../farms/farm.interface';

export class Farmer {
  name: string;
  cpfOrCnpj: string;
  farms: Farm[];
}
