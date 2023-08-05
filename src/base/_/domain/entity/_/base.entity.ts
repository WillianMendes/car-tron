import ID from '../wrapper/number/numeric-id.wrapper';
import DateCustom from '../wrapper/date/date-custom.wrapper';

class BaseEntity {
  private readonly _id?: ID;
  private readonly _createdAt: DateCustom;
  private _updatedAt: DateCustom;

  constructor(id?: number, createdAt?: Date, updatedAt?: Date) {
    this._id = id ? ID.create(id, 'id') : undefined;
    this._createdAt = DateCustom.create(createdAt ?? new Date(), 'created at');
    this._updatedAt = DateCustom.create(updatedAt ?? new Date(), 'updated at');
  }

  public get id(): number {
    return this._id?.value;
  }

  public get createdAt(): Date {
    return this._createdAt.value;
  }

  public get updatedAt(): Date {
    return this._updatedAt.value;
  }

  public set updatedAt(updatedAt: Date) {
    this._updatedAt = DateCustom.create(updatedAt, 'updatedAt');
  }
}

export default BaseEntity;
