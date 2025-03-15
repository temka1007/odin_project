const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
};

const multiply = function (numbers) {
  return numbers.reduce((acc, num) => acc * num, 1);
};

const power = function (num, power) {
  return num ** power;
};

const factorial = function (num) {
  let accumulation = 1;
  for (let i = 1; i < num + 1; i++) {
    accumulation = accumulation * i;
  }
  return accumulation;
};
