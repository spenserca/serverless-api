import { Chance } from 'chance';
import { helloWorld } from './index';

const chance = new Chance();

let actual: any;

describe('when no name is passed', () => {
  beforeEach(async () => {
    actual = await helloWorld({}, {});
  });

  it('has a successful status', () => {
    expect(actual.statusCode).toEqual(200);
  });

  it('has a hello world message in the body', () => {
    const expected = `{"message":"Hello World!"}`;

    expect(actual.body).toEqual(expected);
  });
});

describe('when name is passed as a query string parameter', () => {
  let name: string;

  beforeEach(async () => {
    name = chance.string();

    actual = await helloWorld({
      queryStringParameters: {
        name
      }
    }, {});
  });

  it('has a successful status', () => {
    expect(actual.statusCode).toEqual(200);
  });

  it('has a hello world message in the body', () => {
    const expected = `{"message":"Hello ${name}!"}`;

    expect(actual.body).toEqual(expected);
  });
});
