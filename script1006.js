var input = require("fs").readFileSync("stdin", "utf8");
var valores = input.split("\n");

var a = parseFloat(valores.shift()) * 2;
var b = parseFloat(valores.shift()) * 3;
var c = parseFloat(valores.shift()) * 5;
var d = (a+b+c)/10;

console.log("MEDIA = "+d.toFixed(1));