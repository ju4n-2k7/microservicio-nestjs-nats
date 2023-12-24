import { Module } from '@nestjs/common';
import { NatsClientModule } from 'src/common/nats-client/nats-client.module';
import { PolicyController } from './policy.controller';

@Module({
  imports: [NatsClientModule],
  controllers: [PolicyController],
  providers: [],
})
export class PolicyModule {}
