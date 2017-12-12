"use strict";

function part1(input) {
  const stream = input.toString().trim();

  return parse(stream).score;
}

function parse(stream) {
  const result = {
    score: 0,
    groups: 0,
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

module.exports = {
  part1,
  parse,
};
