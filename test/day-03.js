"use strict";

const expect = require("chai").expect;
const {part1, findQuad, distanceToMiddle} = require("../day/03/part1.js");
const part2 = require("../day/03/part2.js");

describe("Day 3", () => {
  describe("Part 1, findQuad()", () => {
    const tests = [
      {
        input: "2",
        result: 1
      },
      {
        input: "5",
        result: 1
      },
      {
        input: "8",
        result: 1
      },
      {
        input: "9",
        result: 1
      },
      {
        input: "10",
        result: 2
      },
      {
        input: "14",
        result: 2
      },
      {
        input: "21",
        result: 2
      },
      {
        input: "25",
        result: 2
      },
    ];

    tests.forEach((test) => {
      it(test.input, () => {
        expect(findQuad(test.input)).equal(test.result);
      });
    });
  });

describe("Part 1, distanceToMiddle()", () => {
  const tests = [
    {
      input: 2,
      result: 0
    },
    {
      input: 5,
      result: 1
    },
    {
      input: 8,
      result: 0
    },
    {
      input: 9,
      result: 1
    },
    {
      input: 11,
      result: 0
    },
    {
      input: 14,
      result: 1
    },
    {
      input: 19,
      result: 0
    },
    {
      input: 25,
      result: 2
    },
  ];

  tests.forEach((test) => {
    it(test.input.toString(), () => {
      expect(distanceToMiddle(test.input)).equal(test.result);
    });
  });
});

  describe("Part 1", () => {
    const tests = [
      {
        input: "1",
        result: 0
      },
      {
        input: "12",
        result: 3
      },
      {
        input: "23",
        result: 2
      },
      {
        input: "1024",
        result: 31
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
        input: "1",
        result: 2
      },
      {
        input: "2",
        result: 4
      },
      {
        input: "4",
        result: 5
      },
      {
        input: "5",
        result: 10
      },
    ];

    tests.forEach((test) => {
      it(test.input, () => {
        expect(part2(test.input)).equal(test.result);
      });
    });
  });
});
