import { IsString, IsNotEmpty, Matches } from 'class-validator';

export class CreateFarmerDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  @Matches(/^\d{11}$|^\d{14}$/, {
    message: 'CPF or CNPJ deve possuir 11 ou 14 dígitos',
  })
  cpfOrCnpj: string;
}
