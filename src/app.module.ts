import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FarmersModule } from './farmers/farmers.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: String(process.env.DB_PASSWORD),
      database: process.env.DB_NAME,
      synchronize: true,
      logging: true,
      entities: [__dirname + '/../**/*.entity.js'],
      migrations: [__dirname + '/../migrations/**/*.js'],
      subscribers: [],
    }),
    FarmersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
