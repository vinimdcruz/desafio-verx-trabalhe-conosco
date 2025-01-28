import 'reflect-metadata';
import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST || 'postgres_db',
  port: Number(process.env.DB_PORT) || 5432,
  username: process.env.DB_USER || 'user',
  password: process.env.DB_PASS || 'password',
  database: process.env.DB_NAME || 'farmers_db',
  synchronize: false,
  logging: true,
  entities: ['dist/entities/**/*.js'],
  migrations: ['dist/migrations/*.js'],
  subscribers: [],
});
