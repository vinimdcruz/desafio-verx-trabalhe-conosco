import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Farm } from './farm.entity';
import { Farmer } from '../farmers/farmer.entity';
import { CreateFarmDto } from './dtos/create-farm.dto';
import { UpdateFarmDto } from './dtos/update-farm.dto';

@Injectable()
export class FarmsService {
  constructor(
    @InjectRepository(Farm) private farmRepository: Repository<Farm>,
    @InjectRepository(Farmer) private farmerRepository: Repository<Farmer>,
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

  async create(farmerId: number, createFarmDto: CreateFarmDto): Promise<Farm> {
    const farmer = await this.farmerRepository.findOne({
      where: { id: farmerId },
    });
    if (!farmer) throw new NotFoundException('Farmer not found');

    const farm = this.farmRepository.create({ ...createFarmDto, farmer });
    return this.farmRepository.save(farm);
  }

  async update(id: number, updateFarmDto: UpdateFarmDto): Promise<Farm> {
    const farm = await this.findOne(id);
    if (!farm) {
      throw new NotFoundException('Farm not found');
    }
    Object.assign(farm, updateFarmDto);
    return this.farmRepository.save(farm);
  }

  async delete(id: number): Promise<void> {
    const result = await this.farmRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException('Farm not found');
    }
  }
}
