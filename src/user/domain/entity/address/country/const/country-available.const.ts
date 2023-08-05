import Country from '../country.entity';
import CountryNameEnum from '../enum/country-name.enum';
import DomainException from '../../../../../../base/core/application/exception/domain.exception';
import CountryAbbreviationEnum from '../enum/country-abbreviation.enum';
import CountryCodeEnum from '../enum/country-code.enum';
import CountryLanguageEnum from '../enum/country-language.enum';
import CountryCurrencyEnum from '../enum/country-currency.enum';

class CountryAvailableConst {
  private static _instance: CountryAvailableConst;
  private readonly countryMap: { [key in CountryNameEnum]: Country };

  private constructor() {
    this.countryMap = {
      [CountryNameEnum.ARGENTINA]: Country.mount({
        name: CountryNameEnum.ARGENTINA,
        abbreviation: CountryAbbreviationEnum.ARGENTINA,
        code: CountryCodeEnum.ARGENTINA,
        language: CountryLanguageEnum.ARGENTINA,
        currency: CountryCurrencyEnum.ARGENTINA,
      }),
      [CountryNameEnum.BOLIVIA]: Country.mount({
        name: CountryNameEnum.BOLIVIA,
        abbreviation: CountryAbbreviationEnum.BOLIVIA,
        code: CountryCodeEnum.BOLIVIA,
        language: CountryLanguageEnum.BOLIVIA,
        currency: CountryCurrencyEnum.BOLIVIA,
      }),
      [CountryNameEnum.BRAZIL]: Country.mount({
        name: CountryNameEnum.BRAZIL,
        abbreviation: CountryAbbreviationEnum.BRAZIL,
        code: CountryCodeEnum.BRAZIL,
        language: CountryLanguageEnum.BRAZIL,
        currency: CountryCurrencyEnum.BRAZIL,
      }),
      [CountryNameEnum.CHILE]: Country.mount({
        name: CountryNameEnum.CHILE,
        abbreviation: CountryAbbreviationEnum.CHILE,
        code: CountryCodeEnum.CHILE,
        language: CountryLanguageEnum.CHILE,
        currency: CountryCurrencyEnum.CHILE,
      }),
      [CountryNameEnum.COLOMBIA]: Country.mount({
        name: CountryNameEnum.COLOMBIA,
        abbreviation: CountryAbbreviationEnum.COLOMBIA,
        code: CountryCodeEnum.COLOMBIA,
        language: CountryLanguageEnum.COLOMBIA,
        currency: CountryCurrencyEnum.COLOMBIA,
      }),
      [CountryNameEnum.ECUADOR]: Country.mount({
        name: CountryNameEnum.ECUADOR,
        abbreviation: CountryAbbreviationEnum.ECUADOR,
        code: CountryCodeEnum.ECUADOR,
        language: CountryLanguageEnum.ECUADOR,
        currency: CountryCurrencyEnum.ECUADOR,
      }),
      [CountryNameEnum.GUYANA]: Country.mount({
        name: CountryNameEnum.GUYANA,
        abbreviation: CountryAbbreviationEnum.GUYANA,
        code: CountryCodeEnum.GUYANA,
        language: CountryLanguageEnum.GUYANA,
        currency: CountryCurrencyEnum.GUYANA,
      }),
      [CountryNameEnum.PARAGUAY]: Country.mount({
        name: CountryNameEnum.PARAGUAY,
        abbreviation: CountryAbbreviationEnum.PARAGUAY,
        code: CountryCodeEnum.PARAGUAY,
        language: CountryLanguageEnum.PARAGUAY,
        currency: CountryCurrencyEnum.PARAGUAY,
      }),
      [CountryNameEnum.PERU]: Country.mount({
        name: CountryNameEnum.PERU,
        abbreviation: CountryAbbreviationEnum.PERU,
        code: CountryCodeEnum.PERU,
        language: CountryLanguageEnum.PERU,
        currency: CountryCurrencyEnum.PERU,
      }),
      [CountryNameEnum.SURINAME]: Country.mount({
        name: CountryNameEnum.SURINAME,
        abbreviation: CountryAbbreviationEnum.SURINAME,
        code: CountryCodeEnum.SURINAME,
        language: CountryLanguageEnum.SURINAME,
        currency: CountryCurrencyEnum.SURINAME,
      }),
      [CountryNameEnum.URUGUAY]: Country.mount({
        name: CountryNameEnum.URUGUAY,
        abbreviation: CountryAbbreviationEnum.URUGUAY,
        code: CountryCodeEnum.URUGUAY,
        language: CountryLanguageEnum.URUGUAY,
        currency: CountryCurrencyEnum.URUGUAY,
      }),
      [CountryNameEnum.VENEZUELA]: Country.mount({
        name: CountryNameEnum.VENEZUELA,
        abbreviation: CountryAbbreviationEnum.VENEZUELA,
        code: CountryCodeEnum.VENEZUELA,
        language: CountryLanguageEnum.VENEZUELA,
        currency: CountryCurrencyEnum.VENEZUELA,
      }),
    };
  }

  public static getInstance(): CountryAvailableConst {
    if (!CountryAvailableConst._instance) {
      CountryAvailableConst._instance = new CountryAvailableConst();
    }

    return CountryAvailableConst._instance;
  }

  public availableCountries(name: CountryNameEnum): Country {
    if (name === undefined || name === null) {
      DomainException.invalidData('country name is required');
    }

    if (typeof name !== 'string') {
      DomainException.invalidData('country name must be a string');
    }

    const normalizedCountryName = Country.normalizeCountryName(name);
    const country = this.countryMap[normalizedCountryName];

    if (!country) {
      DomainException.invalidData('country not available');
    }

    return country;
  }
}

export default CountryAvailableConst;
