import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseProviders } from './database.providers';
import { Farmer } from './farmers/farmer.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseProviders,
    SequelizeModule.forFeature([Farmer]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
