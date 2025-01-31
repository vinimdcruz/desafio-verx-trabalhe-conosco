import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Crop } from './crop.entity';
import { Farm } from '../farms/farm.entity';
import { CreateCropDto } from './dtos/crop.create-dto';
import { UpdateCropDto } from './dtos/update-crop.dto';

@Injectable()
export class CropsService {
  constructor(
    @InjectRepository(Crop) private cropRepository: Repository<Crop>,
    @InjectRepository(Farm) private farmRepository: Repository<Farm>,
  ) {}

  async findAll(): Promise<Crop[]> {
    return this.cropRepository.find();
  }

  async findOne(id: number): Promise<Crop> {
    const crop = await this.cropRepository.findOne({ where: { id } });
    if (!crop) {
      throw new NotFoundException('Crop not found');
    }
    return crop;
  }

  async create(farmId: number, createCropDto: CreateCropDto): Promise<Crop> {
    const farm = await this.farmRepository.findOne({ where: { id: farmId } });
    if (!farm) throw new NotFoundException('Farm not found');

    const crop = this.cropRepository.create({ ...createCropDto, farm });
    return this.cropRepository.save(crop);
  }

  async update(id: number, updateCropDto: UpdateCropDto): Promise<Crop> {
    const crop = await this.findOne(id);
    if (!crop) {
      throw new NotFoundException('Crop not found');
    }
    Object.assign(crop, updateCropDto);
    return this.cropRepository.save(crop);
  }

  async delete(id: number): Promise<void> {
    const result = await this.cropRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException('Crop not found');
    }
  }
}
