import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Farm } from '../farms/farm.entity';

@Entity({ name: 'farmers' })
export class Farmer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  cpfOrCnpj: string;

  @Column()
  name: string;

  @OneToMany(() => Farm, (farm) => farm.farmer)
  farms: Farm[];
}
