"use strict";

function part1(input) {
  const rows = input.toString().trim().split("\n");
  let sum = 0;

  rows.forEach((row) => {
    sum += checkRow(row);
  });

  return sum;
}

function checkRow(row) {
  const digits = row.split("\t").map((i) => parseInt(i, 10));
  let min = Number.MAX_SAFE_INTEGER;
  let max = 0;

  digits.forEach((digit) => {
    if (digit < min) {
      min = digit;
    }
    if (digit > max) {
      max = digit;
    }
  });

  return max - min;
}

module.exports = {
  part1,
  checkRow,
};
