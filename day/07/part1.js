"use strict";

module.exports = function part1(input) {
  const orphans = input
    .toString()
    .trim()
    .split("\n")
    .map(createProgram);

  const parents = orphans.filter((orphan) => {
    return orphan.hasOwnProperty("children");
  }).map((parent) => {
    parent.children = parent.children.map((child) => {
      return orphans.find((o) => o.name === child);
    });

    return parent;
  });

  const children = parents.reduce((allChildren, parent) => {
    return allChildren.concat(...parent.children);
  }, []);

  while (parents.length) {
    const parent = parents.pop();

    if (!children.includes(parent)) {
      return parent.name;
    }
  }
};

// fwft (72) -> ktlj, cntj, xhth
function createProgram(string) {
  const program = {};

  if (string.includes("->")) {
    const [nameAndWeight, children] = string.split(" -> ");
    string = nameAndWeight;
    program.children = [];

    children.split(", ").forEach((child) => {
      program.children.push(child);
    });
  }

  const [name, weight] = string.split(" ");
  program.name = name;
  program.weight = parseInt(weight.slice(1), 10);

  return program;
}
