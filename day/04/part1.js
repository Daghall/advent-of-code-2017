"use strict";

module.exports = function part1(input) {
  const strings = input.toString().split("\n").map((row) => row.split(" "));

  return strings.reduce((matches, string) => {
    return matches + (allUnique(string) ? 1 : 0);
  }, 0);
};

function allUnique(strings) {
  const stringMap = new Map();

  for (const string of strings) {
    if (stringMap.has(string)) {
      return false;
    }

    stringMap.set(string);
  }

  return true;
}
