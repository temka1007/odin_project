"use strict";

const output = document.querySelector(".output");

for (let i = 10; i >= 0; i--) {
  setTimeout(() => {
    if (i == 0) {
      const blastOff = document.createElement("p");
      blastOff.textContent = "Blast Off !!!";
      output.appendChild(blastOff);
    } else {
      const countdown = document.createElement("p");
      countdown.textContent = `Countdown ${i}`;
      output.appendChild(countdown);
    }
  }, (10 - i) * 1000);
}
