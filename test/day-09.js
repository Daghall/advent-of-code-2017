"use strict";

const expect = require("chai").expect;
const {part1, parse} = require("../day/09/part1.js");
const part2 = require("../day/09/part2.js");

describe("Day 9", () => {
  describe("Part 1", () => {
    const tests = [
      {
        input: "{}",
        result: {
          score: 1,
          groups: 1,
        },
      },
      {
        input: "{{{}}}",
        result: {
          score: 6,
          groups: 3,
        },
      },
      {
        input: "{{},{}}",
        result: {
          score: 5,
          groups: 3,
        },
      },
      {
        input: "{{{},{},{{}}}}",
        result: {
          score: 16,
          groups: 6,
        },
      },
      {
        input: "{<a>,<a>,<a>,<a>}",
        result: {
          score: 1,
          groups: 1,
        },
      },
      {
        input: "{{<ab>},{<ab>},{<ab>},{<ab>}}",
        result: {
          score: 9,
          groups: 5,
        },
      },
      {
        input: "{{<!!>},{<!!>},{<!!>},{<!!>}}",
        result: {
          score: 9,
          groups: 5,
        },
      },
      {
        input: "{{<a!>},{<a!>},{<a!>},{<ab>}}",
        result: {
          score: 3,
          groups: 2,
        },
      },
    ];

    tests.forEach((test) => {
      it(test.input, () => {
        expect(parse(test.input)).deep.equal(test.result);
        expect(part1(test.input)).equal(test.result.score);
      });
    });
  });

  describe("Part 2", () => {
    const tests = [
      {
        input: "<>",
        result: 0,
      },
      {
        input: "<random characters>",
        result: 17,
      },
      {
        input: "<<<<>",
        result: 3,
      },
      {
        input: "<{!>}>",
        result: 2,
      },
      {
        input: "<!!>",
        result: 0,
      },
      {
        input: "<!!!>>",
        result: 0,
      },
      {
        input: "<{o\"i!a,<{i<a>",
        result: 10,
      },
    ];

    tests.forEach((test) => {
      it(test.input, () => {
        expect(part2(test.input)).equal(test.result);
      });
    });
  });
});
