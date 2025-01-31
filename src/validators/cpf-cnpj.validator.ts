import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import * as cpf from '@fnando/cpf';
import * as cnpj from '@fnando/cnpj';

@ValidatorConstraint({ name: 'cpfCnpj', async: false })
export class CpfCnpjValidator implements ValidatorConstraintInterface {
  validate(value: string): boolean {
    return cpf.isValid(value) || cnpj.isValid(value);
  }

  defaultMessage(): string {
    return 'CPF ou CNPJ inválido';
  }
}
