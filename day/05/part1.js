"use strict";

function part1(input) {
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
    prev = current;
    current += jumpList[current];
    ++jumpList[prev];
    ++jumps;
  }

  return {
    jumps,
    jumpList,
  };
}

module.exports = {
  part1,
  endState,
};
