import { stringCalculator } from './stringCalculator';

describe('String Calculator', () => {
  let calculator: stringCalculator;

  beforeAll(() => {
    calculator = new stringCalculator();
  });

  test('return 0 for empty string', () => {
    expect(calculator.add("")).toBe(0);
  });

  test('return n for string containing only one number n', () =>{
    expect(calculator.add("1")).toBe(1);
  })
});