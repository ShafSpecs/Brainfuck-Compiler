const fs = require("fs");
const compile = require("./brainfuckCompiler");

const currentDir = process.cwd();

const content = fs.readFileSync(currentDir + "/exports/" + "99_bottles.bf", "utf8");
console.log(compile(content));