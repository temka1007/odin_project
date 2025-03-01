"use strict";

let arr = ["I", "am", "studying", "in", "the", "library"];

// arr.splice(start[, deleteCount, elem1, ..., elemN])

arr.splice(arr.length, 0, "right", "know");

console.log(arr);

console.log(arr.slice(3, 5));
