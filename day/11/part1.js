"use strict";


module.exports = function part1(input) {
  const moves = input
    .toString()
    .trim()
    .split(",");
  const hex = {
    x: 0,
    y: 0,
    z: 0,
  };

  /*
    /  Z  X  \

        Y
        _
  */

  moves.forEach((move) => {
    switch (move) {
      case "n":
        ++hex.y;
        --hex.z;
        break;
      case "s":
        --hex.y;
        ++hex.z;
        break;
      case "ne":
        ++hex.x;
        --hex.z;
        break;
      case "sw":
        --hex.x;
        ++hex.z;
        break;
      case "nw":
        ++hex.y;
        --hex.x;
        break;
      case "se":
        ++hex.x;
        --hex.y;
        break;
    }
  });

  return maxDistance(hex);
};

function maxDistance(hex) {
  const distances = [
    Math.abs(hex.x),
    Math.abs(hex.y),
    Math.abs(hex.z),
  ];

  return distances.reduce((max, distance) => {
    if (distance > max) {
      return distance;
    }

    return max;
  });
}
