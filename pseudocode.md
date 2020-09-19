Pseudocode for generator
<!--Criteria Prompts-->
1. var passlength = Prompt for length: 8-128
2. var includeLow = Prompt for lowercase (ok for include, cancel to exclude)
3. var includeUpp = Prompt for uppercase (ok for include, cancel to exclude)
4. var includeNum = Prompt for numeric (ok for include, cancel to exclude)
5. var includeSpec = Prompt for special characters (ok for include, cancel to exclude)

<!--Making Password-->
function generatePassword(length)
 // if (includeUpp = true && password.includes('A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z')) {
  //   console.log("success")
  //   success = true
  // } else {
  //   console.log("failure")
  //   success = false
  // }
  // if (includeUpp = false && password.includes('A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z')) {
  //   console.log("failure")
  //   success = false
  // } else {
  //   console.log("success")
  //   success = true
  // }

  // if (includeNum = true && password.includes('1', '2', '3', '4', '5', '6', '7', '8', '9', '0')) {
  //   console.log("success")
  //   success = true
  // } else {
  //   console.log("failure")
  //   success = false
  // }
  // if (includeNum = false && password.includes('1', '2', '3', '4', '5', '6', '7', '8', '9', '0')) {
  //   console.log("failure")
  //   success = false
  // } else {
  //   console.log("success")
  //   success = true
  // }

  // if (includeSpec = true && password.includes('!', '@', '#', '$', '%', '^', '&', '*', '(', ')')) {
  //   console.log("success")
  //   success = true
  // } else {
  //   console.log("failure")
  //   success = false
  // }
  // if (includeSpec = false && password.includes('!', '@', '#', '$', '%', '^', '&', '*', '(', ')')) {
  //   console.log("failure")
  //   success = false
  // } else {
  //   console.log("success")
  //   success = true
  // } 