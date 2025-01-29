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
import { Crop } from './crop.entity';
import { UpdateCropDto } from './dtos/update-crop.dto';

@Controller('crops')
export class CropsController {
  constructor(private readonly cropsService: CropsService) {}

  @Post()
  create(@Body() createCropDto: CreateCropDto): Promise<Crop> {
    const crop = new Crop();
    Object.assign(crop, createCropDto);
    return this.cropsService.create(crop);
  }

  @Get()
  findAll(): Promise<Crop[]> {
    return this.cropsService.findAll();
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() updateCropDto: UpdateCropDto,
  ): Promise<void> {
    return this.cropsService.update(id, updateCropDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.cropsService.delete(id);
  }
}
