import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateCropDto } from './dtos/create-crop.dto';
import { CropsService } from './crops.service';
import { Crop } from './crop.entity';
import { UpdateCropDto } from './dtos/update-crop.dto';

@ApiTags('crops')
@Controller('crops')
export class CropsController {
  constructor(private readonly cropsService: CropsService) {}

  @Post('/farms/:farmId/crops')
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

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Crop> {
    return this.cropsService.findOne(id);
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
