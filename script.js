"use strict";

// Filter range

function filterRange(arr, min, max) {
  return arr.filter((num) => num >= min && num <= max);
}

let arr = [5, 3, 8, 1, 6, 0, -1, 2, 1, 5];

let filtered = filterRange(arr, 1, 4);

console.log(filtered);
console.log(arr);
