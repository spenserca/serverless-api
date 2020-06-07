import { helloWorld } from './index';

let actual: any;

beforeEach(async () => {
  actual = await helloWorld();
});

it('has a successful status', () => {
  expect(actual.statusCode).toEqual(200);
});

it('has a hello world message in the body', () => {
  expect(actual.body).toEqual({ message: 'Hello World!' });
});
