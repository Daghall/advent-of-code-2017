"use strict";

const expect = require("chai").expect;
const {part1, mapInstructions, Register} = require("../day/08/part1.js");
const {part2} = require("../day/08/part2.js");

describe("Day 8", () => {
  describe("Part 1, mapInstructions()", () => {
    const tests = [
      {
        input: "a inc 1 if b < 10",
        result: {
          operation: {
            register: "a",
            operation: "inc",
            value: 1,
          },
          condition: {
            register: "b",
            operation: "<",
            value: 10,
          },
        },
      },
      {
        input: "dec dec -42 if cd != -4711",
        result: {
          operation: {
            register: "dec",
            operation: "dec",
            value: -42,
          },
          condition: {
            register: "cd",
            operation: "!=",
            value: -4711,
          },
        },
      },
    ];

    tests.forEach((test) => {
      it(test.input, () => {
        expect(mapInstructions(test.input)).deep.equal(test.result);
      });
    });
  });

  describe("Part 1, evaluateCondition()", () => {
    const register = new Register();
    register.registers = new Map([
      ["a", 5],
    ]);

    const tests = [
      {
        input: ">",
        result: false,
      },
      {
        input: "<",
        result: false,
      },
      {
        input: ">=",
        result: true,
      },
      {
        input: "<=",
        result: true,
      },
      {
        input: "==",
        result: true,
      },
      {
        input: "!=",
        result: false,
      },
    ];

    tests.forEach((test) => {
      it(test.input, () => {
        expect(register.evaluateCondition({
          register: "a",
          operation: test.input,
          value: 5,
        })).equal(test.result);
      });
    });

  });

  describe("Part 1", () => {
    const testStrings = [
      "b inc 5 if a > 1",
      "a inc 1 if b < 5",
      "c dec -10 if a >= 1",
      "c inc -20 if c == 10",
    ];
    const test = {
      input: testStrings.join("\n"),
      result: 1
    };

    it(testStrings.join("; "), () => {
      expect(part1(test.input)).equal(test.result);
    });
  });

  describe("Part 2", () => {
    const testStrings = [
      "b inc 5 if a > 1",
      "a inc 1 if b < 5",
      "c dec -10 if a >= 1",
      "c inc -20 if c == 10",
    ];
    const test = {
      input: testStrings.join("\n"),
      result: 10
    };

    it(testStrings.join("; "), () => {
      expect(part2(test.input)).equal(test.result);
    });
  });
});
