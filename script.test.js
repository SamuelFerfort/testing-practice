import { capitalize, reverseString, calc } from "./script";

test("Capitalize", () => {
  expect(capitalize("hello")).toBe("Hello");
});

test("Reverse String", () => {
  expect(reverseString("hello")).toBe("olleh");
});

describe("Calculator", () => {
  let calculator;

  beforeEach(() => {
    calculator = calc();
  });

  test("adds two numbers", () => {
    expect(calculator.add(1, 2)).toBe(3);
  });

  test("subtracts two numbers", () => {
    expect(calculator.subtract(1, 2)).toBe(-1);
  });

  test("Multiply two numbers", () => {
    expect(calculator.multiply(3, 2)).toBe(6);
  });

  test("Divide two numbers", () => {
    const calculator = calc();
    expect(calculator.divide(10, 2)).toBe(5);
  });
});


