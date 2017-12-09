"use strict";

const expect = require("chai").expect;
const {part1, endState: endState1} = require("../day/05/part1.js");
const {part2, endState: endState2} = require("../day/05/part2.js");

describe("Day 5", () => {
  describe("Part 1", () => {
    const testArray = [0, 3, 0, 1, -3];
    const test = {
      input: testArray.join("\n"),
      result: 5,
      endState: [2, 5, 0, 1, -2],
    };

    it(testArray.join("; "), () => {
      expect(part1(test.input)).equal(test.result);
    });

    it(`${testArray.join("; ")}, end state`, () => {
      expect(endState1(test.input)).deep.equal(test.endState);
    });
  });

  describe("Part 2", () => {
    const testArray = [0, 3, 0, 1, -3];
    const test = {
      input: testArray.join("\n"),
      result: 10,
      endState: [2, 3, 2, 3, -1],
    };

    it(testArray.join("; "), () => {
      expect(part2(test.input)).equal(test.result);
    });

    it(`${testArray.join("; ")}, end state`, () => {
      expect(endState2(test.input)).deep.equal(test.endState);
    });
  });
});
