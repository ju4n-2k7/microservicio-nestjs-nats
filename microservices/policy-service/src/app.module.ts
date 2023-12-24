import { Module } from '@nestjs/common';
import { PolicyModule } from './policy/policy.module';

@Module({
  imports: [PolicyModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
