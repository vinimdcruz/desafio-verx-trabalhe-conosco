import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { CreateFarmerDto } from './dtos/create-farmer.dto';
import { FarmersService } from './farmers.service';
import { Farmer } from './farmer.entity';
import { UpdateFarmerDto } from './dtos/update-farmer.dto';

@Controller('farmers')
export class FarmersController {
  constructor(private readonly farmersService: FarmersService) {}

  @Post()
  create(@Body() createFarmerDto: CreateFarmerDto): Promise<Farmer> {
    return this.farmersService.create(createFarmerDto);
  }

  @Get()
  findAll(): Promise<Farmer[]> {
    return this.farmersService.findAll();
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() updateFarmerDto: UpdateFarmerDto,
  ): Promise<void> {
    return this.farmersService.update(id, updateFarmerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.farmersService.delete(id);
  }
}
