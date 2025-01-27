
import { Module } from '@nestjs/common';
import { FarmersController } from './farmers.controller'; //ToDo: Add this logic
import { FarmersService } from './farmers.service'; //ToDo: Add this logic
import { farmersProviders } from './farmers.providers'; //ToDo: Add this logic
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [FarmersController],
  providers: [
    FarmersService,
    ...farmersProviders,
  ],
})
export class FarmersModule {}
