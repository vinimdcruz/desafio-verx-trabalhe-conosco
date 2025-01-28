import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { FarmersModule } from './farmers/farmers.module';

@Module({
  imports: [DatabaseModule, FarmersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
