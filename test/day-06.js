"use strict";

const expect = require("chai").expect;
const {part1, endState: endState1} = require("../day/06/part1.js");
const part2 = require("../day/06/part2.js");

describe("Day 6", () => {
  describe("Part 1", () => {
    const testArray = [0, 2, 7, 0];
    const test = {
      input: testArray.join("\t"),
      result: 5,
      memoryBanks: [2, 4, 1, 2],
    };

    it(testArray.join("; "), () => {
      expect(part1(test.input)).equal(test.result);
    });

    it(`${testArray.join("; ")}, end state`, () => {
      expect(endState1(test.input)).deep.equal(test.memoryBanks);
    });
  });

  describe("Part 2", () => {
    const testArray = [0, 2, 7, 0];
    const test = {
      input: testArray.join("\t"),
      result: 4,
    };

    it(testArray.join("; "), () => {
      expect(part2(test.input)).equal(test.result);
    });
  });
});
