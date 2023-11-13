import State from '../state.entity';

const stateMock = {
  id: 1,
  name: 'São Paulo',
  abbreviation: 'SP',
  createdAt: new Date(),
  updatedAt: new Date(),
};

describe('State Entity', () => {
  describe('Read', () => {
    let state: State;

    beforeAll(() => {
      state = State.mount(stateMock);

      expect(state).toBeDefined();
      expect(state).toBeInstanceOf(State);
      expect(state.name).toBe(stateMock.name);
      expect(state.abbreviation).toBe(stateMock.abbreviation);
    });

    afterAll(() => {
      state = null;
    });

    describe('Success', () => {
      it('should return a new instance of State', () => {
        expect(state).toBeDefined();
        expect(state).toBeInstanceOf(State);
      });

      it('should return the id', () => {
        expect(state.id).toBe(stateMock.id);
      });

      it('should return the name', () => {
        expect(state.name).toBe(stateMock.name);
      });

      it('should return the abbreviation', () => {
        expect(state.abbreviation).toBe(stateMock.abbreviation);
      });

      it('should return the created at', () => {
        expect(state.createdAt).toBe(stateMock.createdAt);
      });

      it('should return the updated at', () => {
        expect(state.updatedAt).toBe(stateMock.updatedAt);
      });
    });
  });

  describe('Create', () => {
    describe('Success', () => {
      it('should return a new instance of State', () => {
        const state = State.create(stateMock);

        expect(state).toBeDefined();
        expect(state).toBeInstanceOf(State);
        expect(state.id).toBeUndefined();
        expect(state.name).toBe(stateMock.name);
        expect(state.abbreviation).toBe(stateMock.abbreviation);
        expect(state.createdAt).toBeDefined();
        expect(state.updatedAt).toBeDefined();
      });
    });

    describe('Fail', () => {
      describe('Name', () => {
        it('should throw an error if the name is null, undefined or empty', () => {
          const stateMockUndefinedName = (name: any) => ({ ...stateMock, name: name });

          expect(() => State.create(stateMockUndefinedName(undefined))).toThrowError('name is required');
          expect(() => State.create(stateMockUndefinedName(null))).toThrowError('name is required');
          expect(() => State.create(stateMockUndefinedName(''))).toThrowError('name must be a non-empty');
        });

        it('should throw an error if the name is not a string', () => {
          const stateMockNotStringName = (name: any) => ({ ...stateMock, name: name });

          expect(() => State.create(stateMockNotStringName(1))).toThrowError('name must be a string');
          expect(() => State.create(stateMockNotStringName(true))).toThrowError('name must be a string');
          expect(() => State.create(stateMockNotStringName({}))).toThrowError('name must be a string');
          expect(() => State.create(stateMockNotStringName([]))).toThrowError('name must be a string');
        });

        it('should throw an error if the name length is less than 3', () => {
          const stateMockShortName = (name: string) => ({ ...stateMock, name: name });
          expect(() => State.create(stateMockShortName('ab'))).toThrowError('name must be at least 3 characters');
        });

        it('should throw an error if the name length is greater than 255', () => {
          const stateMockLongName = (name: string) => ({ ...stateMock, name: name });
          expect(() => State.create(stateMockLongName('a'.repeat(256)))).toThrowError(
            'name must be at most 255 characters',
          );
        });
      });

      describe('Abbreviation', () => {
        it('should throw an error if the abbreviation is null, undefined or empty', () => {
          const stateMockUndefinedAbbreviation = (abbreviation: any) => ({ ...stateMock, abbreviation: abbreviation });

          expect(() => State.create(stateMockUndefinedAbbreviation(undefined))).toThrowError(
            'abbreviation is required',
          );
          expect(() => State.create(stateMockUndefinedAbbreviation(null))).toThrowError('abbreviation is required');
          expect(() => State.create(stateMockUndefinedAbbreviation(''))).toThrowError(
            'abbreviation must be a non-empty',
          );
        });

        it('should throw an error if the abbreviation is not a string', () => {
          const stateMockNotStringAbbreviation = (abbreviation: any) => ({
            ...stateMock,
            abbreviation: abbreviation,
          });

          expect(() => State.create(stateMockNotStringAbbreviation(1))).toThrowError('abbreviation must be a string');
          expect(() => State.create(stateMockNotStringAbbreviation(true))).toThrowError(
            'abbreviation must be a string',
          );
          expect(() => State.create(stateMockNotStringAbbreviation({}))).toThrowError('abbreviation must be a string');
          expect(() => State.create(stateMockNotStringAbbreviation([]))).toThrowError('abbreviation must be a string');
        });

        it('should throw an error if the abbreviation length is less than 2', () => {
          const stateMockShortAbbreviation = (abbreviation: string) => ({
            ...stateMock,
            abbreviation: abbreviation,
          });
          expect(() => State.create(stateMockShortAbbreviation('a'))).toThrowError(
            'abbreviation must be at least 2 characters',
          );
        });

        it('should throw an error if the abbreviation length is greater than 2', () => {
          const stateMockLongAbbreviation = (abbreviation: string) => ({
            ...stateMock,
            abbreviation: abbreviation,
          });
          expect(() => State.create(stateMockLongAbbreviation('a'.repeat(3)))).toThrowError(
            'abbreviation must be at most 2 characters',
          );
        });
      });
    });
  });

  describe('Mount', () => {
    describe('Success', () => {
      it('should return a new instance of State', () => {
        const state = State.mount(stateMock);

        expect(state).toBeDefined();
        expect(state).toBeInstanceOf(State);
        expect(state.id).toBe(stateMock.id);
        expect(state.name).toBe(stateMock.name);
        expect(state.abbreviation).toBe(stateMock.abbreviation);
        expect(state.createdAt).toBe(stateMock.createdAt);
        expect(state.updatedAt).toBe(stateMock.updatedAt);
      });
    });

    describe('Fail', () => {
      describe('Name', () => {
        it('should throw an error if the name is null, undefined or empty', () => {
          const stateMockUndefinedName = (name: any) => ({ ...stateMock, name: name });

          expect(() => State.mount(stateMockUndefinedName(undefined))).toThrowError('name is required');
          expect(() => State.mount(stateMockUndefinedName(null))).toThrowError('name is required');
          expect(() => State.mount(stateMockUndefinedName(''))).toThrowError('name must be a non-empty');
        });

        it('should throw an error if the name is not a string', () => {
          const stateMockNotStringName = (name: any) => ({ ...stateMock, name: name });

          expect(() => State.mount(stateMockNotStringName(1))).toThrowError('name must be a string');
          expect(() => State.mount(stateMockNotStringName(true))).toThrowError('name must be a string');
          expect(() => State.mount(stateMockNotStringName({}))).toThrowError('name must be a string');
          expect(() => State.mount(stateMockNotStringName([]))).toThrowError('name must be a string');
        });

        it('should throw an error if the name length is less than 3', () => {
          const stateMockShortName = (name: string) => ({ ...stateMock, name: name });

          expect(() => State.mount(stateMockShortName('ab'))).toThrowError('name must be at least 3 characters');
        });

        it('should throw an error if the name length is greater than 255', () => {
          const stateMockLongName = (name: string) => ({ ...stateMock, name: name });

          expect(() => State.mount(stateMockLongName('a'.repeat(256)))).toThrowError(
            'name must be at most 255 characters',
          );
        });
      });

      describe('Abbreviation', () => {
        it('should throw an error if the abbreviation is null, undefined or empty', () => {
          const stateMockUndefinedAbbreviation = (abbreviation: any) => ({
            ...stateMock,
            abbreviation: abbreviation,
          });

          expect(() => State.mount(stateMockUndefinedAbbreviation(undefined))).toThrowError('abbreviation is required');
          expect(() => State.mount(stateMockUndefinedAbbreviation(null))).toThrowError('abbreviation is required');
          expect(() => State.mount(stateMockUndefinedAbbreviation(''))).toThrowError(
            'abbreviation must be a non-empty',
          );
        });

        it('should throw an error if the abbreviation is not a string', () => {
          const stateMockNotStringAbbreviation = (abbreviation: any) => ({
            ...stateMock,
            abbreviation: abbreviation,
          });

          expect(() => State.mount(stateMockNotStringAbbreviation(1))).toThrowError('abbreviation must be a string');
          expect(() => State.mount(stateMockNotStringAbbreviation(true))).toThrowError('abbreviation must be a string');
          expect(() => State.mount(stateMockNotStringAbbreviation({}))).toThrowError('abbreviation must be a string');
          expect(() => State.mount(stateMockNotStringAbbreviation([]))).toThrowError('abbreviation must be a string');
        });

        it('should throw an error if the abbreviation length is less than 2', () => {
          const stateMockShortAbbreviation = (abbreviation: string) => ({
            ...stateMock,
            abbreviation: abbreviation,
          });

          expect(() => State.mount(stateMockShortAbbreviation('a'))).toThrowError(
            'abbreviation must be at least 2 characters',
          );
        });

        it('should throw an error if the abbreviation length is greater than 2', () => {
          const stateMockLongAbbreviation = (abbreviation: string) => ({
            ...stateMock,
            abbreviation: abbreviation,
          });

          expect(() => State.mount(stateMockLongAbbreviation('a'.repeat(3)))).toThrowError(
            'abbreviation must be at most 2 characters',
          );
        });
      });
    });
  });
});
