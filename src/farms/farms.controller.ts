import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';

import { CreateFarmDto } from './dtos/create-farm.dto';
import { FarmsService } from './farms.service';
import { Farm } from './farm.entity';
import { UpdateFarmDto } from './dtos/update-farm.dto';

@Controller('farms')
export class FarmsController {
  constructor(private readonly farmsService: FarmsService) {}

  @Post('/farmers/:farmerId/farms')
  create(
    @Param('farmerId') farmerId: number,
    @Body() createFarmDto: CreateFarmDto,
  ): Promise<Farm> {
    return this.farmsService.create(farmerId, createFarmDto);
  }

  @Get()
  findAll(): Promise<Farm[]> {
    return this.farmsService.findAll();
  }

  @Get('/farmers/:farmerId/farms')
  getFarmsByFarmer(@Param('farmerId') farmerId: number) {
    return this.farmsService.findOne(farmerId);
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() updateFarmDto: UpdateFarmDto,
  ): Promise<Farm> {
    return this.farmsService.update(id, updateFarmDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.farmsService.delete(id);
  }
}
