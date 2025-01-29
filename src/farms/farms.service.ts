import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Farm } from './farm.entity';

@Injectable()
export class FarmsService {
  constructor(
    @InjectRepository(Farm)
    private readonly farmRepository: Repository<Farm>,
  ) {}

  async findAll(): Promise<Farm[]> {
    return this.farmRepository.find();
  }

  async findOne(id: number): Promise<Farm> {
    const farm = await this.farmRepository.findOne({ where: { id } });
    if (!farm) {
      throw new NotFoundException('Farm not found');
    }
    return farm;
  }

  async create(farm: Partial<Farm>): Promise<Farm> {
    const newFarm = this.farmRepository.create(farm);
    return this.farmRepository.save(newFarm);
  }

  async update(id: number, farm: Partial<Farm>): Promise<void> {
    const result = await this.farmRepository.update(id, farm);
    if (result.affected === 0) {
      throw new NotFoundException('Farm not found');
    }
  }

  async delete(id: number): Promise<void> {
    const result = await this.farmRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException('Farm not found');
    }
  }
}
