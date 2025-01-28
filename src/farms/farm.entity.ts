import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Crop } from 'src/crops/crop.entity';
import { Farmer } from 'src/farmers/farmer.entity';

@Entity({ name: 'farms' })
export class Farm {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false })
  city: string;

  @Column({ nullable: false })
  state: string;

  @Column({ nullable: false })
  totalArea: number;

  @Column({ nullable: false })
  agriculturalArea: number;

  @Column({ nullable: false })
  vegetationArea: number;

  @OneToMany(() => Crop, (crop) => crop.farm)
  crops: Crop[];

  @ManyToOne(() => Farmer, (farmer) => farmer.farms)
  farmer: Farmer;
}
