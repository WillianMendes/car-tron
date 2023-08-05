import Country from '../country.entity';
import CountryNameEnum from '../enum/country-name.enum';
import CountryAbbreviationEnum from '../enum/country-abbreviation.enum';
import CountryCodeEnum from '../enum/country-code.enum';
import CountryLanguageEnum from '../enum/country-language.enum';
import CountryCurrencyEnum from '../enum/country-currency.enum';

describe('Country Entity', () => {
  describe('Read', () => {
    let country: Country;

    beforeAll(() => {
      country = Country.create(CountryNameEnum.BRAZIL);

      expect(country).toBeDefined();
      expect(country).toBeInstanceOf(Country);
      expect(country.name).toBe(CountryNameEnum.BRAZIL);
      expect(country.abbreviation).toBe(CountryAbbreviationEnum.BRAZIL);
      expect(country.code).toBe(CountryCodeEnum.BRAZIL);
      expect(country.language).toBe(CountryLanguageEnum.BRAZIL);
      expect(country.currency).toBe(CountryCurrencyEnum.BRAZIL);
    });

    afterAll(() => {
      country = null;
    });

    describe('Success', () => {
      it('should return a new instance of Country', () => {
        expect(country).toBeDefined();
        expect(country).toBeInstanceOf(Country);
      });

      it('should return a the correct name', () => {
        expect(country.name).toBe(CountryNameEnum.BRAZIL);
      });

      it('should return a the correct abbreviation', () => {
        expect(country.abbreviation).toBe(CountryAbbreviationEnum.BRAZIL);
      });

      it('should return a the correct code', () => {
        expect(country.code).toBe(CountryCodeEnum.BRAZIL);
      });

      it('should return a the correct language', () => {
        expect(country.language).toBe(CountryLanguageEnum.BRAZIL);
      });

      it('should return a the correct currency', () => {
        expect(country.currency).toBe(CountryCurrencyEnum.BRAZIL);
      });
    });
  });

  describe('Create', () => {
    describe('Success', () => {
      it('should return a new instance of Country', () => {
        const country = Country.create(CountryNameEnum.BRAZIL);

        expect(country).toBeDefined();
        expect(country).toBeInstanceOf(Country);
        expect(country.name).toBe(CountryNameEnum.BRAZIL);
        expect(country.abbreviation).toBe(CountryAbbreviationEnum.BRAZIL);
        expect(country.code).toBe(CountryCodeEnum.BRAZIL);
        expect(country.language).toBe(CountryLanguageEnum.BRAZIL);
        expect(country.currency).toBe(CountryCurrencyEnum.BRAZIL);
      });
    });

    describe('Failure', () => {
      describe('Name', () => {
        it('should throw an error if name is not null, undefined or empty', () => {
          expect(() => Country.create(null)).toThrow('country name is required');
          expect(() => Country.create(undefined)).toThrow('country name is required');
          expect(() => Country.create('' as any)).toThrow('country not available');
        });

        it('should throw an error if name is not a valid country name', () => {
          expect(() => Country.create('invalid' as any)).toThrow('country not available');
          expect(() => Country.create(true as any)).toThrow('country name must be a string');
          expect(() => Country.create(1 as any)).toThrow('country name must be a string');
          expect(() => Country.create({} as any)).toThrow('country name must be a string');
          expect(() => Country.create([] as any)).toThrow('country name must be a string');
        });
      });
    });
  });

  describe('Mount', () => {
    describe('Success', () => {
      it('should return a new instance of Country', () => {
        const country = Country.mount({
          name: CountryNameEnum.BRAZIL,
          abbreviation: CountryAbbreviationEnum.BRAZIL,
          code: CountryCodeEnum.BRAZIL,
          language: CountryLanguageEnum.BRAZIL,
          currency: CountryCurrencyEnum.BRAZIL,
        });

        expect(country).toBeDefined();
        expect(country).toBeInstanceOf(Country);
        expect(country.name).toBe(CountryNameEnum.BRAZIL);
        expect(country.abbreviation).toBe(CountryAbbreviationEnum.BRAZIL);
        expect(country.code).toBe(CountryCodeEnum.BRAZIL);
        expect(country.language).toBe(CountryLanguageEnum.BRAZIL);
        expect(country.currency).toBe(CountryCurrencyEnum.BRAZIL);
      });

      it('should return a new instance of Country mounting the data', () => {
        const country = Country.mount({
          name: CountryNameEnum.URUGUAY,
          abbreviation: CountryAbbreviationEnum.URUGUAY,
          code: CountryCodeEnum.URUGUAY,
          language: CountryLanguageEnum.URUGUAY,
          currency: CountryCurrencyEnum.URUGUAY,
        });

        expect(country).toBeDefined();
        expect(country).toBeInstanceOf(Country);
        expect(country.name).toBe(CountryNameEnum.URUGUAY);
        expect(country.abbreviation).toBe(CountryAbbreviationEnum.URUGUAY);
        expect(country.code).toBe(CountryCodeEnum.URUGUAY);
        expect(country.language).toBe(CountryLanguageEnum.URUGUAY);
        expect(country.currency).toBe(CountryCurrencyEnum.URUGUAY);
      });
    });

    describe('Failure', () => {
      describe('Name', () => {
        it('should throw an error if name is not null, undefined or empty', () => {
          const mockCountry = (name: any) => ({
            name: name,
            abbreviation: CountryAbbreviationEnum.BRAZIL,
            code: CountryCodeEnum.BRAZIL,
            language: CountryLanguageEnum.BRAZIL,
            currency: CountryCurrencyEnum.BRAZIL,
          });

          expect(() => Country.mount(mockCountry(null))).toThrow('invalid country name');
          expect(() => Country.mount(mockCountry(undefined))).toThrow('invalid country name');
          expect(() => Country.mount(mockCountry('' as any))).toThrow('invalid country name');
        });

        it('should throw an error if name is not a valid country name', () => {
          const mockCountry = (name: any) => ({
            name: name,
            abbreviation: CountryAbbreviationEnum.BRAZIL,
            code: CountryCodeEnum.BRAZIL,
            language: CountryLanguageEnum.BRAZIL,
            currency: CountryCurrencyEnum.BRAZIL,
          });

          expect(() => Country.mount(mockCountry('invalid' as any))).toThrow('invalid country name');
          expect(() => Country.mount(mockCountry(true as any))).toThrow('invalid country name');
          expect(() => Country.mount(mockCountry(1 as any))).toThrow('invalid country name');
          expect(() => Country.mount(mockCountry({} as any))).toThrow('invalid country name');
          expect(() => Country.mount(mockCountry([] as any))).toThrow('invalid country name');
        });
      });

      describe('Abbreviation', () => {
        it('should throw an error if abbreviation is not null, undefined or empty', () => {
          const mockCountry = (abbreviation: any) => ({
            name: CountryNameEnum.BRAZIL,
            abbreviation: abbreviation,
            code: CountryCodeEnum.BRAZIL,
            language: CountryLanguageEnum.BRAZIL,
            currency: CountryCurrencyEnum.BRAZIL,
          });

          expect(() => Country.mount(mockCountry(null))).toThrow('invalid country abbreviation');
          expect(() => Country.mount(mockCountry(undefined))).toThrow('invalid country abbreviation');
          expect(() => Country.mount(mockCountry('' as any))).toThrow('invalid country abbreviation');
        });

        it('should throw an error if abbreviation is not a valid country abbreviation', () => {
          const mockCountry = (abbreviation: any) => ({
            name: CountryNameEnum.BRAZIL,
            abbreviation: abbreviation,
            code: CountryCodeEnum.BRAZIL,
            language: CountryLanguageEnum.BRAZIL,
            currency: CountryCurrencyEnum.BRAZIL,
          });

          expect(() => Country.mount(mockCountry('invalid' as any))).toThrow('invalid country abbreviation');
          expect(() => Country.mount(mockCountry(true as any))).toThrow('invalid country abbreviation');
          expect(() => Country.mount(mockCountry(1 as any))).toThrow('invalid country abbreviation');
          expect(() => Country.mount(mockCountry({} as any))).toThrow('invalid country abbreviation');
          expect(() => Country.mount(mockCountry([] as any))).toThrow('invalid country abbreviation');
        });
      });

      describe('Code', () => {
        it('should throw an error if code is not null, undefined or empty', () => {
          const mockCountry = (code: any) => ({
            name: CountryNameEnum.BRAZIL,
            abbreviation: CountryAbbreviationEnum.BRAZIL,
            code: code,
            language: CountryLanguageEnum.BRAZIL,
            currency: CountryCurrencyEnum.BRAZIL,
          });

          expect(() => Country.mount(mockCountry(null))).toThrow('invalid country code');
          expect(() => Country.mount(mockCountry(undefined))).toThrow('invalid country code');
          expect(() => Country.mount(mockCountry('' as any))).toThrow('invalid country code');
        });

        it('should throw an error if code is not a valid country code', () => {
          const mockCountry = (code: any) => ({
            name: CountryNameEnum.BRAZIL,
            abbreviation: CountryAbbreviationEnum.BRAZIL,
            code: code,
            language: CountryLanguageEnum.BRAZIL,
            currency: CountryCurrencyEnum.BRAZIL,
          });

          expect(() => Country.mount(mockCountry('invalid' as any))).toThrow('invalid country code');
          expect(() => Country.mount(mockCountry(true as any))).toThrow('invalid country code');
          expect(() => Country.mount(mockCountry(1 as any))).toThrow('invalid country code');
          expect(() => Country.mount(mockCountry({} as any))).toThrow('invalid country code');
          expect(() => Country.mount(mockCountry([] as any))).toThrow('invalid country code');
        });
      });

      describe('Language', () => {
        it('should throw an error if language is not null, undefined or empty', () => {
          const mockCountry = (language: any) => ({
            name: CountryNameEnum.BRAZIL,
            abbreviation: CountryAbbreviationEnum.BRAZIL,
            code: CountryCodeEnum.BRAZIL,
            language: language,
            currency: CountryCurrencyEnum.BRAZIL,
          });

          expect(() => Country.mount(mockCountry(null))).toThrow('invalid country language');
          expect(() => Country.mount(mockCountry(undefined))).toThrow('invalid country language');
          expect(() => Country.mount(mockCountry('' as any))).toThrow('invalid country language');
        });

        it('should throw an error if language is not a valid country language', () => {
          const mockCountry = (language: any) => ({
            name: CountryNameEnum.BRAZIL,
            abbreviation: CountryAbbreviationEnum.BRAZIL,
            code: CountryCodeEnum.BRAZIL,
            language: language,
            currency: CountryCurrencyEnum.BRAZIL,
          });

          expect(() => Country.mount(mockCountry('invalid' as any))).toThrow('invalid country language');
          expect(() => Country.mount(mockCountry(true as any))).toThrow('invalid country language');
          expect(() => Country.mount(mockCountry(1 as any))).toThrow('invalid country language');
          expect(() => Country.mount(mockCountry({} as any))).toThrow('invalid country language');
          expect(() => Country.mount(mockCountry([] as any))).toThrow('invalid country language');
        });
      });

      describe('Currency', () => {
        it('should throw an error if currency is not null, undefined or empty', () => {
          const mockCountry = (currency: any) => ({
            name: CountryNameEnum.BRAZIL,
            abbreviation: CountryAbbreviationEnum.BRAZIL,
            code: CountryCodeEnum.BRAZIL,
            language: CountryLanguageEnum.BRAZIL,
            currency: currency,
          });

          expect(() => Country.mount(mockCountry(null))).toThrow('invalid country currency');
          expect(() => Country.mount(mockCountry(undefined))).toThrow('invalid country currency');
          expect(() => Country.mount(mockCountry('' as any))).toThrow('invalid country currency');
        });

        it('should throw an error if currency is not a valid country currency', () => {
          const mockCountry = (currency: any) => ({
            name: CountryNameEnum.BRAZIL,
            abbreviation: CountryAbbreviationEnum.BRAZIL,
            code: CountryCodeEnum.BRAZIL,
            language: CountryLanguageEnum.BRAZIL,
            currency: currency,
          });

          expect(() => Country.mount(mockCountry('invalid' as any))).toThrow('invalid country currency');
          expect(() => Country.mount(mockCountry(true as any))).toThrow('invalid country currency');
          expect(() => Country.mount(mockCountry(1 as any))).toThrow('invalid country currency');
          expect(() => Country.mount(mockCountry({} as any))).toThrow('invalid country currency');
          expect(() => Country.mount(mockCountry([] as any))).toThrow('invalid country currency');
        });
      });
    });
  });

  describe('Update', () => {
    let country: Country;

    beforeAll(() => {
      country = Country.create(CountryNameEnum.BRAZIL);

      expect(country).toBeDefined();
      expect(country).toBeInstanceOf(Country);
      expect(country.name).toBe(CountryNameEnum.BRAZIL);
      expect(country.abbreviation).toBe(CountryAbbreviationEnum.BRAZIL);
      expect(country.code).toBe(CountryCodeEnum.BRAZIL);
      expect(country.language).toBe(CountryLanguageEnum.BRAZIL);
      expect(country.currency).toBe(CountryCurrencyEnum.BRAZIL);
    });

    afterAll(() => {
      country = null;
    });

    describe('Success', () => {
      describe('Name', () => {
        it('should update name', () => {
          expect(country.name).toBe(CountryNameEnum.BRAZIL);
          country.name = CountryNameEnum.URUGUAY;
          expect(country.name).toBe(CountryNameEnum.URUGUAY);
        });
      });

      describe('Abbreviation', () => {
        it('should update abbreviation', () => {
          expect(country.abbreviation).toBe(CountryAbbreviationEnum.BRAZIL);
          country.abbreviation = CountryAbbreviationEnum.URUGUAY;
          expect(country.abbreviation).toBe(CountryAbbreviationEnum.URUGUAY);
        });
      });

      describe('Code', () => {
        it('should update code', () => {
          expect(country.code).toBe(CountryCodeEnum.BRAZIL);
          country.code = CountryCodeEnum.URUGUAY;
          expect(country.code).toBe(CountryCodeEnum.URUGUAY);
        });
      });

      describe('Language', () => {
        it('should update language', () => {
          expect(country.language).toBe(CountryLanguageEnum.BRAZIL);
          country.language = CountryLanguageEnum.URUGUAY;
          expect(country.language).toBe(CountryLanguageEnum.URUGUAY);
        });
      });

      describe('Currency', () => {
        it('should update currency', () => {
          expect(country.currency).toBe(CountryCurrencyEnum.BRAZIL);
          country.currency = CountryCurrencyEnum.URUGUAY;
          expect(country.currency).toBe(CountryCurrencyEnum.URUGUAY);
        });
      });
    });

    describe('Failure', () => {
      describe('Name', () => {
        it('should throw an error if name is not null, undefined or empty', () => {
          expect(() => (country.name = null)).toThrow('invalid country name');
          expect(() => (country.name = undefined)).toThrow('invalid country name');
          expect(() => (country.name = '' as any)).toThrow('invalid country name');
        });

        it('should throw an error if name is not a valid country name', () => {
          expect(() => (country.name = 'invalid' as any)).toThrow('invalid country name');
          expect(() => (country.name = true as any)).toThrow('invalid country name');
          expect(() => (country.name = 1 as any)).toThrow('invalid country name');
          expect(() => (country.name = {} as any)).toThrow('invalid country name');
          expect(() => (country.name = [] as any)).toThrow('invalid country name');
        });
      });

      describe('Abbreviation', () => {
        it('should throw an error if abbreviation is not null, undefined or empty', () => {
          expect(() => (country.abbreviation = null)).toThrow('invalid country abbreviation');
          expect(() => (country.abbreviation = undefined)).toThrow('invalid country abbreviation');
          expect(() => (country.abbreviation = '' as any)).toThrow('invalid country abbreviation');
        });

        it('should throw an error if abbreviation is not a valid country abbreviation', () => {
          expect(() => (country.abbreviation = 'invalid' as any)).toThrow('invalid country abbreviation');
          expect(() => (country.abbreviation = true as any)).toThrow('invalid country abbreviation');
          expect(() => (country.abbreviation = 1 as any)).toThrow('invalid country abbreviation');
          expect(() => (country.abbreviation = {} as any)).toThrow('invalid country abbreviation');
          expect(() => (country.abbreviation = [] as any)).toThrow('invalid country abbreviation');
        });
      });

      describe('Code', () => {
        it('should throw an error if code is not null, undefined or empty', () => {
          expect(() => (country.code = null)).toThrow('invalid country code');
          expect(() => (country.code = undefined)).toThrow('invalid country code');
          expect(() => (country.code = '' as any)).toThrow('invalid country code');
        });

        it('should throw an error if code is not a valid country code', () => {
          expect(() => (country.code = 'invalid' as any)).toThrow('invalid country code');
          expect(() => (country.code = true as any)).toThrow('invalid country code');
          expect(() => (country.code = 1 as any)).toThrow('invalid country code');
          expect(() => (country.code = {} as any)).toThrow('invalid country code');
          expect(() => (country.code = [] as any)).toThrow('invalid country code');
        });
      });

      describe('Language', () => {
        it('should throw an error if language is not null, undefined or empty', () => {
          expect(() => (country.language = null)).toThrow('invalid country language');
          expect(() => (country.language = undefined)).toThrow('invalid country language');
          expect(() => (country.language = '' as any)).toThrow('invalid country language');
        });

        it('should throw an error if language is not a valid country language', () => {
          expect(() => (country.language = 'invalid' as any)).toThrow('invalid country language');
          expect(() => (country.language = true as any)).toThrow('invalid country language');
          expect(() => (country.language = 1 as any)).toThrow('invalid country language');
          expect(() => (country.language = {} as any)).toThrow('invalid country language');
          expect(() => (country.language = [] as any)).toThrow('invalid country language');
        });
      });

      describe('Currency', () => {
        it('should throw an error if currency is not null, undefined or empty', () => {
          expect(() => (country.currency = null)).toThrow('invalid country currency');
          expect(() => (country.currency = undefined)).toThrow('invalid country currency');
          expect(() => (country.currency = '' as any)).toThrow('invalid country currency');
        });

        it('should throw an error if currency is not a valid country currency', () => {
          expect(() => (country.currency = 'invalid' as any)).toThrow('invalid country currency');
          expect(() => (country.currency = true as any)).toThrow('invalid country currency');
          expect(() => (country.currency = 1 as any)).toThrow('invalid country currency');
          expect(() => (country.currency = {} as any)).toThrow('invalid country currency');
          expect(() => (country.currency = [] as any)).toThrow('invalid country currency');
        });
      });
    });
  });
});
