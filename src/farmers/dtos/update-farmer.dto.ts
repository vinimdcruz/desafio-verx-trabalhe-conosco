import { IsString, IsOptional, Matches } from 'class-validator';

export class UpdateFarmerDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsString()
  @IsOptional()
  @Matches(/^\d{11}$|^\d{14}$/, {
    message: 'CPF or CNPJ deve possuir 11 ou 14 dígitos',
  })
  cpfOrCnpj?: string;
}
