import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateCropDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @IsNotEmpty()
  harvestYear: number;
}
