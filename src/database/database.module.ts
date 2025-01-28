import { Module } from '@nestjs/common';
import { Farm } from 'src/farms/farm.entity';
import { Farmer } from 'src/farmers/farmer.entity';
import { Crop } from 'src/crops/crop.entity';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: String(process.env.DB_PASSWORD),
      database: process.env.DB_NAME,
      models: [Farmer, Farm, Crop],
      autoLoadModels: true,
      synchronize: true,
    }),
  ],
  exports: [SequelizeModule],
})
export class DatabaseModule {}
