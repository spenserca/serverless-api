import { helloWorld } from './index';
import { Chance } from 'chance';

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
    expect(actual.body).toEqual({ message: 'Hello World!' });
  });
});

describe('when no name is passed', () => {
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
    expect(actual.body).toEqual({ message: `Hello ${name}!` });
  });
});
