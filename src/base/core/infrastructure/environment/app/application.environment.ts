import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import ApplicationInterface from '../../../application/environment/application.interface';
import Environment from '../../../domain/entity/environment/environment.entity';
import EnvironmentException from '../../../application/exception/environment.exception';
import ErrorDefaultMessages from '../../../application/exception/const/error-default.messages';

@Injectable()
class ApplicationEnvironment implements ApplicationInterface {
  private readonly logger: Logger = new Logger(ApplicationEnvironment.name);

  constructor(private readonly configService: ConfigService) {}

  public getAppName(): string {
    try {
      const appName = this.configService.get<string>('APP_NAME');

      if (!appName) {
        EnvironmentException.isEmpty('The app name is not defined in the environment variables.');
      }

      return appName;
    } catch (error: any) {
      this.logger.error(error?.message ?? ErrorDefaultMessages.unknownError);
      throw error;
    }
  }

  public getAppDescription(): string {
    try {
      const appDescription = this.configService.get<string>('APP_DESCRIPTION');

      if (!appDescription) {
        EnvironmentException.isEmpty('The app description is not defined in the environment variables.');
      }

      return appDescription;
    } catch (error: any) {
      this.logger.error(error?.message ?? ErrorDefaultMessages.unknownError);
      throw error;
    }
  }

  public getAppHost(): string {
    try {
      const appHost = this.configService.get<string>('APP_HOST');

      if (!appHost) {
        EnvironmentException.isEmpty('The app host is not defined in the environment variables.');
      }

      return appHost;
    } catch (error) {
      this.logger.error(error?.message ?? ErrorDefaultMessages.unknownError);
      throw error;
    }
  }

  public getAppPort(): number {
    try {
      const appPort = this.configService.get<number>('APP_PORT');

      if (!appPort) {
        EnvironmentException.isEmpty('The app port is not defined in the environment variables.');
      }

      return appPort;
    } catch (error) {
      this.logger.error(error?.message ?? ErrorDefaultMessages.unknownError);
      throw error;
    }
  }

  public getAppEnvironment(): Environment {
    try {
      const appNodeEnv = this.configService.get<Environment>('NODE_ENV');

      if (!appNodeEnv) {
        EnvironmentException.isEmpty('The app node_env is not defined in the environment variables.');
      }

      return appNodeEnv;
    } catch (error) {
      this.logger.error(error?.message ?? ErrorDefaultMessages.unknownError);
      throw error;
    }
  }
}

export default ApplicationEnvironment;
