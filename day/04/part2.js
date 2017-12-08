"use strict";

module.exports = function part1(input) {
  const strings = input.toString().split("\n").map((row) => row.split(" "));

  return strings.reduce((matches, string) => {
    return matches + (allUnique(string) ? 1 : 0);
  }, 0);
};

function allUnique(strings) {
  const stringMap = new Map();

  for (let string of strings) {
    string = string.split("").sort().join("");
    if (stringMap.has(string)) {
      return false;
    }

    stringMap.set(string);
  }

  return true;
}
