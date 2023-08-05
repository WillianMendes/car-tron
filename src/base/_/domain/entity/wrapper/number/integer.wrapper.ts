import BaseWrapper from '../_/base.wrapper';
import NumberValidator from '../_/validator/number.validator';

class PositiveInteger extends BaseWrapper<number> {
  private constructor(value: number, label: string) {
    super(value, label);
  }

  public static create(value: number, label = 'integer'): PositiveInteger {
    return new PositiveInteger(value, label);
  }

  protected validate(value: number): boolean {
    NumberValidator.isInteger(value, this.label);
    return true;
  }

  public get value(): number {
    return this._value;
  }

  public set value(value: number) {
    this.validate(value);
    this._value = value;
  }
}

export default PositiveInteger;
