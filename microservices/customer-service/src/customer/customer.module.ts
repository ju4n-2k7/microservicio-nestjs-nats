import { Module } from '@nestjs/common';
import { CustomerMicroserviceController } from './customer.controller';
import { CustomerService } from './customer.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Customer } from './entities/Customer';

@Module({
  imports: [TypeOrmModule.forFeature([Customer])],
  controllers: [CustomerMicroserviceController],
  providers: [CustomerService],
})
export class CustomerModule {}
