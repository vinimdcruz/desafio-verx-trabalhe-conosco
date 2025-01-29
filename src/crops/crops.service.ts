import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Crop } from './crop.entity';

@Injectable()
export class CropsService {
  constructor(
    @InjectRepository(Crop)
    private readonly cropRepository: Repository<Crop>,
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

  async create(crop: Partial<Crop>): Promise<Crop> {
    const newCrop = this.cropRepository.create(crop);
    return this.cropRepository.save(newCrop);
  }

  async update(id: number, crop: Partial<Crop>): Promise<void> {
    const result = await this.cropRepository.update(id, crop);
    if (result.affected === 0) {
      throw new NotFoundException('Crop not found');
    }
  }

  async delete(id: number): Promise<void> {
    const result = await this.cropRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException('Crop not found');
    }
  }
}
