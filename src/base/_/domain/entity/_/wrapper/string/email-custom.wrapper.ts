import StringCustom from './string-custom.wrapper';
import StringValidator from '../_/validator/string.validator';

class EmailCustom extends StringCustom {
  private constructor(value: string, label: string) {
    super(value, label, 5, 255);
    this.postValidate(value);
  }

  public static create(value: string, label = 'email'): EmailCustom {
    return new EmailCustom(value, label);
  }

  protected validate(value: string): boolean {
    super.validate(value);
    return true;
  }

  protected postValidate(value: string): boolean {
    super.postValidate(value);
    StringValidator.isEmail(value, this.label);
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

export default EmailCustom;
