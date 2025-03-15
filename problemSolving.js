const sumAll = function (min, max) {
  if (!Number.isInteger(min)) return "ERROR";
  if (!Number.isInteger(max)) return "ERROR";
  if (min < 0 || max < 0) return "ERROR";

  let lowerNum;
  let higherNum;

  if (min < max) {
    lowerNum = min;
    higherNum = max;
  } else if (min > max) {
    lowerNum = max;
    higherNum = min;
  }

  let result = 0;
  for (let i = lowerNum; i < higherNum + 1; i++) {
    result += i;
  }
  return result;
};

console.log(sumAll(4, 2));
console.log();
