import {
  Table,
  Column,
  Model,
  PrimaryKey,
  AutoIncrement,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { Farm } from '../farms/farm.entity';

@Table({ tableName: 'crops' })
export class Crop extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @Column({ allowNull: false })
  name: string;

  @Column({ allowNull: false })
  harvestYear: number;

  @ForeignKey(() => Farm)
  @Column
  farmId: number;

  @BelongsTo(() => Farm)
  farm: Farm;
}
