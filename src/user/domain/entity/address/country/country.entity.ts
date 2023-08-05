import CountryNameEnum from './enum/country-name.enum';
import CountryAbbreviationEnum from './enum/country-abbreviation.enum';
import CountryCodeEnum from './enum/country-code.enum';
import CountryLanguageEnum from './enum/country-language.enum';
import CountryCurrencyEnum from './enum/country-currency.enum';
import CountryAvailableConst from './const/country-available.const';
import DomainException from '../../../../../base/core/application/exception/domain.exception';

class Country {
  private _name: CountryNameEnum;
  private _abbreviation: CountryAbbreviationEnum;
  private _code: CountryCodeEnum;
  private _language: CountryLanguageEnum;
  private _currency: CountryCurrencyEnum;

  private constructor(
    name: CountryNameEnum,
    abbreviation: CountryAbbreviationEnum,
    code: CountryCodeEnum,
    language: CountryLanguageEnum,
    currency: CountryCurrencyEnum,
  ) {
    this._name = name;
    this._abbreviation = abbreviation;
    this._code = code;
    this._language = language;
    this._currency = currency;

    this.validate();
  }

  public static create(name: CountryNameEnum): Country {
    const country = CountryAvailableConst.getInstance().availableCountries(name);

    if (!country) {
      DomainException.invalidData('country not available');
    }

    return country;
  }

  public static mount(input: {
    name: CountryNameEnum;
    abbreviation: CountryAbbreviationEnum;
    code: CountryCodeEnum;
    language: CountryLanguageEnum;
    currency: CountryCurrencyEnum;
  }): Country {
    return new Country(input.name, input.abbreviation, input.code, input.language, input.currency);
  }

  private validate(): void {
    this.validateName();
    this.validateAbbreviation();
    this.validateCode();
    this.validateLanguage();
    this.validateCurrency();
  }

  private validateName(): void {
    const isNameValid = Object.values(CountryNameEnum).includes(this._name);
    if (!isNameValid) {
      DomainException.invalidData('invalid country name.');
    }
  }

  private validateAbbreviation(): void {
    const isAbbreviationValid = Object.values(CountryAbbreviationEnum).includes(this._abbreviation);
    if (!isAbbreviationValid) {
      DomainException.invalidData('invalid country abbreviation.');
    }
  }

  private validateCode(): void {
    const isCodeValid = Object.values(CountryCodeEnum).includes(this._code);
    if (!isCodeValid) {
      DomainException.invalidData('invalid country code.');
    }
  }

  private validateLanguage(): void {
    const isLanguageValid = Object.values(CountryLanguageEnum).includes(this._language);
    if (!isLanguageValid) {
      DomainException.invalidData('invalid country language.');
    }
  }

  private validateCurrency(): void {
    const isCurrencyValid = Object.values(CountryCurrencyEnum).includes(this._currency);
    if (!isCurrencyValid) {
      DomainException.invalidData('invalid country currency.');
    }
  }

  public static normalizeCountryName(name: string): string {
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
  }

  public get name(): CountryNameEnum {
    return this._name;
  }

  public set name(name: CountryNameEnum) {
    this._name = name;
    this.validateName();
  }

  public get abbreviation(): CountryAbbreviationEnum {
    return this._abbreviation;
  }

  public set abbreviation(abbreviation: CountryAbbreviationEnum) {
    this._abbreviation = abbreviation;
    this.validateAbbreviation();
  }

  public get code(): CountryCodeEnum {
    return this._code;
  }

  public set code(code: CountryCodeEnum) {
    this._code = code;
    this.validateCode();
  }

  public get language(): CountryLanguageEnum {
    return this._language;
  }

  public set language(language: CountryLanguageEnum) {
    this._language = language;
    this.validateLanguage();
  }

  public get currency(): CountryCurrencyEnum {
    return this._currency;
  }

  public set currency(currency: CountryCurrencyEnum) {
    this._currency = currency;
    this.validateCurrency();
  }
}

export default Country;
