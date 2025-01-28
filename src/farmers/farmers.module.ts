import { Module } from '@nestjs/common';
import { FarmersController } from './farmers.controller'; //ToDo: Finish this logic
import { FarmersService } from './farmers.service';
import { DatabaseModule } from '../database/database.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { Farmer } from './farmer.entity';

@Module({
  imports: [SequelizeModule.forFeature([Farmer])],
  controllers: [FarmersController],
  providers: [FarmersService],
  exports: [FarmersService],
})
export class FarmersModule {}
