"use strict";

module.exports = function part2(input) {
  const jumps = input
    .toString()
    .trim()
    .split("")
    .map((i) => i.charCodeAt(0))
    .concat([17, 31, 73, 47, 23]);
  const list = Array(256)
    .fill(0)
    .map((item, index) => index);

  calculateHash(list, jumps);

  return printHash(list);
};

function printHash(list) {
  const hash = [];
  for (let i = 0; i < 16; ++i) {
    const block = list.slice(i * 16, (i * 16) + 16);
    hash.push(block.reduce((xored, byte) => {
      return xored ^ byte;
    }));
  }

  return hash.reduce((finalHash, block) => {
    return finalHash + `0${block.toString(16)}`.slice(-2);
  }, "");
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
  let rounds = 64;

  while (rounds-- > 0) {
    jumps.forEach((jump) => {
      if (jump > 1) {
        for (let i = 0; i < jump / 2; ++i) {
          swap(list, (current + i) % length, (current + jump - i - 1) % length);
        }
      }

      current = (current + jump + skip++) % list.length;
    });
  }

  // console.log(list.slice(0, 5));
}

// Mutates list
function swap(list, a, b) {
  if (a === b) return;

  const temp = list[a];
  list[a] = list[b];
  list[b] = temp;
}
