const util = require("./myUtils.js");

const reader = require('readline-sync');

console.log(util.arrayElements(util.isPrimeForRange(reader.questionInt("Input first number "), reader.questionInt("Input second number "))));




