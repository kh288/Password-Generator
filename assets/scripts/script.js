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

function getUserPassPreference() {
    var input = prompt("Enter your Password preferences!\nType in one string, 'SNUL' or 'NSLU' will include all\nInclude Symbols? 'S' \nInclude Numbers? 'N' \nInclude Uppercase Letters? 'U' \nInclude Lowercase Letters? 'L'");
    input = input.toUpperCase(); // make input uppercase incase they type lowercase

    var symbolsCheck = "🚫";
    var numbersCheck = "🚫";
    var upperCaseCheck = "🚫";
    var lowerCaseCheck = "🚫";

    if (input.includes('S')) {
        includeSymbols = true;
        symbolsCheck = "✅";
    }
    if (input.includes('N')) {
        includeNumbers = true;
        numbersCheck = "✅";
    }
    if (input.includes('U')) {
        includeUpper = true;
        upperCaseCheck = "✅";
    }
    if (input.includes('L')) {
        includeLower = true;
        lowerCaseCheck = "✅";
    }
    alert("Your preferences are:\nSymbols: " + symbolsCheck + ". Numbers: " + numbersCheck + ". Uppercase: " +  upperCaseCheck + ". Lowercase: " + lowerCaseCheck);
}

getUserPassPreference();

console.log("Symbol: " + includeSymbols);
console.log("Numbers: " + includeNumbers);
console.log("Uppercase: " + includeUpper);
console.log("Lowercase: " + includeLower);

// getUserPasswordLength();    // Stores user input in global variable
