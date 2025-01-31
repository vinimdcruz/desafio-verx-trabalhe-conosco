import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateFarmDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  city: string;

  @IsString()
  @IsNotEmpty()
  state: string;

  @IsNumber()
  @IsNotEmpty()
  totalArea: number;

  @IsNumber()
  @IsNotEmpty()
  agriculturalArea: number;

  @IsNumber()
  @IsNotEmpty()
  vegetationArea: number;

  @IsNumber()
  @IsNotEmpty()
  farmerId: number;
}
