import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Farmer } from './farmer.entity';

@Injectable()
export class FarmersService {
  constructor(
    @InjectRepository(Farmer)
    private readonly farmerRepository: Repository<Farmer>,
  ) {}

  async findAll(): Promise<Farmer[]> {
    return this.farmerRepository.find();
  }

  async findOne(id: number): Promise<Farmer> {
    const farmer = await this.farmerRepository.findOne({ where: { id } });
    if (!farmer) {
      throw new NotFoundException('Farmer not found');
    }
    return farmer;
  }

  async create(farmer: Partial<Farmer>): Promise<Farmer> {
    const newFarmer = this.farmerRepository.create(farmer);
    return this.farmerRepository.save(newFarmer);
  }

  async update(id: number, farmer: Partial<Farmer>): Promise<void> {
    const result = await this.farmerRepository.update(id, farmer);
    if (result.affected === 0) {
      throw new NotFoundException('Farmer not found');
    }
  }

  async delete(id: number): Promise<void> {
    const result = await this.farmerRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException('Farmer not found');
    }
  }
}
