import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';

import { CreateFarmDto } from './dtos/create-farm-dto';
import { FarmsService } from './farms.service';
import { Farm } from './farm.entity';
import { UpdateFarmDto } from './dtos/update-farm.dto';
import { Crop } from 'src/crops/crop.entity';

@Controller('farms')
export class FarmsController {
  constructor(private readonly farmsService: FarmsService) {}

  @Post()
  create(@Body() createFarmDto: CreateFarmDto): Promise<Farm> {
    const farm = new Farm();
    Object.assign(farm, createFarmDto);
    return this.farmsService.create(farm);
  }

  @Get()
  findAll(): Promise<Farm[]> {
    return this.farmsService.findAll();
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() updateFarmDto: UpdateFarmDto,
  ): Promise<void> {
    const farmToUpdate = {
      ...updateFarmDto,
      crops: updateFarmDto.crops?.map((cropDto) => {
        const crop = new Crop();
        Object.assign(crop, cropDto);
        return crop;
      }),
    };
    return this.farmsService.update(id, farmToUpdate);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.farmsService.delete(id);
  }
}
