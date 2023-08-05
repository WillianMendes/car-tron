import Email from '../email.entity';

const emailMock = {
  id: 1,
  address: 'cartron@email.com',
  isVerified: true,
  isSpamReported: false,
  isUnsubscribed: false,
  isHardBounced: false,
  isSoftBounced: false,
  createdAt: new Date('2021-01-01'),
  updatedAt: new Date('2021-12-31'),
};

describe('Email Entity', () => {
  describe('Read', () => {
    let email: Email;

    beforeEach(() => {
      email = Email.mount(emailMock);

      expect(email).toBeDefined();
      expect(email).toBeInstanceOf(Email);
      expect(email.id).toBe(emailMock.id);
      expect(email.address).toBe(emailMock.address);
      expect(email.isVerified).toBe(emailMock.isVerified);
      expect(email.isSpamReported).toBe(emailMock.isSpamReported);
      expect(email.isUnsubscribed).toBe(emailMock.isUnsubscribed);
      expect(email.isHardBounced).toBe(emailMock.isHardBounced);
      expect(email.isSoftBounced).toBe(emailMock.isSoftBounced);
      expect(email.createdAt).toBe(emailMock.createdAt);
      expect(email.updatedAt).toBe(emailMock.updatedAt);
    });

    afterEach(() => {
      email = null;
    });

    describe('Success', () => {
      it('should return a new instance of Email', () => {
        expect(email).toBeDefined();
        expect(email).toBeInstanceOf(Email);
      });

      it('should return the correct id', () => {
        expect(email.id).toBe(emailMock.id);
      });

      it('should return the correct address', () => {
        expect(email.address).toBe(emailMock.address);
      });

      it('should return the correct is verified', () => {
        expect(email.isVerified).toBe(emailMock.isVerified);
      });

      it('should return the correct is spam reported', () => {
        expect(email.isSpamReported).toBe(emailMock.isSpamReported);
      });

      it('should return the correct is unsubscribed', () => {
        expect(email.isUnsubscribed).toBe(emailMock.isUnsubscribed);
      });

      it('should return the correct is hard bounced', () => {
        expect(email.isHardBounced).toBe(emailMock.isHardBounced);
      });

      it('should return the correct is soft bounced', () => {
        expect(email.isSoftBounced).toBe(emailMock.isSoftBounced);
      });

      it('should return the correct created at', () => {
        expect(email.createdAt).toBe(emailMock.createdAt);
      });

      it('should return the correct updated at', () => {
        expect(email.updatedAt).toBe(emailMock.updatedAt);
      });
    });
  });

  describe('Create', () => {
    describe('Success', () => {
      it('should return a new instance of Email', () => {
        const email = Email.create(emailMock);

        expect(email).toBeDefined();
        expect(email).toBeInstanceOf(Email);
        expect(email.id).toBe(undefined);
        expect(email.address).toBe(emailMock.address);
        expect(email.isVerified).toBe(false);
        expect(email.isSpamReported).toBe(false);
        expect(email.isUnsubscribed).toBe(false);
        expect(email.isHardBounced).toBe(false);
        expect(email.isSoftBounced).toBe(false);
        expect(email.createdAt).toBeDefined();
        expect(email.updatedAt).toBeDefined();
      });
    });

    describe('Failure', () => {
      describe('Address', () => {
        it('should throw an error if address is not null, undefined or empty', () => {
          const input = (address: any) => ({
            address,
          });

          const nullInput = () => Email.create(input(null));
          const undefinedInput = () => Email.create(input(undefined));
          const emptyInput = () => Email.create(input(''));

          expect(nullInput).toThrow('address is required');
          expect(undefinedInput).toThrow('address is required');
          expect(emptyInput).toThrow('address must be a non-empty');
        });

        it('should throw an error if address is not a string', () => {
          const input = (address: any) => ({
            address,
          });

          const numberInput = () => Email.create(input(1));
          const booleanInput = () => Email.create(input(true));
          const objectInput = () => Email.create(input({}));
          const arrayInput = () => Email.create(input([]));

          expect(numberInput).toThrow('address must be a string');
          expect(booleanInput).toThrow('address must be a string');
          expect(objectInput).toThrow('address must be a string');
          expect(arrayInput).toThrow('address must be a string');
        });

        it('should throw an error if address is not valid email', () => {
          const input = (address: any) => ({
            address,
          });

          const invalidInput = () => Email.create(input('invalid'));
          const invalidInput2 = () => Email.create(input('invalid@'));
          const invalidInput3 = () => Email.create(input('invalid@invalid'));
          const invalidInput4 = () => Email.create(input('invalid@invalid.'));
          const invalidInput5 = () => Email.create(input('invalid@.invalid'));
          const invalidInput6 = () => Email.create(input('invalid@.invalid.'));

          expect(invalidInput).toThrow('address must be a valid email');
          expect(invalidInput2).toThrow('address must be a valid email');
          expect(invalidInput3).toThrow('address must be a valid email');
          expect(invalidInput4).toThrow('address must be a valid email');
          expect(invalidInput5).toThrow('address must be a valid email');
          expect(invalidInput6).toThrow('address must be a valid email');
        });
      });
    });
  });

  describe('Mount', () => {
    describe('Success', () => {
      it('should return a new instance of email mounting the data', () => {
        const email = Email.mount(emailMock);

        expect(email).toBeDefined();
        expect(email).toBeInstanceOf(Email);
        expect(email.id).toBe(emailMock.id);
        expect(email.address).toBe(emailMock.address);
        expect(email.isVerified).toBe(emailMock.isVerified);
        expect(email.isSpamReported).toBe(emailMock.isSpamReported);
        expect(email.isUnsubscribed).toBe(emailMock.isUnsubscribed);
        expect(email.isHardBounced).toBe(emailMock.isHardBounced);
        expect(email.isSoftBounced).toBe(emailMock.isSoftBounced);
        expect(email.createdAt).toBe(emailMock.createdAt);
        expect(email.updatedAt).toBe(emailMock.updatedAt);
      });
    });

    describe('Failure', () => {
      describe('ID', () => {
        it('should throw an error if id is not a number', () => {
          const input = (id: any) => ({
            ...emailMock,
            id,
          });

          const stringInput = () => Email.mount(input('1'));
          const booleanInput = () => Email.mount(input(true));
          const objectInput = () => Email.mount(input({}));
          const arrayInput = () => Email.mount(input([]));

          expect(stringInput).toThrow('id must be a number');
          expect(booleanInput).toThrow('id must be a number');
          expect(objectInput).toThrow('id must be a number');
          expect(arrayInput).toThrow('id must be a number');
        });

        it('should throw an error if id is not a positive number', () => {
          const input = (id: any) => ({
            ...emailMock,
            id,
          });

          const negativeInput = () => Email.mount(input(-1));

          expect(negativeInput).toThrow('id must be a positive number');
        });

        it('should throw an error if id is not an integer', () => {
          const input = (id: any) => ({
            ...emailMock,
            id,
          });

          const floatInput = () => Email.mount(input(1.1));
          const floatNegativeInput = () => Email.mount(input(-1.1));

          expect(floatInput).toThrow('id must be an integer');
          expect(floatNegativeInput).toThrow('id must be a positive number');
        });
      });

      describe('Address', () => {
        it('should throw an error if address is not null, undefined or empty', () => {
          const input = (address: any) => ({
            ...emailMock,
            address,
          });

          const nullInput = () => Email.mount(input(null));
          const undefinedInput = () => Email.mount(input(undefined));
          const emptyInput = () => Email.mount(input(''));

          expect(nullInput).toThrow('address is required');
          expect(undefinedInput).toThrow('address is required');
          expect(emptyInput).toThrow('address must be a non-empty');
        });

        it('should throw an error if address is not a string', () => {
          const input = (address: any) => ({
            ...emailMock,
            address,
          });

          const numberInput = () => Email.mount(input(1));
          const booleanInput = () => Email.mount(input(true));
          const objectInput = () => Email.mount(input({}));
          const arrayInput = () => Email.mount(input([]));

          expect(numberInput).toThrow('address must be a string');
          expect(booleanInput).toThrow('address must be a string');
          expect(objectInput).toThrow('address must be a string');
          expect(arrayInput).toThrow('address must be a string');
        });

        it('should throw an error if address is not valid email', () => {
          const input = (address: any) => ({
            ...emailMock,
            address,
          });

          const invalidInput = () => Email.mount(input('invalid'));
          const invalidInput2 = () => Email.mount(input('invalid@'));
          const invalidInput3 = () => Email.mount(input('invalid@invalid'));
          const invalidInput4 = () => Email.mount(input('invalid@invalid.'));
          const invalidInput5 = () => Email.mount(input('invalid@.invalid'));
          const invalidInput6 = () => Email.mount(input('invalid@.invalid.'));

          expect(invalidInput).toThrow('address must be a valid email');
          expect(invalidInput2).toThrow('address must be a valid email');
          expect(invalidInput3).toThrow('address must be a valid email');
          expect(invalidInput4).toThrow('address must be a valid email');
          expect(invalidInput5).toThrow('address must be a valid email');
          expect(invalidInput6).toThrow('address must be a valid email');
        });
      });

      describe('Is Verified', () => {
        it('should throw an error if is verified is not a boolean', () => {
          const input = (isVerified: any) => ({
            ...emailMock,
            isVerified,
          });

          const stringInput = () => Email.mount(input('1'));
          const numberInput = () => Email.mount(input(1));
          const objectInput = () => Email.mount(input({}));
          const arrayInput = () => Email.mount(input([]));

          expect(stringInput).toThrow('is verified must be a boolean');
          expect(numberInput).toThrow('is verified must be a boolean');
          expect(objectInput).toThrow('is verified must be a boolean');
          expect(arrayInput).toThrow('is verified must be a boolean');
        });
      });

      describe('Is Spam Reported', () => {
        it('should throw an error if is spam reported is not a boolean', () => {
          const input = (isSpamReported: any) => ({
            ...emailMock,
            isSpamReported,
          });

          const stringInput = () => Email.mount(input('1'));
          const numberInput = () => Email.mount(input(1));
          const objectInput = () => Email.mount(input({}));
          const arrayInput = () => Email.mount(input([]));

          expect(stringInput).toThrow('is spam reported must be a boolean');
          expect(numberInput).toThrow('is spam reported must be a boolean');
          expect(objectInput).toThrow('is spam reported must be a boolean');
          expect(arrayInput).toThrow('is spam reported must be a boolean');
        });
      });

      describe('Is Unsubscribed', () => {
        it('should throw an error if is unsubscribed is not a boolean', () => {
          const input = (isUnsubscribed: any) => ({
            ...emailMock,
            isUnsubscribed,
          });

          const stringInput = () => Email.mount(input('1'));
          const numberInput = () => Email.mount(input(1));
          const objectInput = () => Email.mount(input({}));
          const arrayInput = () => Email.mount(input([]));

          expect(stringInput).toThrow('is unsubscribed must be a boolean');
          expect(numberInput).toThrow('is unsubscribed must be a boolean');
          expect(objectInput).toThrow('is unsubscribed must be a boolean');
          expect(arrayInput).toThrow('is unsubscribed must be a boolean');
        });
      });

      describe('Is Hard Bounced', () => {
        it('should throw an error if is hard bounced is not a boolean', () => {
          const input = (isHardBounced: any) => ({
            ...emailMock,
            isHardBounced,
          });

          const stringInput = () => Email.mount(input('1'));
          const numberInput = () => Email.mount(input(1));
          const objectInput = () => Email.mount(input({}));
          const arrayInput = () => Email.mount(input([]));

          expect(stringInput).toThrow('is hard bounced must be a boolean');
          expect(numberInput).toThrow('is hard bounced must be a boolean');
          expect(objectInput).toThrow('is hard bounced must be a boolean');
          expect(arrayInput).toThrow('is hard bounced must be a boolean');
        });
      });

      describe('Is Soft Bounced', () => {
        it('should throw an error if is soft bounced is not a boolean', () => {
          const input = (isSoftBounced: any) => ({
            ...emailMock,
            isSoftBounced,
          });

          const stringInput = () => Email.mount(input('1'));
          const numberInput = () => Email.mount(input(1));
          const objectInput = () => Email.mount(input({}));
          const arrayInput = () => Email.mount(input([]));

          expect(stringInput).toThrow('is soft bounced must be a boolean');
          expect(numberInput).toThrow('is soft bounced must be a boolean');
          expect(objectInput).toThrow('is soft bounced must be a boolean');
          expect(arrayInput).toThrow('is soft bounced must be a boolean');
        });
      });

      describe('Created At', () => {
        it('should throw an error if created at is not a date', () => {
          const input = (createdAt: any) => ({
            ...emailMock,
            createdAt,
          });

          const stringInput = () => Email.mount(input('1'));
          const numberInput = () => Email.mount(input(1));
          const booleanInput = () => Email.mount(input(true));
          const objectInput = () => Email.mount(input({}));
          const arrayInput = () => Email.mount(input([]));

          expect(stringInput).toThrow('created at must be a date');
          expect(numberInput).toThrow('created at must be a date');
          expect(booleanInput).toThrow('created at must be a date');
          expect(objectInput).toThrow('created at must be a date');
          expect(arrayInput).toThrow('created at must be a date');
        });
      });

      describe('Updated At', () => {
        it('should throw an error if updated at is not a date', () => {
          const input = (updatedAt: any) => ({
            ...emailMock,
            updatedAt,
          });

          const stringInput = () => Email.mount(input('1'));
          const numberInput = () => Email.mount(input(1));
          const booleanInput = () => Email.mount(input(true));
          const objectInput = () => Email.mount(input({}));
          const arrayInput = () => Email.mount(input([]));

          expect(stringInput).toThrow('updated at must be a date');
          expect(numberInput).toThrow('updated at must be a date');
          expect(booleanInput).toThrow('updated at must be a date');
          expect(objectInput).toThrow('updated at must be a date');
          expect(arrayInput).toThrow('updated at must be a date');
        });
      });
    });
  });

  describe('Update', () => {
    let email: Email;

    beforeEach(() => {
      email = Email.mount(emailMock);

      expect(email).toBeDefined();
      expect(email).toBeInstanceOf(Email);
      expect(email.id).toBe(emailMock.id);
      expect(email.address).toBe(emailMock.address);
      expect(email.isVerified).toBe(emailMock.isVerified);
      expect(email.isSpamReported).toBe(emailMock.isSpamReported);
      expect(email.isUnsubscribed).toBe(emailMock.isUnsubscribed);
      expect(email.isHardBounced).toBe(emailMock.isHardBounced);
      expect(email.isSoftBounced).toBe(emailMock.isSoftBounced);
      expect(email.createdAt).toBe(emailMock.createdAt);
      expect(email.updatedAt).toBe(emailMock.updatedAt);
    });

    afterEach(() => {
      email = null;
    });

    describe('Success', () => {
      describe('Address', () => {
        it('should update address', () => {
          const newAddress = 'cartron@email.com.br';
          email.address = newAddress;

          expect(email.address).toBe(newAddress);
        });
      });

      describe('Is Verified', () => {
        it('should update is verified', () => {
          const newIsVerified = false;
          email.isVerified = newIsVerified;

          expect(email.isVerified).toBe(newIsVerified);
        });
      });

      describe('Is Spam Reported', () => {
        it('should update is spam reported', () => {
          const newIsSpamReported = true;
          email.isSpamReported = newIsSpamReported;

          expect(email.isSpamReported).toBe(newIsSpamReported);
        });
      });

      describe('Is Unsubscribed', () => {
        it('should update is unsubscribed', () => {
          const newIsUnsubscribed = true;
          email.isUnsubscribed = newIsUnsubscribed;

          expect(email.isUnsubscribed).toBe(newIsUnsubscribed);
        });
      });

      describe('Is Hard Bounced', () => {
        it('should update is hard bounced', () => {
          const newIsHardBounced = true;
          email.isHardBounced = newIsHardBounced;

          expect(email.isHardBounced).toBe(newIsHardBounced);
        });
      });

      describe('Is Soft Bounced', () => {
        it('should update is soft bounced', () => {
          const newIsSoftBounced = true;
          email.isSoftBounced = newIsSoftBounced;

          expect(email.isSoftBounced).toBe(newIsSoftBounced);
        });
      });

      describe('Updated At', () => {
        it('should update updated at', () => {
          const newUpdatedAt = new Date();
          email.updatedAt = newUpdatedAt;

          expect(email.updatedAt).toBe(newUpdatedAt);
        });
      });
    });

    describe('Failure', () => {
      describe('Address', () => {
        it('should throw an error if address is not a null, undefined or empty', () => {
          const input = (address: any) => {
            email.address = address;
          };

          const nullInput = () => input(null);
          const undefinedInput = () => input(undefined);
          const emptyInput = () => input('');

          expect(nullInput).toThrow('address is required');
          expect(undefinedInput).toThrow('address is required');
          expect(emptyInput).toThrow('address must be a non-empty');
        });

        it('should throw an error if address is not a string', () => {
          const input = (address: any) => {
            email.address = address;
          };

          const numberInput = () => input(1);
          const booleanInput = () => input(true);
          const objectInput = () => input({});
          const arrayInput = () => input([]);

          expect(numberInput).toThrow('address must be a string');
          expect(booleanInput).toThrow('address must be a string');
          expect(objectInput).toThrow('address must be a string');
          expect(arrayInput).toThrow('address must be a string');
        });

        it('should throw an error if address is not a valid email', () => {
          const input = (address: any) => {
            email.address = address;
          };

          const invalidEmailInput = () => input('invalid');
          const invalidEmailInput2 = () => input('invalid@');
          const invalidEmailInput3 = () => input('invalid@invalid');
          const invalidEmailInput4 = () => input('invalid@invalid.');
          const invalidEmailInput5 = () => input('invalid@.invalid');
          const invalidEmailInput6 = () => input('invalid@.invalid.');

          expect(invalidEmailInput).toThrow('address must be a valid email');
          expect(invalidEmailInput2).toThrow('address must be a valid email');
          expect(invalidEmailInput3).toThrow('address must be a valid email');
          expect(invalidEmailInput4).toThrow('address must be a valid email');
          expect(invalidEmailInput5).toThrow('address must be a valid email');
          expect(invalidEmailInput6).toThrow('address must be a valid email');
        });
      });

      describe('Is Verified', () => {
        it('should throw an error if is verified is not a boolean', () => {
          const input = (isVerified: any) => {
            email.isVerified = isVerified;
          };

          const stringInput = () => input('true');
          const numberInput = () => input(1);
          const objectInput = () => input({});
          const arrayInput = () => input([]);

          expect(stringInput).toThrow('is verified must be a boolean');
          expect(numberInput).toThrow('is verified must be a boolean');
          expect(objectInput).toThrow('is verified must be a boolean');
          expect(arrayInput).toThrow('is verified must be a boolean');
        });
      });

      describe('Is Spam Reported', () => {
        it('should throw an error if is spam reported is not a boolean', () => {
          const input = (isSpamReported: any) => {
            email.isSpamReported = isSpamReported;
          };

          const stringInput = () => input('true');
          const numberInput = () => input(1);
          const objectInput = () => input({});
          const arrayInput = () => input([]);

          expect(stringInput).toThrow('is spam reported must be a boolean');
          expect(numberInput).toThrow('is spam reported must be a boolean');
          expect(objectInput).toThrow('is spam reported must be a boolean');
          expect(arrayInput).toThrow('is spam reported must be a boolean');
        });
      });

      describe('Is Unsubscribed', () => {
        it('should throw an error if is unsubscribed is not a boolean', () => {
          const input = (isUnsubscribed: any) => {
            email.isUnsubscribed = isUnsubscribed;
          };

          const stringInput = () => input('true');
          const numberInput = () => input(1);
          const objectInput = () => input({});
          const arrayInput = () => input([]);

          expect(stringInput).toThrow('is unsubscribed must be a boolean');
          expect(numberInput).toThrow('is unsubscribed must be a boolean');
          expect(objectInput).toThrow('is unsubscribed must be a boolean');
          expect(arrayInput).toThrow('is unsubscribed must be a boolean');
        });
      });

      describe('Is Hard Bounced', () => {
        it('should throw an error if is hard bounced is not a boolean', () => {
          const input = (isHardBounced: any) => {
            email.isHardBounced = isHardBounced;
          };

          const stringInput = () => input('true');
          const numberInput = () => input(1);
          const objectInput = () => input({});
          const arrayInput = () => input([]);

          expect(stringInput).toThrow('is hard bounced must be a boolean');
          expect(numberInput).toThrow('is hard bounced must be a boolean');
          expect(objectInput).toThrow('is hard bounced must be a boolean');
          expect(arrayInput).toThrow('is hard bounced must be a boolean');
        });
      });

      describe('Is Soft Bounced', () => {
        it('should throw an error if is soft bounced is not a boolean', () => {
          const input = (isSoftBounced: any) => {
            email.isSoftBounced = isSoftBounced;
          };

          const stringInput = () => input('true');
          const numberInput = () => input(1);
          const objectInput = () => input({});
          const arrayInput = () => input([]);

          expect(stringInput).toThrow('is soft bounced must be a boolean');
          expect(numberInput).toThrow('is soft bounced must be a boolean');
          expect(objectInput).toThrow('is soft bounced must be a boolean');
          expect(arrayInput).toThrow('is soft bounced must be a boolean');
        });
      });

      describe('Updated At', () => {
        it('should throw an error if updated at is not a undefined, null or empty', () => {
          const input = (updatedAt: any) => {
            email.updatedAt = updatedAt;
          };

          const undefinedInput = () => input(undefined);
          const nullInput = () => input(null);
          const inputEmpty = () => input('');

          expect(undefinedInput).toThrow('updated at must be a date');
          expect(nullInput).toThrow('updated at must be a date');
          expect(inputEmpty).toThrow('updated at must be a date');
        });

        it('should throw an error if updated at is not a date', () => {
          const input = (updatedAt: any) => {
            email.updatedAt = updatedAt;
          };

          const stringInput = () => input('true');
          const numberInput = () => input(1);
          const booleanInput = () => input(true);
          const objectInput = () => input({});
          const arrayInput = () => input([]);

          expect(stringInput).toThrow('updated at must be a date');
          expect(numberInput).toThrow('updated at must be a date');
          expect(booleanInput).toThrow('updated at must be a date');
          expect(objectInput).toThrow('updated at must be a date');
          expect(arrayInput).toThrow('updated at must be a date');
        });
      });
    });
  });
});
