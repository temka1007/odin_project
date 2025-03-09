"use strict";

function camelize(str) {
  let arr = str.split("-");
  if (str.charAt(0) == "-") {
    return arr
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join("");
  } else {
    return arr
      .map((word, index) =>
        index == 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)
      )
      .join("");
  }
}
console.log(camelize("-webkit-transition"));
