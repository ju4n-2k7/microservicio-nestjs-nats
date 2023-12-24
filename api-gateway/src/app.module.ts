import { Module } from '@nestjs/common';
import { CustomerModule } from './customer/customer.module';
import { PolicyModule } from './policy/policy.module';

@Module({
  imports: [CustomerModule, PolicyModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
