import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Farmer } from './farmer.entity';

@Injectable()
export class FarmersService {
  constructor(
    @InjectModel(Farmer)
    private readonly farmerModel: typeof Farmer,
  ) {}

  async findAll(): Promise<Farmer[]> {
    return this.farmerModel.findAll();
  }

  async findOne(id: number): Promise<Farmer> {
    const farmer = await this.farmerModel.findOne({ where: { id } });
    if (!farmer) {
      throw new NotFoundException('Farmer not found');
    }
    return farmer;
  }

  async create(farmer: Partial<Farmer>): Promise<Farmer> {
    return this.farmerModel.create(farmer);
  }

  async update(id: number, farmer: Partial<Farmer>): Promise<number[]> {
    const [updatedRows] = await this.farmerModel.update(farmer, {
      where: { id },
    });
    if (!updatedRows) {
      throw new NotFoundException('Farmer not found');
    }
    return [updatedRows];
  }

  async delete(id: number): Promise<boolean> {
    const deleted = await this.farmerModel.destroy({ where: { id } });
    if (!deleted) {
      throw new NotFoundException('Farmer not found');
    }
    return true;
  }
}
