import { Module } from '@nestjs/common';
import { CustomerModule } from './customer/customer.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Customer } from './customer/entities/Customer';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.dev.env',
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.MYSQL_DEV_HOST,
      port: 3306,
      database: process.env.MYSQL_DEV_DATABASE,
      entities: [Customer],
      username: process.env.MYSQL_DEV_USER,
      password: process.env.MYSQL_DEV_PASSWORD,
    }),
    CustomerModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
