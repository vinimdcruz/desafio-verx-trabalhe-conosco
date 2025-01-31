import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';

import { CreateCropDto } from './dtos/crop.create-dto';
import { CropsService } from './crops.service';
import { UpdateCropDto } from './dtos/update-crop.dto';
import { Crop } from './crop.entity';

@Controller('farms/:farmId/crops')
export class CropsController {
  constructor(private readonly cropsService: CropsService) {}

  @Post()
  create(
    @Param('farmId') farmId: number,
    @Body() createCropDto: CreateCropDto,
  ): Promise<Crop> {
    return this.cropsService.create(farmId, createCropDto);
  }

  @Get()
  findAll(): Promise<Crop[]> {
    return this.cropsService.findAll();
  }

  @Get('/farms/:farmId/crops')
  getCropsByFarm(@Param('farmId') farmId: number) {
    return this.cropsService.findOne(farmId);
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() updateCropDto: UpdateCropDto,
  ): Promise<Crop> {
    return this.cropsService.update(id, updateCropDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.cropsService.delete(id);
  }
}
