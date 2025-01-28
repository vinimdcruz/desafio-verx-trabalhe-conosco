import { Module } from '@nestjs/common';
import { FarmersController } from './farmers.controller'; //ToDo: Finish this logic
import { FarmersService } from './farmers.service';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [FarmersController],
  providers: [FarmersService],
})
export class FarmersModule {}
