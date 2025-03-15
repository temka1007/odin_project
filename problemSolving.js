const palindromes = function (words) {
  let characters = words.toLowerCase().replace(/[^a-z0-9]/gi, "");
  let reversed = characters.split("").reverse().join("");
  return reversed == characters;
};

console.log(palindromes("A car, a man, a maraca."));
