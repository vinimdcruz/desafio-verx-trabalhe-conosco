import { Table, Column, Model } from 'sequelize-typescript';

@Table({ tableName: 'farmers' })
export class Farmer extends Model {
  @Column({ allowNull: false, unique: true })
  cpfOrCnpj: string;

  @Column({ allowNull: false })
  name: string;
}
