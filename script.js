// Assignment Code
var generateBtn = document.querySelector("#generate");
// Password Generating function
function generatePassword(length) {
  var result = '';
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
// Write password to the #password input
function writePassword() {
  var passLength = prompt("How many characters? (8-128)")
  var includeLow = confirm("Include lowercase? ok for include, cancel to exclude")
  var includeUpp = confirm("Include uppercase? ok for include, cancel to exclude")
  var includeNum = confirm("Include numeric? ok for include, cancel to exclude")
  var includeSpec = confirm("Include special characters? ok for include, cancel to exclude")
  var password = generatePassword(passLength);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
