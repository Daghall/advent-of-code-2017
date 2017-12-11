"use strict";

class Register {
  constructor(instructions) {
    this.instructions = instructions;
    this.registers = new Map();
  }

  run() {
    this.instructions.forEach((instruction) => {
      if (this.evaluateCondition(instruction.condition)) {
        this.performInstruction(instruction.operation);
      }
    });
  }

  getRegister(name) {
    if (this.registers.has(name)) {
      return this.registers.get(name);
    }

    this.registers.set(name, 0);
    return 0;
  }

  evaluateCondition(condition) {
    switch (condition.operation) {
      case ">":
        return this.getRegister(condition.register) > condition.value;
      case "<":
        return this.getRegister(condition.register) < condition.value;
      case ">=":
        return this.getRegister(condition.register) >= condition.value;
      case "<=":
        return this.getRegister(condition.register) <= condition.value;
      case "==":
        return this.getRegister(condition.register) === condition.value;
      case "!=":
        return this.getRegister(condition.register) !== condition.value;
    }

    throw new Error(`Unhandled operation: ${condition.operation}`);
  }

  performInstruction(operation) {
    const currentValue = this.getRegister(operation.register);

    if (operation.operation === "inc") {
      this.registers.set(operation.register, currentValue + operation.value);
    } else {
      this.registers.set(operation.register, currentValue - operation.value);
    }
  }

  result() {
    let max = 0;

    this.registers.forEach((value) => {
      if (value > max) {
        max = value;
      }
    });

    return max;
  }
}

function part1(input) {
  const instructions = input
    .toString()
    .trim()
    .split("\n")
    .map(mapInstructions);


  const register = new Register(instructions);
  register.run();
  return register.result();
}

// b inc 5 if a > 1
function mapInstructions(string) {
  const [operation, condition] = string
    .split(" if ")
    .map((i) => i.split(" "));

  return {
    operation: {
      register: operation.shift(),
      operation: operation.shift(),
      value: parseInt(operation.shift(), 10),
    },
    condition: {
      register: condition.shift(),
      operation: condition.shift(),
      value: parseInt(condition.shift(), 10),
    },
  };
}


module.exports = {
  part1,
  mapInstructions,
  Register,
};
