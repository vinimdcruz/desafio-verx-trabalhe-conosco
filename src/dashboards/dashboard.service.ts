import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Farm } from '../farms/farm.entity';

@Injectable()
export class DashboardService {
  constructor(
    @InjectRepository(Farm)
    private readonly farmRepository: Repository<Farm>,
  ) {}

  async getTotalFarms(): Promise<number> {
    return this.farmRepository.count();
  }

  async getTotalHectares(): Promise<number> {
    const farms = await this.farmRepository.find();
    return farms.reduce((sum, farm) => sum + farm.totalArea, 0);
  }

  async getFarmsByState(): Promise<{ state: string; count: number }[]> {
    const farms = await this.farmRepository.find();
    const stateCounts: { [key: string]: number } = {};

    farms.forEach((farm) => {
      stateCounts[farm.state] = (stateCounts[farm.state] || 0) + 1;
    });

    return Object.entries(stateCounts).map(([state, count]) => ({
      state,
      count,
    }));
  }

  async getFarmsByCrop(): Promise<{ crop: string; count: number }[]> {
    const farms = await this.farmRepository.find({ relations: ['crops'] });
    const cropCounts: { [key: string]: number } = {};

    farms.forEach((farm) => {
      farm.crops.forEach((crop) => {
        cropCounts[crop.name] = (cropCounts[crop.name] || 0) + 1;
      });
    });

    return Object.entries(cropCounts).map(([crop, count]) => ({ crop, count }));
  }

  async getLandUseDistribution(): Promise<{
    agriculturalArea: number;
    vegetationArea: number;
  }> {
    const farms = await this.farmRepository.find();

    return farms.reduce(
      (acc, farm) => {
        acc.agriculturalArea += farm.agriculturalArea;
        acc.vegetationArea += farm.vegetationArea;
        return acc;
      },
      { agriculturalArea: 0, vegetationArea: 0 },
    );
  }
}
