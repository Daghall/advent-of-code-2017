"use strict";

function part2(input) {
  const rows = input.toString().trim().split("\n");
  let sum = 0;

  rows.forEach((row) => {
    sum += checkRow(row);
  });

  return sum;
}

function checkRow(row) {
  const digits = row
    .split("\t")
    .map((i) => parseInt(i, 10))
    .sort(sortNumericDescending);

  let digit;

  while (digits) {
    digit = digits.shift();
    const result = digits.filter((d) => digit % d === 0).pop(); // eslint-disable-line no-loop-func
    if (result) {
      return digit / result;
    }
  }

  return 0;
}

function sortNumericDescending(a, b) {
  return (b > a) ? 1 : -1;
}

module.exports = {
  part2,
  checkRow,
  sortNumericDescending,
};
