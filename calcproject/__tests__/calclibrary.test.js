"use strict";

const { sum } = require("../calclibrary");

describe("Test sum with integers one by one", () => {
  test("test sum(1,1) returns 2", () => {
    expect(sum(1, 1)).toBe(2);
  });

  test("test sum(2,3) returns 5", () => {
    expect(sum(2, 3)).toBe(5);
  });
});

describe("Test sum with integers using test.each", () => {
  const testValues = [
    //a   b  expectedResult
    [12, 100, 112],
    [2, -4, -2],
    [-4, 2, -2],
    [0, 0, 0],
    [0, 3, 3],
    [3, 0, 3],
    [0, -3, -3],
    [-3, 0, -3],
  ];

  test.each(testValues)("sum(%s,%s) returns %s", (a, b, expectedResult) => {
    expect(sum(a, b)).toBe(expectedResult);
  });
});

describe("test sum with floats", () => {
  const testValues = [
    [10, 11.5, 21.5],
    [2.5, 3, 5.5],
    [-2.5, 3, 0.5],
    [3, -2.5, 0.5],
    [-2.5, -3, -5.5],
    [-2.5, -2.5, -5.0],
    [-2.5, 0, -2.5],
    [2.5, -2.5, -0],
    [2.4, -2.5, -0.1],
  ];
  test.each(testValues)("sum(%s,%s) returns %s", (a, b, expectedResult) => {
    expect(sum(a, b)).toBeCloseTo(expectedResult);
    // better not to compare floats to be equal and use toBeCloseTo
  });
});

describe("Test missing parameter throws an exception", () => {
  test('sum() throws an exception "parameter missing"', () => {
    expect(() => sum()).toThrow("parameter missing");
  });
  const testValues = [[1], ["a"], [""]];
  test.each(testValues)(
    'sum(%s) throws an exception "parameter missing"',
    (ex) => {
      expect(() => sum(ex)).toThrow("parameter missing");
    }
  );
});

describe("Test that only numbers are allowed", () => {
  const testValues = [
    ['sum("1","2")', "1", "2"],
    ['sum("a","2")', "a", 1],
    ['sum("1","a")', 1, "a"],
    ['sum("a","b")', "a", "b"],
    ['sum("","")', "", ""],
    ['sum("null","1")', null, 1],
    ['sum("undefined","1")', undefined, 1],
    ['sum("1", "null")', 1, null],
    ['sum("1", "undefined")', 1, undefined],
  ];
  test.each(testValues)(
    '%s throws an exception "only numbers allowed"',
    (text, a, b) => {
      expect(() => sum(a, b)).toThrow("only numbers allowed");
    }
  );
});
