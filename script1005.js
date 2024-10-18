var input = require("fs").readFileSync("stdin", "utf8");
var valores = input.split("\n");

var a = parseFloat(valores.shift()) * 3.5;
var b = parseFloat(valores.shift()) * 7.5;
var c = (a + b)/11;
console.log("MEDIA = "+c.toFixed(5));