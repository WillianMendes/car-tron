import StringCustom from '../../../../../base/_/domain/entity/_/wrapper/string/string-custom.wrapper';
import BaseEntity from '../../../../../base/_/domain/entity/_/base.entity';

class Country extends BaseEntity {
  private readonly _name: StringCustom;
  private readonly _abbreviation: StringCustom;
  private readonly _code: StringCustom;

  private constructor(
    name: string,
    abbreviation: string,
    code: string,
    id?: number,
    createdAt?: Date,
    updatedAt?: Date,
  ) {
    super(id, createdAt, updatedAt);

    this._name = StringCustom.create(name, 'name', 3, 255);
    this._abbreviation = StringCustom.create(abbreviation, 'abbreviation', 2, 2);
    this._code = StringCustom.create(code, 'code', 3, 3);
  }

  public static create(input: { name: string; abbreviation: string; code: string }): Country {
    return new Country(input?.name, input?.abbreviation, input?.code);
  }

  public static mount(input: {
    name: string;
    abbreviation: string;
    code: string;
    id: number;
    createdAt: Date;
    updatedAt: Date;
  }): Country {
    return new Country(input?.name, input?.abbreviation, input?.code, input?.id, input?.createdAt, input?.updatedAt);
  }

  public get name(): string {
    return this._name.value;
  }

  public get abbreviation(): string {
    return this._abbreviation.value;
  }

  public get code(): string {
    return this._code.value;
  }
}

export default Country;
