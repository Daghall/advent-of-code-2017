"use strict";

const expect = require("chai").expect;
const part1 = require("../day/07/part1.js");
const {part2, checkChildren} = require("../day/07/part2.js");

describe("Day 7", () => {
  describe("Part 1", () => {
    const testStrings = [
      "pbga (66)",
      "xhth (57)",
      "ebii (61)",
      "havc (66)",
      "ktlj (57)",
      "fwft (72) -> ktlj, cntj, xhth",
      "qoyq (66)",
      "padx (45) -> pbga, havc, qoyq",
      "tknk (41) -> ugml, padx, fwft",
      "jptl (61)",
      "ugml (68) -> gyxo, ebii, jptl",
      "gyxo (61)",
      "cntj (57)",
      "",
    ];
    const test = {
      input: testStrings.join("\n"),
      result: "tknk",
    };

    it(testStrings.join("; "), () => {
      expect(part1(test.input)).equal(test.result);
    });
  });

  describe("Part 2, checkChildren()", () => {
    describe("Too few children", () => {
      const test = {
        children: []
      };

      it("returns undefined", () => {
        expect(checkChildren(test)).equal(undefined);
      });
    });

    describe("First is unbalanced", () => {
      const test = {
        children: [
          {
            weight: 2,
            childWeight: 7,
          },
          {
            weight: 2,
            childWeight: 6,
          },
          {
            weight: 2,
            childWeight: 6,
          },
        ]
      };

      it("throws diff", () => {
        try {
          checkChildren(test);
        } catch (e) {
          expect(e).equal(1);
        }
      });
    });

    describe("Second is unbalanced", () => {
      const test = {
        children: [
          {
            weight: 2,
            childWeight: 6,
          },
          {
            weight: 2,
            childWeight: 7,
          },
          {
            weight: 2,
            childWeight: 6,
          },
        ]
      };

      it("throws diff", () => {
        try {
          checkChildren(test);
          expect("unreachable").equal("");
        } catch (e) {
          expect(e).equal(1);
        }
      });
    });

    describe("Third is unbalanced", () => {
      const test = {
        children: [
          {
            weight: 2,
            childWeight: 6,
          },
          {
            weight: 2,
            childWeight: 6,
          },
          {
            weight: 2,
            childWeight: 7,
          },
        ]
      };

      it("throws diff", () => {
        try {
          checkChildren(test);
          expect("unreachable").equal("");
        } catch (e) {
          expect(e).equal(1);
        }
      });
    });

    describe("None are unbalanced", () => {
      const test = {
        children: [
          {
            weight: 2,
            childWeight: 6,
          },
          {
            weight: 2,
            childWeight: 6,
          },
          {
            weight: 2,
            childWeight: 6,
          },
        ]
      };

      it("does not throw", () => {
        try {
          checkChildren(test);
          expect("reachable").equal("reachable");
        } catch (e) {
          expect("unreachable").equal("");
        }
      });
    });
  });

  describe("Part 2", () => {
    const testStrings = [
      "pbga (66)",
      "xhth (57)",
      "ebii (61)",
      "havc (66)",
      "ktlj (57)",
      "fwft (72) -> ktlj, cntj, xhth",
      "qoyq (66)",
      "padx (45) -> pbga, havc, qoyq",
      "tknk (41) -> ugml, padx, fwft",
      "jptl (61)",
      "ugml (68) -> gyxo, ebii, jptl",
      "gyxo (61)",
      "cntj (57)",
      "",
    ];
    const test = {
      input: testStrings.join("\n"),
      result: 60,
    };

    it(testStrings.join("; "), () => {
      expect(part2(test.input)).equal(test.result);
    });
  });
});
