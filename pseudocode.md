Pseudocode for generator
<!--Criteria Prompts-->
1. var passlength = Prompt for length: 8-128
2. var includeLow = Prompt for lowercase (ok for include, cancel to exclude)
3. var includeUpp = Prompt for uppercase (ok for include, cancel to exclude)
4. var includeNum = Prompt for numeric (ok for include, cancel to exclude)
5. var includeSpec = Prompt for special characters (ok for include, cancel to exclude)

<!--Making Password-->
function generatePassword(length)