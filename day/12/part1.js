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

  const connected = [0];
  findConnected(pipes, connected, 0);

  return connected.length;
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
