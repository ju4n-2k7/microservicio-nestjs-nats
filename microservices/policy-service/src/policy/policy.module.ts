import { Module } from '@nestjs/common';
import { PolicyMicroserviceController } from './policy.controller';

@Module({
  imports: [],
  controllers: [PolicyMicroserviceController],
  providers: [],
})
export class PolicyModule {}
