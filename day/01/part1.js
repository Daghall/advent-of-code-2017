"use strict";

module.exports = function part1(input) {
  const digits = input.toString().trim().split("").map((i) => parseInt(i, 10));
  let prev = digits.slice(-1).pop();
  let sum = 0;

  digits.forEach((digit) => {
    if (digit === prev) {
      sum += digit;
    }
    prev = digit;
  });

  return sum;
};
