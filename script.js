"use strict";

// even numbers

for (let i = 1; i < 11; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

// replace "for" with "while"

for (let i = 0; i < 3; i++) {
  console.log(`number ${i}!`, "for loop");
}

let i = 0;
while (i < 3) {
  console.log(`number ${i}!`, "while loop");
  i++;
}

// repeat until the input is correct

let condition = false;

while (condition) {
  const answer = Number(prompt("Write number higher than 100!"));
  if (answer >= 100) {
    alert("good job!");
    condition = false;
  } else {
    alert("higher than 100!!!");
  }
}

console.log("-------");
// Outputs prime numbers

const target = Number(prompt("Enter the range!"));

for (let i = 1; i < target; i++) {
  if (i == 1) {
    console.log(1);
    continue;
  }
  for (let a = 2; a < i; a++) {
    if (i % a == 0) {
      continue;
    }
  }
  console.log(i);
}
