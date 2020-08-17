/**
 *  TESTS FOR INDEX.
 */
import greeting from '../src';

test('Testing testing', () => {
  expect(2).toBe(2);
});

test('Testing greeting', () => {
  const greet = greeting('tester');
  expect(greet).toBe('Hello tester');
});
