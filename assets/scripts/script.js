// make an array or string for each “criteria” and concatenate them together.
// var lowerCaseLetters
// var upperCaseLetters
// var Symbols
// var Numbers
// Then in the code be like “random number between 1 - 26" (letters alphabet)
// then store those into another temporary place, and once i have them for each individual var group, concatenate them in a random fashion

// Could put ALL of the symbols, letters, numbers, in 1 big string, and random number generate a variable[x] to find each one that will be randomly selected

var allUpperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var allLowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var symbols = "!#$%&'()*+,-./:;<=>?@[\\]^_`{|}~\"";

console.log("Upper case Character Lengh: " + allUpperLetters.length);
console.log("Lower case Character Lengh: " + allLowerCaseLetters.length);
console.log("Number Character Lengh: " + numbers.length);
console.log("Symbols Character Lengh: " + symbols.length);

console.log("Total number of Password character combinations: " + (allLowerCaseLetters.length + allLowerCaseLetters.length + numbers.length + symbols.length));
console.log("List of all Characters: " + allLowerCaseLetters + allUpperLetters + numbers + symbols);

