import BaseEntity from '../../../../base/_/domain/entity/_/base.entity';
import BooleanCustom from '../../../../base/_/domain/entity/_/wrapper/boolean/boolean-custom.wrapper';
import EmailCustom from '../../../../base/_/domain/entity/_/wrapper/string/email-custom.wrapper';

class Email extends BaseEntity {
  private _address: EmailCustom;
  private _isVerified: BooleanCustom;
  private _isSpamReported: BooleanCustom;
  private _isUnsubscribed: BooleanCustom;
  private _isHardBounced: BooleanCustom;
  private _isSoftBounced: BooleanCustom;

  private constructor(
    address: string,
    isVerified = false,
    isSpamReported = false,
    isUnsubscribed = false,
    isHardBounced = false,
    isSoftBounced = false,
    id?: number,
    createdAt?: Date,
    updatedAt?: Date,
  ) {
    super(id, createdAt, updatedAt);

    this._address = EmailCustom.create(address, 'address');
    this._isVerified = BooleanCustom.create(isVerified ?? false, 'is verified');
    this._isSpamReported = BooleanCustom.create(isSpamReported ?? false, 'is spam reported');
    this._isUnsubscribed = BooleanCustom.create(isUnsubscribed ?? false, 'is unsubscribed');
    this._isHardBounced = BooleanCustom.create(isHardBounced ?? false, 'is hard bounced');
    this._isSoftBounced = BooleanCustom.create(isSoftBounced ?? false, 'is soft bounced');
  }

  public static create(input: { address: string }): Email {
    return new Email(input.address);
  }

  public static mount(input: {
    address: string;
    isVerified: boolean;
    isSpamReported: boolean;
    isUnsubscribed: boolean;
    isHardBounced: boolean;
    isSoftBounced: boolean;
    id: number;
    createdAt: Date;
    updatedAt: Date;
  }): Email {
    return new Email(
      input.address,
      input.isVerified,
      input.isSpamReported,
      input.isUnsubscribed,
      input.isHardBounced,
      input.isSoftBounced,
      input.id,
      input.createdAt,
      input.updatedAt,
    );
  }

  public get address(): string {
    return this._address.value;
  }

  public set address(address: string) {
    this._address = EmailCustom.create(address, 'address');
  }

  public get isVerified(): boolean {
    return this._isVerified.value;
  }

  public set isVerified(isVerified: boolean) {
    this._isVerified.value = isVerified;
  }

  public get isSpamReported(): boolean {
    return this._isSpamReported.value;
  }

  public set isSpamReported(isSpamReported: boolean) {
    this._isSpamReported.value = isSpamReported;
  }

  public get isUnsubscribed(): boolean {
    return this._isUnsubscribed.value;
  }

  public set isUnsubscribed(isUnsubscribed: boolean) {
    this._isUnsubscribed.value = isUnsubscribed;
  }

  public get isHardBounced(): boolean {
    return this._isHardBounced.value;
  }

  public set isHardBounced(isHardBounced: boolean) {
    this._isHardBounced.value = isHardBounced;
  }

  public get isSoftBounced(): boolean {
    return this._isSoftBounced.value;
  }

  public set isSoftBounced(isSoftBounced: boolean) {
    this._isSoftBounced.value = isSoftBounced;
  }
}

export default Email;
