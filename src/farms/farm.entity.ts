import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Farmer } from '../farmers/farmer.entity';
import { Crop } from '../crops/crop.entity';

@Entity({ name: 'farms' })
export class Farm {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  city: string;

  @Column()
  state: string;

  @Column()
  totalArea: number;

  @Column()
  agriculturalArea: number;

  @Column()
  vegetationArea: number;

  @ManyToOne(() => Farmer, (farmer) => farmer.farms, { onDelete: 'CASCADE' })
  farmer: Farmer;

  @OneToMany(() => Crop, (crop) => crop.farm, { cascade: true })
  crops: Crop[];
}
