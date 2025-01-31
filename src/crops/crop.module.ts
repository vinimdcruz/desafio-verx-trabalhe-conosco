import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Crop } from './crop.entity';
import { CropsController } from './crops.controller';
import { CropsService } from './crops.service';
import { Farm } from 'src/farms/farm.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Crop, Farm])],
  controllers: [CropsController],
  providers: [CropsService],
  exports: [CropsService],
})
export class CropsModule {}
