import { Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import environmentOptions from './config/environment.options';
import ApplicationEnvironment from './app/application.environment';

@Global()
@Module({
  imports: [ConfigModule.forRoot(environmentOptions.getConfig())],
  providers: [ApplicationEnvironment],
  controllers: [],
  exports: [ApplicationEnvironment],
})
class EnvironmentModule {}

export default EnvironmentModule;
