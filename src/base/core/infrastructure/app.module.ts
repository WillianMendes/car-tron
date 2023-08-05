import { Module } from '@nestjs/common';
import EnvironmentModule from './environment/environment.module';

@Module({
  imports: [EnvironmentModule],
  providers: [],
  controllers: [],
  exports: [],
})
export class AppModule {}
