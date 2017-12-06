"use strict";

/*
 37  36  35  34  33  32  31
 38  17  16  15  14  13  30
 39  18   5   4   3  12  29
 40  19   6   1   2  11  28
 41  20   7   8   9  10  27
 42  21  22  23  24  25  26
 42  44  45  46  47  48  49
*/

function part1(input) {
  const goal = parseInt(input.toString(), 10);

  if (goal === 1) {
    return 0;
  }

  const quad = findQuad(goal);

  return quad + distanceToMiddle(goal, quad);
}

function findQuad(digit) {
  const sqrt = Math.sqrt(digit);
  let quad = Math.ceil(sqrt);

  if (quad % 2 === 0) {
    quad += 1;
  }

  return Math.floor(quad / 2);
}

function distanceToMiddle(digit, _quad) {
  const quad = _quad || findQuad(digit);
  const largestSquare = (quad * 2) + 1;
  const mod = largestSquare - 1;
  const halfMod = mod / 2;
  const offset = mod - 1;

  return Math.abs((digit + offset) % mod - halfMod);
}

module.exports = {
  part1,
  findQuad,
  distanceToMiddle,
};
