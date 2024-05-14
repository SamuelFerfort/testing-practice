import {
  capitalize,
  reverseString,
  calc,
  caesar,
  analyzeArray,
} from "./script";

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

test("Caesar cypher z check", () => {
  expect(caesar("az", 1)).toBe("ba");
});

test("Caesar cypher caps", () => {
  expect(caesar("BZ", 3)).toBe("EC");
});

test("Caesar cypher caps", () => {
  expect(caesar("hello,world!", 3)).toBe("khoor,zruog!");
});

test("analyzeArray", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

test("analyzeArray", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, "A"])).toBeNull()
});

