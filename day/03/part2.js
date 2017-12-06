"use strict";

/*
  147  142  133  122   59
  304    5    4    2   57
  330   10    1    1   54
  351   11   23   25   26
  362  747  806--->   ...
*/

const directions = {
  RIGHT: "RIGHT",
  UP: "UP",
  LEFT: "LEFT",
  DOWN: "DOWN",
};

class Spiral {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.height = 1;
    this.width = 1;
    this.direction = directions.RIGHT;
    this.list = [
      createItem(0, 0, 1)
    ];
  }

  travel() {
    switch (this.direction) {
      case directions.RIGHT:
        this.x += 1;
        break;
      case directions.UP:
        this.y += 1;
        break;
      case directions.LEFT:
        this.x -= 1;
        break;
      case directions.DOWN:
        this.y -= 1;
        break;
    }
  }

  updateBounds() {
    switch (this.direction) {
      case directions.LEFT:
      case directions.RIGHT:
        if (Math.abs(this.x) * 2 + 1 > this.width) {
          ++this.width;
          this.changeDirection();
        }
        break;
      case directions.UP:
      case directions.DOWN:
        if (Math.abs(this.y) * 2 + 1 > this.height) {
          ++this.height;
          this.changeDirection();
        }
    }
  }

  changeDirection() {
    switch (this.direction) {
      case directions.RIGHT:
        this.direction = directions.UP;
        break;
      case directions.UP:
        this.direction = directions.LEFT;
        break;
      case directions.LEFT:
        this.direction = directions.DOWN;
        break;
      case directions.DOWN:
        this.direction = directions.RIGHT;
        break;
    }
  }
}

module.exports = function part2(input) {
  const goal = parseInt(input.toString(), 10);
  const spiral = new Spiral();

  let current = spiral.list[0];

  while (current.value <= goal) {
    spiral.updateBounds();
    spiral.travel();
    current = newItem(spiral);
    spiral.list.push(current);
  }

  return current.value;
};

function createItem(x, y, value) {
  return {
    x: x,
    y: y,
    value: value,
  };
}

function newItem(spiral) {
  const around = [-1, 0, 1];
  let sum = 0;

  around.forEach((offsetX) => {
    around.forEach((offsetY) => {
      sum += atPosition(spiral.x + offsetX, spiral.y + offsetY, spiral.list);
    });
  });

  return createItem(spiral.x, spiral.y, sum);
}

function atPosition(x, y, list) {
  const found = list.find((item) => {
    return item.x === x && item.y === y;
  });

  return found && found.value || 0;
}
