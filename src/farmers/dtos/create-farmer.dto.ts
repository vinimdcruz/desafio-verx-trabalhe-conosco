import { IsString, IsNotEmpty, Validate } from 'class-validator';
import { CpfCnpjValidator } from '../../validators/cpf-cnpj.validator';

export class CreateFarmerDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  @Validate(CpfCnpjValidator, { message: 'CPF ou CNPJ inválido' })
  cpfOrCnpj: string;
}
