import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Farm } from './farm.entity';
import { FarmsController } from './farms.controller';
import { FarmsService } from './farms.service';
import { Farmer } from 'src/farmers/farmer.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Farm, Farmer])],
  controllers: [FarmsController],
  providers: [FarmsService],
  exports: [FarmsService],
})
export class FarmsModule {}
