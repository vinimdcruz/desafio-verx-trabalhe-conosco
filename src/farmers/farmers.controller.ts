import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateFarmerDto } from './create-farmer.dto';
import { FarmersService } from './farmers.service';
import { Farmer } from './farmer.entity';

@Controller('farmers')
export class FarmersController {
  constructor(private readonly farmersService: FarmersService) {}

  @Post()
  create(@Body() createFarmerDto: CreateFarmerDto): Promise<Farmer> {
    const farmer = new Farmer();
    Object.assign(farmer, createFarmerDto);
    return this.farmersService.create(farmer);
  }

  @Get()
  findAll(): Promise<Farmer[]> {
    return this.farmersService.findAll();
  }
}
