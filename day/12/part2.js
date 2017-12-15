"use strict";

module.exports = function part1(input) {
  const pipes = input
    .toString()
    .trim()
    .split("\n")
    .map((row) => row.split(" <-> ")[1]
      .split(",")
      .map((i) => parseInt(i, 10))
    );

  const groups = [];
  let found = [];
  pipes.forEach((_, index) => {
    if (!found.includes(index)) {
      const connected = [index];
      groups.push(findConnected(pipes, connected, index));
      found = found.concat(connected);
    }
  });

  return groups.length;
};

// Mutates connected
function findConnected(pipes, connected, index) {
  pipes[index]
    .forEach((pipe) => {
      if (!connected.includes(pipe)) {
        connected.push(pipe);
        findConnected(pipes, connected, pipe);
      }
    });

  return connected;
}
