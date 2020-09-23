// Assignment Code
var generateBtn = document.querySelector("#generate");
var characters = [];
var lowCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var uppCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numCase = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var specCase = ['!', '@', '#', '$', '%', '^', '&'];
var includeLow = true;
var includeUpp = true;
var includeNum = true;
var includeSpec = true;
var password;

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

// LowerCaseTest- is there one in this password? 
function lowTest(password) {
  if (new RegExp(lowCase.join("|")).test(password)) {
    console.log("There are lower case letters in '" + password + "'");
  } else {
    console.log("There are no lowercase letters in '" + password + "'");
  }
}
// UpperCaseTest- is there one in this password? 
function uppTest(password) {
  if (new RegExp(uppCase.join("|")).test(password)) {
    console.log("There are upper case letters in '" + password + "'");
  } else {
    console.log("There are no upper case letters in '" + password + "'");
  }
}
// NumericCaseTest- is there one in this password? 
function numTest(password) {
  if (new RegExp(numCase.join("|")).test(password)) {
    console.log("There are numeric characters in '" + password + "'");
  } else {
    console.log("There are no numeric  characters in '" + password + "'");
  }
}
// SpecialCaseTest- is there one in this password? 
function specTest(password) {
  for (let i = 0; i < password.length; i++) {
    if (includeSpec) {
      if (specCase.includes(password.charAt(i))) {
        console.log("There are special characters in '" + password + "'");
      }
    } else {
      console.log("There are no special characters in '" + password + "'");
    }
    }
  }
  // if (new RegExp(specCase.join("|")).test(password)) {
  //   console.log("There are special characters in '" + password + "'");
  // } else {
  //   console.log("There are no special characters in '" + password + "'");
  // }

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

  //Testing for all 4 cases 
  lowTest(password);
  uppTest(password);
  numTest(password);
  specTest(password);

  var passwordText = document.querySelector("#password");
  passwordText.value = password;

  characters = []
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
