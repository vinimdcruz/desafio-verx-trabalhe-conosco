import {
  Table,
  Column,
  Model,
  PrimaryKey,
  AutoIncrement,
  HasMany,
} from 'sequelize-typescript';
import { Farm } from '../farms/farm.entity';

@Table({ tableName: 'farmers' })
export class Farmer extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @Column({ allowNull: false, unique: true })
  cpfOrCnpj: string;

  @Column({ allowNull: false })
  name: string;

  @HasMany(() => Farm)
  farms: Farm[];
}
