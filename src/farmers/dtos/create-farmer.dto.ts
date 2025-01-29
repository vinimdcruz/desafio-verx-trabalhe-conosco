import {
  IsString,
  IsNotEmpty,
  IsArray,
  Matches,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { CreateFarmDto } from '../../farms/dtos/create-farm-dto';

export class CreateFarmerDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @Matches(/^\d{11}$|^\d{14}$/, {
    message: 'CPF or CNPJ deve possuir 11 ou 14 dígitos',
  })
  cpfOrCnpj: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateFarmDto)
  farms: CreateFarmDto[];
}
