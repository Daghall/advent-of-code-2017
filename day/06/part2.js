"use strict";

module.exports = function part2(input) {
  const memoryBanks = input.toString().trim().split("\t").map((i) => parseInt(i, 10));
  const states = new Map();
  let iterations = 0;
  let state = createState(memoryBanks);

  while (!states.has(state)) {
    states.set(state, iterations++);

    const highest = findHighest(memoryBanks);
    redistributeFrom(highest, memoryBanks);
    state = createState(memoryBanks);
  }

  return iterations - states.get(state);
};

function createState(memoryBanks) {
  return memoryBanks.join(",");
}

function findHighest(memoryBanks) {
  let max = 0;
  let highest = 0;

  memoryBanks.forEach((memoryBank, index) => {
    if (memoryBank > max) {
      max = memoryBank;
      highest = index;
    }
  });

  return highest;
}

// Mutates "memoryBanks"
function redistributeFrom(highest, memoryBanks) {
  let data = memoryBanks[highest];
  let index = highest;
  memoryBanks[highest] = 0;

  while (data > 0) {
    index = (index + 1) % memoryBanks.length;
    ++memoryBanks[index];
    --data;
  }
}
