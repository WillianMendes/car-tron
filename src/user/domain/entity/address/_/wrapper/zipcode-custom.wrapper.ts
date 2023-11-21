import StringCustom from '../../../../../../base/_/domain/entity/_/wrapper/string/string-custom.wrapper';
import StringValidator from '../../../../../../base/_/domain/entity/_/wrapper/_/validator/string.validator';

class ZipcodeCustomWrapper extends StringCustom {
  private constructor(value: string, label: string) {
    super(value, label, 8, 8);
    this.postValidate(value);
  }

  public static create(value: string, label = 'zipcode'): ZipcodeCustomWrapper {
    return new ZipcodeCustomWrapper(value, label);
  }

  protected validate(value: string): boolean {
    super.validate(value);
    return true;
  }

  protected postValidate(value: string): boolean {
    super.postValidate(value);
    StringValidator.isNumberString(value, this.label);
    return true;
  }

  public get value(): string {
    return this._value;
  }

  public set value(value: string) {
    this.validate(value);
    this.postValidate(value);
    this._value = value;
  }
}

export default ZipcodeCustomWrapper;
