Pseudocode for generator
<!--Criteria Prompts-->
1. var passlength = Prompt for length: 8-128
2. var includeLow = Prompt for lowercase (ok for include, cancel to exclude)
3. var includeUpp = Prompt for uppercase (ok for include, cancel to exclude)
4. var includeNum = Prompt for numeric (ok for include, cancel to exclude)
5. var includeSpec = Prompt for special characters (ok for include, cancel to exclude)

<!--Testing for presence of type-->

If includeLow is true, then check every character in the string to see is any character from the array[lowCase] is there:

    function lowCheck(password) {
    for (var i = 0; i < lowCase.length; i++) {
    if (password.indexOf(lowCase[i]) > -1) {
      return true;
      console.log(true);
    } else {
      return false;
      console.log(false);
    }
  }
}
}