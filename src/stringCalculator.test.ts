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
  });

  test('return sum of two numbers', () =>{
    expect(calculator.add("1,2")).toBe(3);
  });

  test('return sum of n numbers', () =>{
    expect(calculator.add("1,2,3,4,5")).toBe(1+2+3+4+5);
  });

  test('handle new lines between numbers', () =>{
    expect(calculator.add("1\n2,3")).toBe(6);
  });

  test('handle custom delimiter of length 1', () =>{
    expect(calculator.add("//;\n1;2;3")).toBe(6);
  });

  test('throw exception for negative numbers', () =>{
    expect(() => {calculator.add("-1,2,-3")}).toThrow(new Error("negative numbers not allowed -1, -3"));
  });
});