"use strict";

module.exports = function part2(input) {
  const digits = input.toString().trim().split("").map((i) => parseInt(i, 10));
  const offset = digits.length / 2;
  let sum = 0;

  digits.forEach((digit, index) => {
    if (digit === digits[(index + offset) % digits.length]) {
      sum += digit;
    }
  });

  return sum;
};
