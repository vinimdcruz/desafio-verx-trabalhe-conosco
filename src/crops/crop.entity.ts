import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Farm } from '../farms/farm.entity';

@Entity({ name: 'crops' })
export class Crop {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false })
  harvestYear: number;

  @ManyToOne(() => Farm, (farm) => farm.crops)
  farm: Farm;
}
