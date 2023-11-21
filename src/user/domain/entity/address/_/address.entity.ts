import BaseEntity from '../../../../../base/_/domain/entity/_/base.entity';
import Country from '../country/country.entity';
import State from '../state/state.entity';
import StringCustom from '../../../../../base/_/domain/entity/_/wrapper/string/string-custom.wrapper';
import PositiveInteger from '../../../../../base/_/domain/entity/_/wrapper/number/integer.wrapper';
import ZipcodeCustom from './wrapper/zipcode-custom.wrapper';
import DomainException from '../../../../../base/core/application/exception/domain.exception';

class Address extends BaseEntity {
  private _country: Country;
  private _state: State;
  private _city: StringCustom;
  private _neighborhood: StringCustom;
  private _thoroughfare: StringCustom;
  private _zipcode: ZipcodeCustom;
  private _number: PositiveInteger;
  private _complement: StringCustom;

  private constructor(
    country: Country,
    state: State,
    city: string,
    neighborhood: string,
    thoroughfare: string,
    zipcode: string,
    number: number,
    complement?: string,
    id?: number,
    createdAt?: Date,
    updatedAt?: Date,
  ) {
    super(id, createdAt, updatedAt);

    this._country = country;
    this._state = state;
    this._city = StringCustom.create(city, 'city', 1, 255);
    this._neighborhood = StringCustom.create(neighborhood, 'neighborhood', 1, 255);
    this._thoroughfare = StringCustom.create(thoroughfare, 'thoroughfare', 1, 255);
    this._number = PositiveInteger.create(number, 'number');
    this._zipcode = ZipcodeCustom.create(zipcode, 'zipcode');
    this._complement = complement ? StringCustom.create(complement, 'complement', 1, 255) : null;
  }

  public static create(input: {
    country: Country;
    state: State;
    city: string;
    neighborhood: string;
    thoroughfare: string;
    zipcode: string;
    number: number;
    complement?: string;
  }): Address {
    this.validateCountry(input.country);
    this.validateState(input.state);

    return new Address(
      input.country,
      input.state,
      input.city,
      input.neighborhood,
      input.thoroughfare,
      input.zipcode,
      input.number,
      input.complement,
    );
  }

  public static mount(input: {
    country: Country;
    state: State;
    city: string;
    neighborhood: string;
    thoroughfare: string;
    zipcode: string;
    number: number;
    complement?: string;
    id: number;
    createdAt: Date;
    updatedAt: Date;
  }): Address {
    return new Address(
      input.country,
      input.state,
      input.city,
      input.neighborhood,
      input.thoroughfare,
      input.zipcode,
      input.number,
      input.complement,
      input.id,
      input.createdAt,
      input.updatedAt,
    );
  }

  public static validateCountry(country: Country): void {
    if (!(typeof country === 'object' && country instanceof Country)) {
      DomainException.invalidData('country is not a Country instance');
    }
  }

  public static validateState(state: State): void {
    if (!(typeof state === 'object' && state instanceof State)) {
      DomainException.invalidData('state is not a State instance');
    }
  }

  public get country(): Country {
    return this._country;
  }

  public set country(country: Country) {
    Address.validateCountry(country);
    this._country = country;
  }

  public get state(): State {
    return this._state;
  }

  public set state(state: State) {
    Address.validateState(state);
    this._state = state;
  }

  public get city(): string {
    return this._city.value;
  }

  public set city(city: string) {
    this._city.value = city;
  }

  public get neighborhood(): string {
    return this._neighborhood.value;
  }

  public set neighborhood(neighborhood: string) {
    this._neighborhood.value = neighborhood;
  }

  public get thoroughfare(): string {
    return this._thoroughfare.value;
  }

  public set thoroughfare(thoroughfare: string) {
    this._thoroughfare.value = thoroughfare;
  }

  public get zipcode(): string {
    return this._zipcode.value;
  }

  public set zipcode(zipcode: string) {
    this._zipcode.value = zipcode;
  }

  public get number(): number {
    return this._number.value;
  }

  public set number(number: number) {
    this._number.value = number;
  }

  public get complement(): string | undefined {
    return this._complement?.value;
  }

  public set complement(complement: string) {
    this._complement = StringCustom.create(complement, 'complement', 1, 255);
  }
}

export default Address;
