import { stringCalculator } from './stringCalculator';

describe('String Calculator', () => {
  let calculator: stringCalculator;

  beforeAll(() => {
    calculator = new stringCalculator();
  });

  test('return 0 for empty string', () => {
    expect(calculator.add("")).toBe(0);
  });
});