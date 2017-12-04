"use strict";

const expect = require("chai").expect;
const part1 = require("../day/01/part1.js");
const part2 = require("../day/01/part2.js");

describe("Day 1", () => {
  describe("Part 1", () => {
    const tests = [
      {
        input: "1122",
        result: 3
      },
      {
        input: "1111",
        result: 4
      },
      {
        input: "1234",
        result: 0
      },
      {
        input: "91212129",
        result: 9
      },
    ];

    tests.forEach((test) => {
      it(test.input, () => {
        expect(part1(test.input)).equal(test.result);
      });
    });
  });

  describe("Part 2", () => {
    const tests = [
      {
        input: "1212",
        result: 6
      },
      {
        input: "1221",
        result: 0
      },
      {
        input: "123425",
        result: 4
      },
      {
        input: "123123",
        result: 12
      },
      {
        input: "12131415",
        result: 4
      },
    ];

    tests.forEach((test) => {
      it(test.input, () => {
        expect(part2(test.input)).equal(test.result);
      });
    });
  });
});
