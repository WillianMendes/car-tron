import Country from '../country.entity';

const countryMock = {
  id: 1,
  name: 'Brazil',
  code: 'BRA',
  abbreviation: 'BR',
  createdAt: new Date(),
  updatedAt: new Date(),
};

describe('Country Entity', () => {
  describe('Read', () => {
    let country: Country;

    beforeAll(() => {
      country = Country.mount(countryMock);

      expect(country).toBeDefined();
      expect(country).toBeInstanceOf(Country);
      expect(country.name).toBe(countryMock.name);
      expect(country.abbreviation).toBe(countryMock.abbreviation);
      expect(country.code).toBe(countryMock.code);
    });

    afterAll(() => {
      country = null;
    });

    describe('Success', () => {
      it('should return a new instance of Country', () => {
        expect(country).toBeDefined();
        expect(country).toBeInstanceOf(Country);
      });

      it('should return a the correct id', () => {
        expect(country.id).toBe(countryMock.id);
      });

      it('should return a the correct name', () => {
        expect(country.name).toBe(countryMock.name);
      });

      it('should return a the correct abbreviation', () => {
        expect(country.abbreviation).toBe(countryMock.abbreviation);
      });

      it('should return a the correct code', () => {
        expect(country.code).toBe(countryMock.code);
      });

      it('should return a the correct created at', () => {
        expect(country.createdAt).toBe(countryMock.createdAt);
      });

      it('should return a the correct updated at', () => {
        expect(country.updatedAt).toBe(countryMock.updatedAt);
      });
    });
  });

  describe('Create', () => {
    describe('Success', () => {
      it('should return a new instance of Country', () => {
        const country = Country.create(countryMock);

        expect(country).toBeDefined();
        expect(country).toBeInstanceOf(Country);
        expect(country.id).toBeUndefined();
        expect(country.name).toBe(countryMock.name);
        expect(country.abbreviation).toBe(countryMock.abbreviation);
        expect(country.code).toBe(countryMock.code);
        expect(country.createdAt).toBeDefined();
        expect(country.updatedAt).toBeDefined();
      });
    });

    describe('Failure', () => {
      describe('Name', () => {
        it('should throw an error if name is null, undefined or empty', () => {
          expect(() => Country.create(null)).toThrow('name is required');
          expect(() => Country.create(undefined)).toThrow('name is required');
          expect(() => Country.create('' as any)).toThrow('name is required');
        });

        it('should throw an error if name is not string', () => {
          expect(() => Country.create(true as any)).toThrow('name is required');
          expect(() => Country.create(1 as any)).toThrow('name is required');
          expect(() => Country.create({} as any)).toThrow('name is required');
          expect(() => Country.create([] as any)).toThrow('name is required');
        });

        it('should throw an error if name is less than 3 characters', () => {
          expect(() => Country.create({ ...countryMock, name: 'br' })).toThrow('name must be at least 3 characters');
        });

        it('should throw an error if name is greater than 255 characters', () => {
          expect(() =>
            Country.create({
              ...countryMock,
              name: 'a'.repeat(256),
            }),
          ).toThrow('name must be at most 255 characters');
        });
      });

      describe('Abbreviation', () => {
        it('should throw an error if abbreviation is null, undefined or empty', () => {
          expect(() => Country.create({ ...countryMock, abbreviation: null })).toThrow('abbreviation is required');
          expect(() => Country.create({ ...countryMock, abbreviation: undefined })).toThrow('abbreviation is required');
          expect(() => Country.create({ ...countryMock, abbreviation: '' as any })).toThrow(
            'abbreviation must be a non-empty',
          );
        });

        it('should throw an error if abbreviation is not string', () => {
          expect(() => Country.create({ ...countryMock, abbreviation: true as any })).toThrow(
            'abbreviation must be a string',
          );
          expect(() => Country.create({ ...countryMock, abbreviation: 1 as any })).toThrow(
            'abbreviation must be a string',
          );
          expect(() => Country.create({ ...countryMock, abbreviation: {} as any })).toThrow(
            'abbreviation must be a string',
          );
          expect(() => Country.create({ ...countryMock, abbreviation: [] as any })).toThrow(
            'abbreviation must be a string',
          );
        });

        it('should throw an error if abbreviation is less than 2 characters', () => {
          expect(() => Country.create({ ...countryMock, abbreviation: 'b' })).toThrow(
            'abbreviation must be at least 2 characters',
          );
        });

        it('should throw an error if abbreviation is greater than 2 characters', () => {
          expect(() =>
            Country.create({
              ...countryMock,
              abbreviation: 'abc',
            }),
          ).toThrow('abbreviation must be at most 2 characters');
        });
      });

      describe('Code', () => {
        it('should throw an error if code is null, undefined or empty', () => {
          expect(() => Country.create({ ...countryMock, code: null })).toThrow('code is required');
          expect(() => Country.create({ ...countryMock, code: undefined })).toThrow('code is required');
          expect(() => Country.create({ ...countryMock, code: '' as any })).toThrow('code must be a non-empty');
        });

        it('should throw an error if code is not string', () => {
          expect(() => Country.create({ ...countryMock, code: true as any })).toThrow('code must be a string');
          expect(() => Country.create({ ...countryMock, code: 1 as any })).toThrow('code must be a string');
          expect(() => Country.create({ ...countryMock, code: {} as any })).toThrow('code must be a string');
          expect(() => Country.create({ ...countryMock, code: [] as any })).toThrow('code must be a string');
        });

        it('should throw an error if code is less than 3 characters', () => {
          expect(() => Country.create({ ...countryMock, code: 'br' })).toThrow('code must be at least 3 characters');
        });

        it('should throw an error if code is greater than 3 characters', () => {
          expect(() =>
            Country.create({
              ...countryMock,
              code: 'abcd',
            }),
          ).toThrow('code must be at most 3 characters');
        });
      });
    });
  });

  describe('Mount', () => {
    describe('Success', () => {
      it('should return a new instance of Country', () => {
        const country = Country.mount(countryMock);

        expect(country).toBeDefined();
        expect(country).toBeInstanceOf(Country);
        expect(country.name).toBe(countryMock.name);
        expect(country.abbreviation).toBe(countryMock.abbreviation);
        expect(country.code).toBe(countryMock.code);
      });
    });

    describe('Failure', () => {
      describe('Name', () => {
        it('should throw an error if name is null, undefined or empty', () => {
          expect(() => Country.mount(null)).toThrow('name is required');
          expect(() => Country.mount(undefined)).toThrow('name is required');
          expect(() => Country.mount('' as any)).toThrow('name is required');
        });

        it('should throw an error if name is not string', () => {
          expect(() => Country.mount(true as any)).toThrow('name is required');
          expect(() => Country.mount(1 as any)).toThrow('name is required');
          expect(() => Country.mount({} as any)).toThrow('name is required');
          expect(() => Country.mount([] as any)).toThrow('name is required');
        });

        it('should throw an error if name is less than 3 characters', () => {
          expect(() => Country.mount({ ...countryMock, name: 'br' })).toThrow('name must be at least 3 characters');
        });

        it('should throw an error if name is greater than 255 characters', () => {
          expect(() =>
            Country.mount({
              ...countryMock,
              name: 'a'.repeat(256),
            }),
          ).toThrow('name must be at most 255 characters');
        });
      });

      describe('Abbreviation', () => {
        it('should throw an error if abbreviation is null, undefined or empty', () => {
          expect(() => Country.mount({ ...countryMock, abbreviation: null })).toThrow('abbreviation is required');
          expect(() => Country.mount({ ...countryMock, abbreviation: undefined })).toThrow('abbreviation is required');
          expect(() => Country.mount({ ...countryMock, abbreviation: '' as any })).toThrow(
            'abbreviation must be a non-empty',
          );
        });

        it('should throw an error if abbreviation is not string', () => {
          expect(() => Country.mount({ ...countryMock, abbreviation: true as any })).toThrow(
            'abbreviation must be a string',
          );
          expect(() => Country.mount({ ...countryMock, abbreviation: 1 as any })).toThrow(
            'abbreviation must be a string',
          );
          expect(() => Country.mount({ ...countryMock, abbreviation: {} as any })).toThrow(
            'abbreviation must be a string',
          );
          expect(() => Country.mount({ ...countryMock, abbreviation: [] as any })).toThrow(
            'abbreviation must be a string',
          );
        });

        it('should throw an error if abbreviation is less than 2 characters', () => {
          expect(() => Country.mount({ ...countryMock, abbreviation: 'b' })).toThrow(
            'abbreviation must be at least 2 characters',
          );
        });

        it('should throw an error if abbreviation is greater than 2 characters', () => {
          expect(() =>
            Country.mount({
              ...countryMock,
              abbreviation: 'abc',
            }),
          ).toThrow('abbreviation must be at most 2 characters');
        });
      });

      describe('Code', () => {
        it('should throw an error if code is null, undefined or empty', () => {
          expect(() => Country.mount({ ...countryMock, code: null })).toThrow('code is required');
          expect(() => Country.mount({ ...countryMock, code: undefined })).toThrow('code is required');
          expect(() => Country.mount({ ...countryMock, code: '' as any })).toThrow('code must be a non-empty');
        });

        it('should throw an error if code is not string', () => {
          expect(() => Country.mount({ ...countryMock, code: true as any })).toThrow('code must be a string');
          expect(() => Country.mount({ ...countryMock, code: 1 as any })).toThrow('code must be a string');
          expect(() => Country.mount({ ...countryMock, code: {} as any })).toThrow('code must be a string');
          expect(() => Country.mount({ ...countryMock, code: [] as any })).toThrow('code must be a string');
        });

        it('should throw an error if code is less than 3 characters', () => {
          expect(() => Country.mount({ ...countryMock, code: 'br' })).toThrow('code must be at least 3 characters');
        });

        it('should throw an error if code is greater than 3 characters', () => {
          expect(() =>
            Country.mount({
              ...countryMock,
              code: 'abcd',
            }),
          ).toThrow('code must be at most 3 characters');
        });
      });
    });
  });
});
