// make an array or string for each “criteria” and concatenate them together.
// var lowerCaseLetters
// var upperCaseLetters
// var Symbols
// var Numbers
// Then in the code be like “random number between 1 - 26" (letters alphabet)
// then store those into another temporary place, and once i have them for each individual var group, concatenate them in a random fashion

// Could put ALL of the symbols, letters, numbers, in 1 big string, and random number generate a variable[x] to find each one that will be randomly selected

// console.log("Upper case Character Lengh: " + allUpperLetters.length);
// console.log("Lower case Character Lengh: " + allLowerCaseLetters.length);
// console.log("Number Character Lengh: " + numbers.length);
// console.log("Symbols Character Lengh: " + symbols.length);

// console.log("Total number of Password character combinations: " + (allLowerCaseLetters.length + allLowerCaseLetters.length + numbers.length + symbols.length));
// console.log("List of all Characters: " + allLowerCaseLetters + allUpperLetters + numbers + symbols);


// Would like to get this version to work instead
// function getUserPasswordLength(input) {
//     if (input >= 8 && input <= 128) {
//         return input;
//     } else {
//         getUserPasswordLength(prompt("Invalid Input, Try a number between 8 - 128"));
//     }
// }

// console.log(getUserPasswordLength(prompt("Invalid Input, Try a number between 8 - 128")));


var allUpperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";     // 26
var allLowerCaseLetters = "abcdefghijklmnopqrstuvwxyz"; // 26
var numbers = "0123456789";                             // 10
var symbols = "!#$%&'()*+,-./:;<=>?@[\\]^_`{|}~\"";     // 32

// Variables determined by the user
var userPassLength = 0;     // Default to 0

var includeSymbols = false;
var includeNumbers = false;
var includeUpper   = false;
var includeLower   = false;

// Get user Input on password length, then change global variable
function getUserPasswordLength() {
    var input = prompt("Enter a number between 8 - 128 to be generated");
    if (input >= 8 && input <= 128) {
        console.log("Valid: " + input);
        userPassLength = input;
        return;
    }
    console.log("Invalid: " + input);
    alert("Invalid input or number, try a number between 8 - 128");
    getUserPasswordLength();
}

getUserPasswordLength();    // Stores user input in global variable
