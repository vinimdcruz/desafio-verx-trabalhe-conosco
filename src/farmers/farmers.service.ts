import { Injectable, Inject } from '@nestjs/common';
import { Farmer } from './farmer.entity';

@Injectable()
export class FarmersService {
  constructor(@InjectModel(Farmer) private farmerModel: typeof Farmer) {}

  async create(farmer: Farmer) {
    return this.farmerModel.create(farmer);
  }

  async findAll() {
    return this.farmerModel.findAll();
  }

  async update(id: number, data: Partial<Farmer>) {
    await this.farmerModel.update(data, { where: { id } });
    return this.farmerModel.findByPk(id);
  }

  async delete(id: number) {
    return this.farmerModel.destroy({ where: { id } });
  }
}
