// Assignment Code
var generateBtn = document.querySelector("#generate");
var characters = [];
var lowCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var uppCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numCase = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var specCase = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')'];
var includeLow = true;
var includeUpp = true;
var includeNum = true;
var includeSpec = true;

//Function for adding character types to pool
function addCharTypes() {
  if (includeLow == true) {
    characters = characters.concat(lowCase);
  }
  if (includeUpp == true) {
    characters = characters.concat(uppCase);
  }
  if (includeNum == true) {
    characters = characters.concat(numCase);
  }
  if (includeSpec == true) {
    characters = characters.concat(specCase);
  }
}
// Password Generating function
function generatePassword(length) {
  var result = '';
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters[(Math.floor(Math.random() * charactersLength))];
  }
  console.log(result);
  return result;
}

// Function for checking if lowercase is present
function lowCheck(value) {
  for (var i = 0; i < lowCase.length; i++) {
    if (value.indexOf(lowCase[i]) == -1) {
      return true;
    } else {
      return false;
    }
  }
}

// Write password to the #password input
function writePassword() {
  var passLength = prompt("How many characters? (8-128)");
  if (passLength < 8 || passLength > 128) {
    passLength = prompt("Please enter a valid character amount: (8-128)");
  }
  includeLow = confirm("Include lowercase? ok for include, cancel to exclude");
  includeUpp = confirm("Include uppercase? ok for include, cancel to exclude");
  includeNum = confirm("Include numeric? ok for include, cancel to exclude");
  includeSpec = confirm("Include special characters? ok for include, cancel to exclude");
  addCharTypes();
  var password = generatePassword(passLength);

  var passwordText = document.querySelector("#password");
  passwordText.value = password;

  console.log(lowCheck(password));
  console.log(characters);
  console.log(password);
  characters = [];

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
