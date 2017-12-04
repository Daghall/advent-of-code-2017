"use strict";

const expect = require("chai").expect;
const {part1, checkRow: checkRow1} = require("../day/02/part1.js");
const {part2, checkRow: checkRow2, sortNumericDescending} = require("../day/02/part2.js");

describe("Day 2", () => {
  describe("Part 1, checkRow()", () => {
    const tests = [
      {
        input: "5	1	9	5",
        result: 8,
      },
      {
        input: "7	5	3",
        result: 4,
      },
      {
        input: "2	4	6	8",
        result: 6,
      },
    ];

    tests.forEach((test) => {
      it(test.input, () => {
        expect(checkRow1(test.input)).equal(test.result);
      });
    });
  });

  describe("Part 1", () => {
    const test = {
      input: "5	1	9	5\n7	5	3\n2	4	6	8\n",
      result: 18,
    };

    it(test.input, () => {
      expect(part1(test.input)).equal(test.result);
    });
  });

  describe("Part 2, checkRow()", () => {
    const tests = [
      {
        input: "5	9	2	8",
        result: 4,
      },
      {
        input: "9	4	7	3",
        result: 3,
      },
      {
        input: "3	8	6	5",
        result: 2,
      },
    ];

    tests.forEach((test) => {
      it(test.input, () => {
        expect(checkRow2(test.input)).equal(test.result);
      });
    });
  });

  describe("Part 2, sortNumericDescending()", () => {
    const test = [2, 1, 34, 11, 22];
    const result = [34, 22, 11, 2, 1];

    it(test.join(", "), () => {
      expect(test.sort(sortNumericDescending)).deep.equal(result);
    });
  });

  describe("Part 2", () => {
    const test = {
      input: "5	9	2	8\n9	4	7	3\n3	8	6	5\n",
      result: 9,
    };

    it(test.input, () => {
      expect(part2(test.input)).equal(test.result);
    });
  });
});
