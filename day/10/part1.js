"use strict";

function part1(input) {
  const jumps = input
    .toString()
    .trim()
    .split(",")
    .map((i) => parseInt(i, 10));
  const list = Array(256).fill(0).map((item, index) => index);

  return calculateHash(list, jumps);
}

// Mutates list
function calculateHash(list, jumps) {
  /*
  - Reverse the order of that length of elements in the list,
    starting with the element at the current position.
  - Move the current position forward by that length plus the skip size.
  - Increase the skip size by one.
  */

  const length = list.length;
  let current = 0;
  let skip = 0;

  jumps.forEach((jump) => {
    if (jump > 1) {
      for (let i = 0; i < jump / 2; ++i) {
        swap(list, (current + i) % length, (current + jump - i - 1) % length);
      }
    }

    current = (current + jump + skip++) % list.length;
  });

  return list[0] * list[1];
}

// Mutates list
function swap(list, a, b) {
  if (a === b) return;

  const temp = list[a];
  list[a] = list[b];
  list[b] = temp;
}

module.exports = {
  part1,
  calculateHash,
};
