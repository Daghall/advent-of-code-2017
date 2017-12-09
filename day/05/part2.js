"use strict";

function part2(input) {
  return jumpAround(input).jumps;
}

function endState(input) {
  return jumpAround(input).jumpList;
}

function jumpAround(input) {
  const jumpList = input.toString().trim().split("\n").map((i) => parseInt(i, 10));
  let current = 0;
  let prev = 0;
  let jumps = 0;

  while (current >= 0 && current < jumpList.length) {
    const jump = jumpList[current];
    prev = current;
    current += jump;
    ++jumps;

    if (jump > 2) {
      --jumpList[prev];
    } else {
      ++jumpList[prev];
    }
  }

  return {
    jumps,
    jumpList,
  };
}

module.exports = {
  part2,
  endState,
};
