import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Farmer } from './farmers/farmer.entity';
import { Farm } from './farms/farm.entity';
import { Crop } from './crops/crop.entity';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      models: [Farmer, Farm, Crop],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
