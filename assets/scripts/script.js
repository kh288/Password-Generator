// make an array or string for each “criteria” and concatenate them together.
// var lowerCaseLetters
// var upperCaseLetters
// var Symbols
// var Numbers
// Then in the code be like “random number between 1 - 26" (letters alphabet)
// then store those into another temporary place, and once i have them for each individual var group, concatenate them in a random fashion

// Could put ALL of the symbols, letters, numbers, in 1 big string, and random number generate a variable[x] to find each one that will be randomly selected

var buttonEL = document.querySelector("#generate");

// Quantity of each character type: 
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";//------------26.  0 - 26 
var lower = "abcdefghijklmnopqrstuvwxyz";//------------26. 27 - 52
var numbers = "0123456789"; //-------------------------10. 53 - 63
var symbols = "!#$%&'()*+,-./:;<=>?@[\\]^_`{|}~\""; //-32. 64 - 95

// Variables determined by the user
var passLength = 0;     // Default to 0

var includeSymbols = false;
var includeNumbers = false;
var includeUpper   = false;
var includeLower   = false;

// Get user Input on password length, then change global variable
function getUserPasswordLength() {
    var input = prompt("Enter a number between 8 - 128 to be generated");
    if (input >= 8 && input <= 128) {
        console.log("Valid: " + input);
        passLength = input;
        document.getElementById("pass-length").innerHTML = "Password Length: " + input;
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
    console.log("Symbol: " + includeSymbols);
    console.log("Numbers: " + includeNumbers);
    console.log("Uppercase: " + includeUpper);
    console.log("Lowercase: " + includeLower);

    document.getElementById("pref").innerHTML = "Your preferences are:\nSymbols: " + symbolsCheck + " Numbers: " + numbersCheck + " Uppercase: " +  upperCaseCheck + " Lowercase: " + lowerCaseCheck;
    alert("Your preferences are:\nSymbols: " + symbolsCheck + " Numbers: " + numbersCheck + " Uppercase: " +  upperCaseCheck + " Lowercase: " + lowerCaseCheck);

    if (symbolsCheck === "🚫" &&
        upperCaseCheck === "🚫" &&
        lowerCaseCheck === "🚫" &&
        numbersCheck === "🚫") {
        alert("Can't generate password with no character types selected, try again");
        getUserPassPreference();
    }
}

// Take a password length, and character set, then spit out a random string of that password type;
function generateAlg(length, passtype) {
    var password = "";
    for (var i = 0; i < length; i++) {
        password += passtype[Math.floor(Math.random() * (passtype.length))];
    }
    return password;
}
        
// takes input, and returns scrambled result
function scramble(input) {
    var scrambled = '', rand;

    while (input.length > 1) {
        rand = Math.floor(Math.random() * input.length); 
        scrambled += input.charAt(rand);

        if (rand == 0) {
            input = input.substr(rand + 1);
        } else if (rand == (input.length - 1)) {
            input = input.substring(0, input.length - 1);
        } else {
            input = input.substring(0, rand) + input.substring(rand + 1);
        }
    }
    scrambled += input;
    return scrambled;
}

function generatePassword(event) {
    // if include symbols, num, upper, lower are enabled, 25% of each.
    // 1/3 of each if 1 isnt selected
    // 1/2 of each if 2 isnt selected
    // Take userPassLength, then divide into equal parts depending on preferences
    var password = "";

    // set variables back to defaults when ran again;
    passLength = 0;
    includeSymbols = false;
    includeNumbers = false;
    includeUpper   = false;
    includeLower   = false;

    getUserPassPreference(); // Get user password preference and store them into global variables
    getUserPasswordLength();
    event.preventDefault();
    
    // Check which preferences they have and generate accordingly.

    //includes all: 4ths
    if (includeLower && includeNumbers && includeSymbols && includeUpper) {
        password += generateAlg((passLength / 4), lower);
        password += generateAlg((passLength / 4), numbers);
        password += generateAlg((passLength / 4), symbols);
        password += generateAlg((passLength / 4), upper);
        
        password = scramble(password);
        console.log(password);
        document.getElementById("output").innerHTML = password;
        return;
    }

    // divided by 3rds
    if (includeLower && includeNumbers && includeSymbols && includeUpper === false) {
        password += generateAlg((passLength / 3), lower);
        password += generateAlg((passLength / 3), numbers);
        password += generateAlg((passLength / 3), symbols);

        password = scramble(password);
        console.log(password);
        document.getElementById("output").innerHTML = password;
        return;
    }
    if (includeLower && includeNumbers && includeSymbols === false && includeUpper) {
        password += generateAlg((passLength / 3), lower);
        password += generateAlg((passLength / 3), numbers);
        password += generateAlg((passLength / 3), upper);

        password = scramble(password);
        console.log(password);
        document.getElementById("output").innerHTML = password;
        return;
    }
    if (includeLower && includeNumbers === false && includeSymbols && includeUpper) {
        password += generateAlg((passLength / 3), lower);
        password += generateAlg((passLength / 3), symbols);
        password += generateAlg((passLength / 3), upper);

        password = scramble(password);
        console.log(password);
        document.getElementById("output").innerHTML = password;
        return;
    }
    if (includeLower === false && includeNumbers && includeSymbols && includeUpper) {
        password += generateAlg((passLength / 3), numbers);
        password += generateAlg((passLength / 3), symbols);
        password += generateAlg((passLength / 3), upper);

        password = scramble(password);
        console.log(password);
        document.getElementById("output").innerHTML = password;
        return;
    }

    //divided by 2s
    if (includeLower && includeUpper) {
        password += generateAlg((passLength / 2), lower);
        password += generateAlg((passLength / 2), upper);

        password = scramble(password);
        console.log(password);
        document.getElementById("output").innerHTML = password;
        return;
    }
    if (includeLower && includeSymbols) {
        password += generateAlg((passLength / 2), lower);
        password += generateAlg((passLength / 2), symbols);

        password = scramble(password);
        console.log(password);
        document.getElementById("output").innerHTML = password;
        return;
    }
    if (includeLower && includeNumbers) {
        password += generateAlg((passLength / 2), lower);
        password += generateAlg((passLength / 2), numbers);

        password = scramble(password);
        console.log(password);
        document.getElementById("output").innerHTML = password;
        return;
    }
    if (includeUpper && includeNumbers) {
        password += generateAlg((passLength / 2), upper);
        password += generateAlg((passLength / 2), numbers);

        password = scramble(password);
        console.log(password);
        document.getElementById("output").innerHTML = password;
        return;
    }
    if (includeUpper && includeSymbols) {
        password += generateAlg((passLength / 2), upper);
        password += generateAlg((passLength / 2), symbols);

        password = scramble(password);
        console.log(password);
        document.getElementById("output").innerHTML = password;
        return;
    }
    if (includeNumbers && includeSymbols) {
        password += generateAlg((passLength / 2), numbers);
        password += generateAlg((passLength / 2), symbols);

        password = scramble(password);
        console.log(password);
        document.getElementById("output").innerHTML = password;
        return;
    }

    // whole strings
    if (includeLower) {
        password += generateAlg((passLength), lower);

        password = scramble(password);
        console.log(password);
        document.getElementById("output").innerHTML = password;
        return;
    }
    if (includeUpper) {
        password += generateAlg((passLength), upper);

        password = scramble(password);
        console.log(password);
        document.getElementById("output").innerHTML = password;
        return;
    }
    if (includeNumbers) {
        password += generateAlg((passLength), numbers);

        password = scramble(password);
        console.log(password);
        document.getElementById("output").innerHTML = password;
        return;
    }
    if (includeSymbols) {
        password += generateAlg((passLength), symbols);

        password = scramble(password);
        console.log(password);
        document.getElementById("output").innerHTML = password;
        return;
    }
}

buttonEL.addEventListener("click", generatePassword);