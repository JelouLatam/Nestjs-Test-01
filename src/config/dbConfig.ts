import { registerAs } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export default registerAs(
  'database',
  (): TypeOrmModuleOptions => ({
    type: 'sqlite',
    database: process.env.DATABASE_URI,
    autoLoadEntities: true,
  }),
);
