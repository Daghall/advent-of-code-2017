"use strict";

const fs = require("fs");

const dirs = fs.readdirSync("day");

dirs.forEach((dir) => {
  const parts = fs
    .readdirSync(`day/${dir}`)
    .filter((f) => f.endsWith(".js"))
    .map((f) => f.replace(".js", ""));
  const input = fs.readFileSync(`day/${dir}/input`).toString();
  console.log("----------------------"); //eslint-disable-line no-console

  parts.forEach((part) => {
    const module = require(`./day/${dir}/${part}`);
    let fn;

    if (typeof module === "function") {
      fn = module;
    } else {
      fn = module[part];
    }
    console.log("Day %s %s: %s", dir, part, fn(input)); //eslint-disable-line no-console
  });
});
