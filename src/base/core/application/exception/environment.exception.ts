import { Logger } from '@nestjs/common';
import ExceptionEnum from './dto/exception.enum';

class EnvironmentException extends Error {
  code: ExceptionEnum;

  private constructor(message: string, code: ExceptionEnum, stack?: string) {
    super(message);
    this.name = EnvironmentException.name;
    this.message = message;
    this.stack = stack;
  }

  public static isEmpty(key: string): EnvironmentException {
    const message = `The environment variable ${key} is not defined in the environment file.`;
    Logger.error(message);
    throw new EnvironmentException(message, ExceptionEnum.INVALID);
  }
}

export default EnvironmentException;
