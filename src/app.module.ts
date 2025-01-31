import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { FarmersModule } from './farmers/farmers.module';
import { FarmsModule } from './farms/farm.module';
import { CropsModule } from './crops/crop.module';
import { getDatabaseConfig } from './config/database.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => getDatabaseConfig(configService),
      inject: [ConfigService],
    }),
    FarmersModule,
    FarmsModule,
    CropsModule,
  ],
})
export class AppModule { }
