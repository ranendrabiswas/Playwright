//import { test } from '@playwright/test';
import test from '../fixtures/myfix';


test.describe("Use of fixtures", () => {

  test('hello', ({hello}) => {
    test.expect(hello).toBe('Hello');
  });
  
  test('hello world', ({helloWorld}) => {
    test.expect(helloWorld).toBe('Hello, world!');
  });
})