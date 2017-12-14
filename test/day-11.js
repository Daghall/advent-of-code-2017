"use strict";

const expect = require("chai").expect;
const part1 = require("../day/11/part1.js");
const part2 = require("../day/11/part2.js");

describe("Day 11", () => {
  describe("Part 1", () => {
    const tests = [
      {
        input: "ne,ne,ne",
        result: 3,
      },
      {
        input: "ne,ne,sw,sw",
        result: 0,
      },
      {
        input: "ne,ne,s,s",
        result: 2,
      },
      {
        input: "se,sw,se,sw,sw",
        result: 3,
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
        input: "ne,ne,ne",
        result: 3,
      },
      {
        input: "ne,ne,sw,sw",
        result: 2,
      },
      {
        input: "ne,ne,s,s",
        result: 2,
      },
      {
        input: "se,sw,se,sw,sw",
        result: 3,
      },
    ];

    tests.forEach((test) => {
      it(test.input, () => {
        expect(part2(test.input)).equal(test.result);
      });
    });
  });
});
