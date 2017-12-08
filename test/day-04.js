"use strict";

const expect = require("chai").expect;
const part1 = require("../day/04/part1.js");
const part2 = require("../day/04/part2.js");

describe("Day 4", () => {
  describe("Part 1", () => {
    const testStrings = [
      "aa bb cc dd ee",
      "aa bb cc dd aa",
      "aa bb cc dd aaa",
    ];
    const test = {
      input: testStrings.join("\n"),
      result: 2
    };

    it(testStrings.join("; "), () => {
      expect(part1(test.input)).equal(test.result);
    });
  });

  describe("Part 2", () => {
    const testStrings = [
      "abcde fghij",
      "abcde xyz ecdab",
      "a ab abc abd abf abj",
      "iiii oiii ooii oooi oooo",
      "oiii ioii iioi iiio",
    ];
    const test = {
      input: testStrings.join("\n"),
      result: 3
    };

    it(testStrings.join("; "), () => {
      expect(part2(test.input)).equal(test.result);
    });
  });
});
