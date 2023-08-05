import { Logger } from '@nestjs/common';
import ExceptionEnum from './dto/exception.enum';

class DomainException extends Error {
  code: ExceptionEnum;

  private constructor(message: string, code: ExceptionEnum, stack?: string) {
    super(message);
    this.name = DomainException.name;
    this.code = code;
    this.stack = stack;
  }

  public static notFound(entity: string, stack?: string): never {
    const fullMessage = `${entity} not found`;
    Logger.error(fullMessage, stack);
    throw new DomainException(fullMessage, ExceptionEnum.NOT_FOUND, stack);
  }

  public static invalidData(message: string, stack?: string): never {
    Logger.error(message, stack);
    throw new DomainException(message, ExceptionEnum.INVALID, stack);
  }
}

export default DomainException;
