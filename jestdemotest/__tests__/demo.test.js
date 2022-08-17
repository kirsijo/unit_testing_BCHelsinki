"use strict";

beforeAll(() => {
  console.log("BEFORE_ALL", "init before all tests");
});

afterAll(() => {
  console.log("AFTER_ALL", "cleaning after all tests");
});

test("This is the first test", () => {
  console.log("first test");
});

it("This is the second test", () => {
  console.log("second test");
});

describe("This is a test suite A", () => {
  beforeEach(() => {
    console.log("beforeEach", "Run before each test");
  });
  afterEach(() => {
    console.log("afterEach", "after every test in suite A");
  });

  test("first test in suite A", () => {
    console.log("first in suite A");
  });

  test("second text in suite A", () => {
    console.log("second in suite A");
  });
});

describe("This is a test suite B", () => {
  beforeAll(() => {
    console.log("BeforeAllInSuiteB");
  });
  describe("this is a subSuite of B", () => {
    test("first test of subsuite a of B", () => {
      console.log("subsuite A of B");
    });
    test("second test of subsuite A of B", () => {
      console.log("second test of subA of B");
    });
  });

  describe("subsuite B of B", () => {
    test("first of B of B", () => {
      console.log("first test of B of B");
    });
  });
});

describe("tests concatenating strings", () => {
  const concat = (partA, partB) => partA + partB;
  test('"first" and "second" results "firstsecond"', () => {
    expect(concat("first", "second")).toBe("firstsecond");
  });
  test('"1" and "2" results "12"', () => {
    expect(concat("1", "2")).toBe("12");
    // if the above numbers are a number, not a string, the test fails
  });
});

describe("this tests for an exception", () => {
  function testFunction() {
    throw Error("This is an exception");
  }
  test("tests if a function throws an exception", () => {
    expect(() => testFunction()).toThrow("This is an exception");
  });
});
