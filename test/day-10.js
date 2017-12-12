"use strict";

const expect = require("chai").expect;
const {part1, calculateHash} = require("../day/10/part1.js");
const part2 = require("../day/10/part2.js");

describe("Day 10", () => {
  describe("Part 1, calculateHash", () => {
    const test = {
      prime: [0, 1, 2, 3, 4],
      input: [3, 4, 1, 5],
      result: 12,
    };

    it(test.input.join("; "), () => {
      expect(calculateHash(test.prime, test.input)).equal(test.result);
    });
  });

  describe("Part 1", () => {
    const test = {
      input: "256,3",
      result: 64262,
    };

    it(test.input, () => {
      expect(part1(test.input)).equal(test.result);
    });
  });

  describe("Part 2", () => {
    const tests = [
      {
        input: "",
        result: "a2582a3a0e66e6e86e3812dcb672a272",
      },
      {
        input: "AoC 2017",
        result: "33efeb34ea91902bb2f59c9920caa6cd",
      },
      {
        input: "1,2,3",
        result: "3efbe78a8d82f29979031a4aa0b16a9d",
      },
      {
        input: "1,2,4",
        result: "63960835bcdc130f0b66d7ff4f6a5a8e",
      },
    ];

    tests.forEach((test) => {
      it(`"${test.input}"`, () => {
        expect(part2(test.input)).equal(test.result);
      });
    });
  });
});
