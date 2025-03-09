"use strict";

//Filter range "in place"

function filterRangeInPlace(arr, min, max) {
  const filtered = arr.filter((num) => num >= min && num <= max);
  console.log(filtered);

  arr.length = 0;

  arr.push(...filtered);
}

let arrNumbers = [5, 3, 8, 1, 6, 0, -1, 2, 1, 5];

filterRangeInPlace(arrNumbers, 1, 4);

console.log(arrNumbers);
