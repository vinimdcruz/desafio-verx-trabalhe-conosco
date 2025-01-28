import {
  Table,
  Column,
  Model,
  PrimaryKey,
  AutoIncrement,
  HasMany,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { Crop } from 'src/crops/crop.entity';
import { Farmer } from 'src/farmers/farmer.entity';

@Table({ tableName: 'farms' })
export class Farm extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @Column({ allowNull: false })
  name: string;

  @Column({ allowNull: false })
  city: string;

  @Column({ allowNull: false })
  state: string;

  @Column({ allowNull: false })
  totalArea: number;

  @Column({ allowNull: false })
  agriculturalArea: number;

  @Column({ allowNull: false })
  vegetationArea: number;

  @HasMany(() => Crop)
  crops: Crop[];

  @ForeignKey(() => Farmer)
  @Column
  farmerId: number;

  @BelongsTo(() => Farmer)
  farmer: Farmer;
}
