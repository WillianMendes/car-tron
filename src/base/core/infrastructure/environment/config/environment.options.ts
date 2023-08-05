import { ConfigModuleOptions } from '@nestjs/config';
import * as Joi from 'joi';
import EnvironmentEntity from '../../../domain/entity/environment/environment.entity';
import EnvironmentFileEntity from '../../../domain/entity/environment/environment-file.entity';

class EnvironmentOptions {
  public static getConfig(): ConfigModuleOptions {
    return {
      cache: true,
      envFilePath: this.getEnvironment(),
      expandVariables: true,
      ignoreEnvFile: false,
      ignoreEnvVars: false,
      isGlobal: true,
      load: undefined,
      validationSchema: this.getValidation(),
    };
  }

  public static getValidation(): Joi.ObjectSchema {
    const environments = [
      EnvironmentEntity.LOCAL,
      EnvironmentEntity.DEVELOPMENT,
      EnvironmentEntity.TESTING,
      EnvironmentEntity.PRODUCTION,
    ];

    return Joi.object({
      // APPLICATION
      NODE_ENV: Joi.string().valid(...environments),
      APP_NAME: Joi.string().required(),
      APP_DESCRIPTION: Joi.string().required(),
      APP_HOST: Joi.string().required(),
      APP_PORT: Joi.number().port().required(),
    });
  }

  public static getEnvironment(): string {
    const environment = process.env.NODE_ENV;

    switch (environment) {
      case EnvironmentEntity.LOCAL:
        return EnvironmentFileEntity.DEVELOPMENT_LOCAL;
      case EnvironmentEntity.DEVELOPMENT:
        return EnvironmentFileEntity.DEVELOPMENT_SERVER;
      case EnvironmentEntity.TESTING:
        return EnvironmentFileEntity.TESTING;
      case EnvironmentEntity.PRODUCTION:
        return EnvironmentFileEntity.PRODUCTION;
    }
  }
}

export default EnvironmentOptions;
