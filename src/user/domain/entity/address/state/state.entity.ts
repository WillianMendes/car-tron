import BaseEntity from '../../../../../base/_/domain/entity/_/base.entity';
import StringCustom from '../../../../../base/_/domain/entity/_/wrapper/string/string-custom.wrapper';

class State extends BaseEntity {
  private readonly _name: StringCustom;
  private readonly _abbreviation: StringCustom;

  private constructor(name: string, abbreviation: string, id?: number, createdAt?: Date, updatedAt?: Date) {
    super(id, createdAt, updatedAt);

    this._name = StringCustom.create(name, 'name', 3, 255);
    this._abbreviation = StringCustom.create(abbreviation, 'abbreviation', 2, 2);
  }

  public static create(input: { name: string; abbreviation: string }): State {
    return new State(input?.name, input?.abbreviation);
  }

  public static mount(input: {
    name: string;
    abbreviation: string;
    id: number;
    createdAt: Date;
    updatedAt: Date;
  }): State {
    return new State(input?.name, input?.abbreviation, input?.id, input?.createdAt, input?.updatedAt);
  }

  public get name(): string {
    return this._name.value;
  }

  public get abbreviation(): string {
    return this._abbreviation.value;
  }
}

export default State;
