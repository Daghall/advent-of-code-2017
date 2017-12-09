"use strict";

function part2(input) {
  const root = getRoot(input);

  try {
    checkWeight(root);
  } catch (oddWeight) {
    return oddWeight;
  }
}

// Mutates node
function checkWeight(node) {
  if (node.children) {
    let sum = node.weight;

    node.children.forEach((child) => {
      const weight = checkWeight(child);
      sum += weight;

      child.childWeight = weight;
    });

    checkChildren(node);

    return sum;
  }

  return node.weight;
}

function checkChildren(node) {
  if (node.children.length < 3) return;

  const children = node.children;

  // On of the two first is odd
  if (children[0].childWeight !== children[1].childWeight) {
    // First is odd
    if (children[0].childWeight !== children[2].childWeight) {
      throw children[1].childWeight - children[0].childWeight + children[0].weight;
    }
    // Second is odd
    throw children[0].childWeight - children[1].childWeight + children[1].weight;
  }

  // First and second are OK, check rest
  const okWeight = children[0].childWeight;
  children.slice(2).forEach((child) => {
    if (child.childWeight !== okWeight) {
      throw okWeight - child.childWeight + child.weight;
    }
  });
}


function getRoot(input) {
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
      return parent;
    }
  }
}

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

module.exports = {
  part2,
  getRoot,
  checkChildren,
};
