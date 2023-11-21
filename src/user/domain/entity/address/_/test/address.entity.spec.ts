import Country from '../../country/country.entity';
import State from '../../state/state.entity';
import Address from '../address.entity';

const addressMock = {
  id: 1,
  country: Country.create({
    name: 'Brasil',
    abbreviation: 'BR',
    code: 'BRA',
  }),
  state: State.create({
    name: 'São Paulo',
    abbreviation: 'SP',
  }),
  city: 'São Paulo',
  neighborhood: 'Vila Mariana',
  thoroughfare: 'Rua Vergueiro',
  zipcode: '04101000',
  number: 1000,
  complement: 'Apto 1000',
  createdAt: new Date(),
  updatedAt: new Date(),
};

describe('Address Entity', () => {
  describe('Read', () => {
    let address: Address;

    beforeAll(() => {
      address = Address.mount(addressMock);

      expect(address).toBeDefined();
      expect(address).toBeInstanceOf(Address);
      expect(address.country).toBe(addressMock.country);
      expect(address.state).toBe(addressMock.state);
      expect(address.city).toBe(addressMock.city);
      expect(address.neighborhood).toBe(addressMock.neighborhood);
      expect(address.thoroughfare).toBe(addressMock.thoroughfare);
      expect(address.zipcode).toBe(addressMock.zipcode);
      expect(address.number).toBe(addressMock.number);
      expect(address.complement).toBe(addressMock.complement);
    });

    afterAll(() => {
      address = null;
    });

    describe('Success', () => {
      it('should return a new instance of Address', () => {
        expect(address).toBeDefined();
        expect(address).toBeInstanceOf(Address);
      });

      it('should return a the correct id', () => {
        expect(address.id).toBe(addressMock.id);
      });

      it('should return a the correct country', () => {
        expect(address.country).toBe(addressMock.country);
      });

      it('should return a the correct state', () => {
        expect(address.state).toBe(addressMock.state);
      });

      it('should return a the correct city', () => {
        expect(address.city).toBe(addressMock.city);
      });

      it('should return a the correct neighborhood', () => {
        expect(address.neighborhood).toBe(addressMock.neighborhood);
      });

      it('should return a the correct thoroughfare', () => {
        expect(address.thoroughfare).toBe(addressMock.thoroughfare);
      });

      it('should return a the correct zipcode', () => {
        expect(address.zipcode).toBe(addressMock.zipcode);
      });

      it('should return a the correct number', () => {
        expect(address.number).toBe(addressMock.number);
      });

      it('should return a the correct complement', () => {
        expect(address.complement).toBe(addressMock.complement);
      });

      it('should return a the correct created at', () => {
        expect(address.createdAt).toBe(addressMock.createdAt);
      });

      it('should return a the correct updated at', () => {
        expect(address.updatedAt).toBe(addressMock.updatedAt);
      });
    });
  });

  describe('Create', () => {
    describe('Success', () => {
      it('should return a new instance of Address', () => {
        const address = Address.create(addressMock);

        expect(address).toBeDefined();
        expect(address).toBeInstanceOf(Address);
        expect(address.id).toBeUndefined();
        expect(address.country).toBe(addressMock.country);
        expect(address.state).toBe(addressMock.state);
        expect(address.city).toBe(addressMock.city);
        expect(address.neighborhood).toBe(addressMock.neighborhood);
        expect(address.thoroughfare).toBe(addressMock.thoroughfare);
        expect(address.zipcode).toBe(addressMock.zipcode);
        expect(address.number).toBe(addressMock.number);
        expect(address.complement).toBe(addressMock.complement);
        expect(address.createdAt).toBeDefined();
        expect(address.updatedAt).toBeDefined();
      });
    });

    describe('Failure', () => {
      describe('Country', () => {
        it('should throw an error when country is null, undefined or empty', () => {
          expect(() => Address.create({ ...addressMock, country: null })).toThrow('country is not a Country instance');
          expect(() => Address.create({ ...addressMock, country: undefined })).toThrow(
            'country is not a Country instance',
          );
          expect(() => Address.create({ ...addressMock, country: {} as Country })).toThrow(
            'country is not a Country instance',
          );
        });

        it('should throw an error when country is not an instance of Country', () => {
          expect(() => Address.create({ ...addressMock, country: {} as Country })).toThrow(
            'country is not a Country instance',
          );
        });

        it('should throw an error when country is not valid', () => {
          expect(() => Address.create({ ...addressMock, country: Country.create({} as any) })).toThrow(
            'name is required',
          );
        });
      });

      describe('State', () => {
        it('should throw an error when state is null, undefined or empty', () => {
          expect(() => Address.create({ ...addressMock, state: null })).toThrow('state is not a State instance');
          expect(() => Address.create({ ...addressMock, state: undefined })).toThrow('state is not a State instance');
          expect(() => Address.create({ ...addressMock, state: {} as State })).toThrow('state is not a State instance');
        });

        it('should throw an error when state is not an instance of State', () => {
          expect(() => Address.create({ ...addressMock, state: {} as State })).toThrow('state is not a State instance');
        });

        it('should throw an error when state is not valid', () => {
          expect(() => Address.create({ ...addressMock, state: State.create({} as any) })).toThrow('name is required');
        });
      });

      describe('City', () => {
        it('should throw an error when city is null, undefined or empty', () => {
          expect(() => Address.create({ ...addressMock, city: null })).toThrow('city is required');
          expect(() => Address.create({ ...addressMock, city: undefined })).toThrow('city is required');
          expect(() => Address.create({ ...addressMock, city: '' })).toThrow('city must be a non-empty');
        });

        it('should throw an error when city is not a string', () => {
          expect(() => Address.create({ ...addressMock, city: {} as string })).toThrow('city must be a string');
        });

        it('should throw an error when city is not greater than 255 characters', () => {
          expect(() => Address.create({ ...addressMock, city: 'a'.repeat(256) })).toThrow(
            'city must be at most 255 characters',
          );
        });
      });

      describe('Neighborhood', () => {
        it('should throw an error when neighborhood is null, undefined or empty', () => {
          expect(() => Address.create({ ...addressMock, neighborhood: null })).toThrow('neighborhood is required');
          expect(() => Address.create({ ...addressMock, neighborhood: undefined })).toThrow('neighborhood is required');
          expect(() => Address.create({ ...addressMock, neighborhood: '' })).toThrow(
            'neighborhood must be a non-empty',
          );
        });

        it('should throw an error when neighborhood is not a string', () => {
          expect(() => Address.create({ ...addressMock, neighborhood: {} as string })).toThrow(
            'neighborhood must be a string',
          );
        });

        it('should throw an error when neighborhood is not greater than 255 characters', () => {
          expect(() => Address.create({ ...addressMock, neighborhood: 'a'.repeat(256) })).toThrow(
            'neighborhood must be at most 255 characters',
          );
        });
      });

      describe('Thoroughfare', () => {
        it('should throw an error when thoroughfare is null, undefined or empty', () => {
          expect(() => Address.create({ ...addressMock, thoroughfare: null })).toThrow('thoroughfare is required');
          expect(() => Address.create({ ...addressMock, thoroughfare: undefined })).toThrow('thoroughfare is required');
          expect(() => Address.create({ ...addressMock, thoroughfare: '' })).toThrowError(
            'thoroughfare must be a non-empty',
          );
        });

        it('should throw an error when thoroughfare is not a string', () => {
          expect(() => Address.create({ ...addressMock, thoroughfare: true as unknown as string })).toThrow(
            'thoroughfare must be a string',
          );
        });

        it('should throw an error when thoroughfare is not greater than 255 characters', () => {
          expect(() => Address.create({ ...addressMock, thoroughfare: 'a'.repeat(256) })).toThrow(
            'thoroughfare must be at most 255 characters',
          );
        });
      });

      describe('Zipcode', () => {
        it('should throw an error when zipcode is null, undefined or empty', () => {
          expect(() => Address.create({ ...addressMock, zipcode: null })).toThrow('zipcode is required');
          expect(() => Address.create({ ...addressMock, zipcode: undefined })).toThrow('zipcode is required');
          expect(() => Address.create({ ...addressMock, zipcode: '' })).toThrow('zipcode must be a non-empty');
        });

        it('should throw an error when zipcode is not a string number', () => {
          expect(() => Address.create({ ...addressMock, zipcode: 'a' })).toThrow('zipcode must be a valid number');
        });
      });

      describe('Number', () => {
        it('should throw an error when number is null, undefined or empty', () => {
          expect(() => Address.create({ ...addressMock, number: null })).toThrow('number is required');
          expect(() => Address.create({ ...addressMock, number: undefined })).toThrow('number is required');
          expect(() => Address.create({ ...addressMock, number: NaN })).toThrow('number must be an integer');
        });

        it('should throw an error when number is not a number', () => {
          expect(() => Address.create({ ...addressMock, number: 'a' as unknown as number })).toThrow(
            'number must be a number',
          );
        });

        it('should throw an error when number is not valid', () => {
          expect(() => Address.create({ ...addressMock, number: 0.5 })).toThrow('number must be an integer');
        });
      });

      describe('Complement', () => {
        it('should throw an error when complement is not a string', () => {
          expect(() => Address.create({ ...addressMock, complement: true as unknown as string })).toThrow(
            'complement must be a string',
          );
        });

        it('should throw an error when complement is not greater than 255 characters', () => {
          expect(() => Address.create({ ...addressMock, complement: 'a'.repeat(256) })).toThrow(
            'complement must be at most 255 characters',
          );
        });
      });
    });
  });

  describe('Mount', () => {
    describe('Success', () => {
      it('should return a new instance of Address', () => {
        const address = Address.mount(addressMock);

        expect(address).toBeDefined();
        expect(address).toBeInstanceOf(Address);
        expect(address.id).toBe(addressMock.id);
        expect(address.country).toBe(addressMock.country);
        expect(address.state).toBe(addressMock.state);
        expect(address.city).toBe(addressMock.city);
        expect(address.neighborhood).toBe(addressMock.neighborhood);
        expect(address.thoroughfare).toBe(addressMock.thoroughfare);
        expect(address.zipcode).toBe(addressMock.zipcode);
        expect(address.number).toBe(addressMock.number);
        expect(address.complement).toBe(addressMock.complement);
        expect(address.createdAt).toBe(addressMock.createdAt);
        expect(address.updatedAt).toBe(addressMock.updatedAt);
      });
    });

    describe('Failure', () => {
      describe('Id', () => {
        it('should throw an error when id is not a number', () => {
          expect(() => Address.mount({ ...addressMock, id: 'a' as unknown as number })).toThrow('id must be a number');
        });

        it('should throw an error when id is not integer', () => {
          expect(() => Address.mount({ ...addressMock, id: 0.5 })).toThrow('id must be an integer');
        });
      });

      describe('Country', () => {
        it('should throw an error when country is not valid', () => {
          expect(() => Address.mount({ ...addressMock, country: Country.create({} as any) })).toThrow(
            'name is required',
          );
        });
      });

      describe('State', () => {
        it('should throw an error when state is not valid', () => {
          expect(() => Address.mount({ ...addressMock, state: State.create({} as any) })).toThrow('name is required');
        });
      });

      describe('City', () => {
        it('should throw an error when city is null, undefined or empty', () => {
          expect(() => Address.mount({ ...addressMock, city: null })).toThrow('city is required');
          expect(() => Address.mount({ ...addressMock, city: undefined })).toThrow('city is required');
          expect(() => Address.mount({ ...addressMock, city: '' })).toThrow('city must be a non-empty');
        });

        it('should throw an error when city is not a string', () => {
          expect(() => Address.mount({ ...addressMock, city: {} as string })).toThrow('city must be a string');
        });

        it('should throw an error when city is not greater than 255 characters', () => {
          expect(() => Address.mount({ ...addressMock, city: 'a'.repeat(256) })).toThrow(
            'city must be at most 255 characters',
          );
        });
      });

      describe('Neighborhood', () => {
        it('should throw an error when neighborhood is null, undefined or empty', () => {
          expect(() => Address.mount({ ...addressMock, neighborhood: null })).toThrow('neighborhood is required');
          expect(() => Address.mount({ ...addressMock, neighborhood: undefined })).toThrow('neighborhood is required');
          expect(() => Address.mount({ ...addressMock, neighborhood: '' })).toThrow('neighborhood must be a non-empty');
        });

        it('should throw an error when neighborhood is not a string', () => {
          expect(() => Address.mount({ ...addressMock, neighborhood: {} as string })).toThrow(
            'neighborhood must be a string',
          );
        });

        it('should throw an error when neighborhood is not greater than 255 characters', () => {
          expect(() => Address.mount({ ...addressMock, neighborhood: 'a'.repeat(256) })).toThrow(
            'neighborhood must be at most 255 characters',
          );
        });
      });

      describe('Thoroughfare', () => {
        it('should throw an error when thoroughfare is null, undefined or empty', () => {
          expect(() => Address.mount({ ...addressMock, thoroughfare: null })).toThrow('thoroughfare is required');
          expect(() => Address.mount({ ...addressMock, thoroughfare: undefined })).toThrow('thoroughfare is required');
          expect(() => Address.mount({ ...addressMock, thoroughfare: '' })).toThrowError(
            'thoroughfare must be a non-empty',
          );
        });

        it('should throw an error when thoroughfare is not a string', () => {
          expect(() => Address.mount({ ...addressMock, thoroughfare: true as unknown as string })).toThrow(
            'thoroughfare must be a string',
          );
        });

        it('should throw an error when thoroughfare is not greater than 255 characters', () => {
          expect(() => Address.mount({ ...addressMock, thoroughfare: 'a'.repeat(256) })).toThrow(
            'thoroughfare must be at most 255 characters',
          );
        });
      });

      describe('Zipcode', () => {
        it('should throw an error when zipcode is null, undefined or empty', () => {
          expect(() => Address.mount({ ...addressMock, zipcode: null })).toThrow('zipcode is required');
          expect(() => Address.mount({ ...addressMock, zipcode: undefined })).toThrow('zipcode is required');
          expect(() => Address.mount({ ...addressMock, zipcode: '' })).toThrow('zipcode must be a non-empty');
        });

        it('should throw an error when zipcode is not a string number', () => {
          expect(() => Address.mount({ ...addressMock, zipcode: 'a' })).toThrow('zipcode must be a valid number');
        });
      });

      describe('Number', () => {
        it('should throw an error when number is null, undefined or empty', () => {
          expect(() => Address.mount({ ...addressMock, number: null })).toThrow('number is required');
          expect(() => Address.mount({ ...addressMock, number: undefined })).toThrow('number is required');
          expect(() => Address.mount({ ...addressMock, number: NaN })).toThrow('number must be an integer');
        });

        it('should throw an error when number is not a number', () => {
          expect(() => Address.mount({ ...addressMock, number: 'a' as unknown as number })).toThrow(
            'number must be a number',
          );
        });

        it('should throw an error when number is not valid', () => {
          expect(() => Address.mount({ ...addressMock, number: 0.5 })).toThrow('number must be an integer');
        });
      });

      describe('Complement', () => {
        it('should throw an error when complement is not a string', () => {
          expect(() => Address.mount({ ...addressMock, complement: true as unknown as string })).toThrow(
            'complement must be a string',
          );
        });

        it('should throw an error when complement is not greater than 255 characters', () => {
          expect(() => Address.mount({ ...addressMock, complement: 'a'.repeat(256) })).toThrow(
            'complement must be at most 255 characters',
          );
        });
      });
    });
  });

  describe('Update', () => {
    describe('Success', () => {
      it('should update the country', () => {
        const address = Address.mount(addressMock);
        expect(address.country).toBe(addressMock.country);

        const newCountry = Country.create({
          name: 'Argentina',
          abbreviation: 'AR',
          code: 'ARG',
        });
        address.country = newCountry;

        expect(address.country.code).toBe(newCountry.code);
        expect(address.country.name).toBe(newCountry.name);
        expect(address.country.abbreviation).toBe(newCountry.abbreviation);
      });

      it('should update the state', () => {
        const address = Address.mount(addressMock);
        expect(address.state).toBe(addressMock.state);

        const newState = State.create({
          name: 'Rio de Janeiro',
          abbreviation: 'RJ',
        });
        address.state = newState;

        expect(address.state.name).toBe(newState.name);
        expect(address.state.abbreviation).toBe(newState.abbreviation);
      });

      it('should update the city', () => {
        const address = Address.mount(addressMock);
        expect(address.city).toBe(addressMock.city);

        const newCity = 'Rio de Janeiro';
        address.city = newCity;

        expect(address.city).toBe(newCity);
      });

      it('should update the neighborhood', () => {
        const address = Address.mount(addressMock);
        expect(address.neighborhood).toBe(addressMock.neighborhood);

        const newNeighborhood = 'Copacabana';
        address.neighborhood = newNeighborhood;

        expect(address.neighborhood).toBe(newNeighborhood);
      });

      it('should update the thoroughfare', () => {
        const address = Address.mount(addressMock);
        expect(address.thoroughfare).toBe(addressMock.thoroughfare);

        const newThoroughfare = 'Avenida Atlântica';
        address.thoroughfare = newThoroughfare;

        expect(address.thoroughfare).toBe(newThoroughfare);
      });

      it('should update the zipcode', () => {
        const address = Address.mount(addressMock);
        expect(address.zipcode).toBe(addressMock.zipcode);

        const newZipcode = '22070010';
        address.zipcode = newZipcode;

        expect(address.zipcode).toBe(newZipcode);
      });

      it('should update the number', () => {
        const address = Address.mount(addressMock);
        expect(address.number).toBe(addressMock.number);

        const newNumber = 100;
        address.number = newNumber;

        expect(address.number).toBe(newNumber);
      });

      it('should update the complement', () => {
        const address = Address.mount(addressMock);
        expect(address.complement).toBe(addressMock.complement);

        const newComplement = 'Apto 100';
        address.complement = newComplement;

        expect(address.complement).toBe(newComplement);
      });
    });

    describe('Failure', () => {
      describe('Country', () => {
        it('should throw an error when country is null, undefined or empty', () => {
          const address = Address.mount(addressMock);

          expect(() => (address.country = null)).toThrow('country is not a Country instance');
          expect(() => (address.country = undefined)).toThrow('country is not a Country instance');
          expect(() => (address.country = {} as Country)).toThrow('country is not a Country instance');
        });

        it('should throw an error when country is not an instance of Country', () => {
          const address = Address.mount(addressMock);

          expect(() => (address.country = {} as Country)).toThrow('country is not a Country instance');
        });

        it('should throw an error when country is not valid', () => {
          const address = Address.mount(addressMock);

          expect(() => (address.country = Country.create({} as any))).toThrow('name is required');
        });
      });

      describe('State', () => {
        it('should throw an error when state is null, undefined or empty', () => {
          const address = Address.mount(addressMock);

          expect(() => (address.state = null)).toThrow('state is not a State instance');
          expect(() => (address.state = undefined)).toThrow('state is not a State instance');
          expect(() => (address.state = {} as State)).toThrow('state is not a State instance');
        });

        it('should throw an error when state is not an instance of State', () => {
          const address = Address.mount(addressMock);

          expect(() => (address.state = {} as State)).toThrow('state is not a State instance');
        });

        it('should throw an error when state is not valid', () => {
          const address = Address.mount(addressMock);

          expect(() => (address.state = State.create({} as any))).toThrow('name is required');
        });
      });

      describe('City', () => {
        it('should throw an error when city is null, undefined or empty', () => {
          const address = Address.mount(addressMock);

          expect(() => (address.city = null)).toThrow('city is required');
          expect(() => (address.city = undefined)).toThrow('city is required');
          expect(() => (address.city = '')).toThrow('city must be a non-empty');
        });

        it('should throw an error when city is not a string', () => {
          const address = Address.mount(addressMock);

          expect(() => (address.city = {} as string)).toThrow('city must be a string');
        });

        it('should throw an error when city is not greater than 255 characters', () => {
          const address = Address.mount(addressMock);

          expect(() => (address.city = 'a'.repeat(256))).toThrow('city must be at most 255 characters');
        });
      });

      describe('Neighborhood', () => {
        it('should throw an error when neighborhood is null, undefined or empty', () => {
          const address = Address.mount(addressMock);

          expect(() => (address.neighborhood = null)).toThrow('neighborhood is required');
          expect(() => (address.neighborhood = undefined)).toThrow('neighborhood is required');
          expect(() => (address.neighborhood = '')).toThrow('neighborhood must be a non-empty');
        });

        it('should throw an error when neighborhood is not a string', () => {
          const address = Address.mount(addressMock);

          expect(() => (address.neighborhood = {} as string)).toThrow('neighborhood must be a string');
        });

        it('should throw an error when neighborhood is not greater than 255 characters', () => {
          const address = Address.mount(addressMock);

          expect(() => (address.neighborhood = 'a'.repeat(256))).toThrow('neighborhood must be at most 255 characters');
        });
      });

      describe('Thoroughfare', () => {
        it('should throw an error when thoroughfare is null, undefined or empty', () => {
          const address = Address.mount(addressMock);

          expect(() => (address.thoroughfare = null)).toThrow('thoroughfare is required');
          expect(() => (address.thoroughfare = undefined)).toThrow('thoroughfare is required');
          expect(() => (address.thoroughfare = '')).toThrow('thoroughfare must be a non-empty');
        });

        it('should throw an error when thoroughfare is not a string', () => {
          const address = Address.mount(addressMock);

          expect(() => (address.thoroughfare = true as unknown as string)).toThrow('thoroughfare must be a string');
        });

        it('should throw an error when thoroughfare is not greater than 255 characters', () => {
          const address = Address.mount(addressMock);

          expect(() => (address.thoroughfare = 'a'.repeat(256))).toThrow('thoroughfare must be at most 255 characters');
        });
      });

      describe('Zipcode', () => {
        it('should throw an error when zipcode is null, undefined or empty', () => {
          const address = Address.mount(addressMock);

          expect(() => (address.zipcode = null)).toThrow('zipcode is required');
          expect(() => (address.zipcode = undefined)).toThrow('zipcode is required');
          expect(() => (address.zipcode = '')).toThrow('zipcode must be a non-empty');
        });

        it('should throw an error when zipcode is not a string number', () => {
          const address = Address.mount(addressMock);

          expect(() => (address.zipcode = 'a')).toThrow('zipcode must be at least 8 characters');
        });
      });

      describe('Number', () => {
        it('should throw an error when number is null, undefined or empty', () => {
          const address = Address.mount(addressMock);

          expect(() => (address.number = null)).toThrow('number is required');
          expect(() => (address.number = undefined)).toThrow('number is required');
          expect(() => (address.number = NaN)).toThrow('number must be an integer');
        });

        it('should throw an error when number is not a number', () => {
          const address = Address.mount(addressMock);

          expect(() => (address.number = 'a' as unknown as number)).toThrow('number must be a number');
        });

        it('should throw an error when number is not valid', () => {
          const address = Address.mount(addressMock);

          expect(() => (address.number = 0.5)).toThrow('number must be an integer');
        });
      });

      describe('Complement', () => {
        it('should throw an error when complement is not a string', () => {
          const address = Address.mount(addressMock);

          expect(() => (address.complement = true as unknown as string)).toThrow('complement must be a string');
        });

        it('should throw an error when complement is not greater than 255 characters', () => {
          const address = Address.mount(addressMock);

          expect(() => (address.complement = 'a'.repeat(256))).toThrow('complement must be at most 255 characters');
        });
      });
    });
  });
});
