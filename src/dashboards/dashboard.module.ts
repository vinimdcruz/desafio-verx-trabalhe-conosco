import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Farm } from '../farms/farm.entity';
import { Crop } from '../crops/crop.entity';
import { DashboardController } from './dashboard.controller';
import { DashboardService } from './dashboard.service';

@Module({
  imports: [TypeOrmModule.forFeature([Farm, Crop])],
  controllers: [DashboardController],
  providers: [DashboardService],
})
export class DashboardModule {}
