var input = require("fs").readFileSync("stdin", "utf8");
var valores = input.split("\n");

var n = 3.14159;
var a = valores.shift();
var raio = a * a;
console.log("A="+(n*raio).toFixed(4));

