"use strict";

const fs = require("fs");

const dirs = fs.readdirSync("day");

dirs.forEach((dir) => {
  const parts = fs.readdirSync(`day/${dir}`).filter((f) => f.endsWith(".js"));
  const input = fs.readFileSync(`day/${dir}/input`).toString();

  parts.forEach((part) => {
    const module = require(`./day/${dir}/${part}`);
    console.log("Day %s %s: %s", dir, part, module(input)); //eslint-disable-line no-console
  });
});
