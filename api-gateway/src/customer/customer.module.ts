import { Module } from '@nestjs/common';
import { NatsClientModule } from 'src/common/nats-client/nats-client.module';
import { CustomerController } from './customer.controller';

@Module({
  imports: [NatsClientModule],
  controllers: [CustomerController],
  providers: [],
})
export class CustomerModule {}
