"use strict";

module.exports = function part2(input) {
  const stream = input.toString().trim();

  return parse(stream).garbageCollected;
};

function parse(stream) {
  const result = {
    score: 0,
    groups: 0,
    garbageCollected: 0,
  };
  let eatGarbage = false;
  let level = 0;

  for (let i = 0; i < stream.length; ++i) {
    const char = stream[i];

    if (eatGarbage) {
      switch (char) {
        case "!":
          ++i;
          break;
        case ">":
          eatGarbage = false;
          break;
        default:
          ++result.garbageCollected;
          break;
      }

      continue;
    }

    switch (char) {
      case "<":
        eatGarbage = true;
        break;
      case "{":
        result.score += ++level;
        ++result.groups;
        break;
      case "}":
        --level;
        break;
      case "!":
        ++i;
        break;
    }
  }

  return result;
}
