"use strict";

const expect = require("chai").expect;
const part1 = require("../day/12/part1.js");
const part2 = require("../day/12/part2.js");

describe("Day 12", () => {
  describe("Part 1", () => {
    const testStrings = [
      "0 <-> 2",
      "1 <-> 1",
      "2 <-> 0, 3, 4",
      "3 <-> 2, 4",
      "4 <-> 2, 3, 6",
      "5 <-> 6",
      "6 <-> 4, 5",
    ];
    const test = {
      input: testStrings.join("\n"),
      result: 6
    };

    it(testStrings.join("; "), () => {
      expect(part1(test.input)).equal(test.result);
    });
  });

  describe("Part 2", () => {
    const testStrings = [
      "0 <-> 2",
      "1 <-> 1",
      "2 <-> 0, 3, 4",
      "3 <-> 2, 4",
      "4 <-> 2, 3, 6",
      "5 <-> 6",
      "6 <-> 4, 5",
    ];
    const test = {
      input: testStrings.join("\n"),
      result: 2
    };

    it(testStrings.join("; "), () => {
      expect(part2(test.input)).equal(test.result);
    });
  });
});
