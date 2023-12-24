import { Module } from '@nestjs/common';
import { CustomerMicroserviceController } from './customer.controller';

@Module({
  imports: [],
  controllers: [CustomerMicroserviceController],
  providers: [],
})
export class CustomerModule {}
