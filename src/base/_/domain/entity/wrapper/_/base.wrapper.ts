abstract class BaseObjectValue<T> {
  protected _label: string;
  protected _value: T;

  protected constructor(value: T, label = 'value') {
    this.label = label;
    this.value = value;
  }

  protected abstract validate(value?: T): boolean;

  get label(): string {
    return this._label;
  }

  set label(label: string) {
    this._label = label;
  }

  get value(): T {
    return this._value;
  }

  set value(value: T) {
    this.validate(value);
    this._value = value;
  }
}

export default BaseObjectValue;
