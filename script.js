const fibonacci = function (target) {
  function sum(arr) {
    return arr.reduce((acc, num) => acc + num, 0);
  }
  let store = [];
  for (let i = 0; i < target; i++) {
    store.push(sum(store));
  }
  return sum(store);
};

console.log(fibonacci(1));
