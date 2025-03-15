const fibonacci = function (target) {
  function nextFibonacci(numbers) {
    if (numbers.length < 2) {
      return 1;
    } else {
      return store.at(-1) + store.at(-2);
    }
  }
  let store = [];
  for (let i = 0; i < target; i++) {
    store.push(nextFibonacci(store));
  }
  console.log(store);
  return store.at(-1);
};

console.log(fibonacci(6));
