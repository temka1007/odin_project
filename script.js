"use strict";

// copy and sort array

function copySorted(arr) {
  return [...arr].sort();
}

let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

console.log(arr);
console.log(sorted);
