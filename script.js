/* PSUEDO CODE
1) PROMPT the user if they want to generate a password
2) IF yes PROMPT the user to select a password length (min ten max 64) 
3) IF acceptable value entered PROMPT user for to select (yes or no) for the following:
lowercase letters
uppercase letters
special characters
numbers

4)IF the user enters an invalid length or doesn't select any charater types show ALERT

5)store selected answers in variables
6) use a RANDOM function to access the arrays of selected character types and pull out the elected number of items for the password.
7)store the password.
8)RETURN the password via an alert or the html. 
*/





// Array of special characters to be included in password
var specialCharacters = [
    '@',
    '%',
    '+',
    '\\',
    '/',
    "'",
    '!',
    '#',
    '$',
    '^',
    '?',
    ':',
    ',',
    ')',
    '(',
    '}',
    '{',
    ']',
    '[',
    '~',
    '-',
    '_',
    '.'
  ];
  
  // Array of numeric characters to be included in password
  var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  
  // Array of lowercase characters to be included in password
  var lowerCasedCharacters = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
  ];
  
  // Array of uppercase characters to be included in password
  var upperCasedCharacters = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z'
  ];

 /* Variables (store values here) */
var passwordLength = "";
var selectSpecialChar;
var selectNumericChar;
var selectLowerCase;
var selectUpperCase;
  
  // Function to prompt user for password options
  function getPasswordOptions() {
    confirm (" Do you want to generate a password?");
    if (confirm = true) {
        let passwordLength = (prompt ("How long would you like your password to be? (10-64 charachters)", "10"));
        
     while (passwordLength <= 9 || passwordLength >= 65) {
        alert("Your password must be between 10 and 64 characters, please try again!");
         passwordLength = (prompt ("How long would you like your password to be? (10-64 charachters)", "10"));
     }

    let selectSpecialChar = confirm("Click ok to include numeric characters");
    let  selectNumericChar = confirm("Click ok to include numeric characters");
    let selectLowerCase = confirm("Click ok to include lowercase characters");
    let selectUpperCase = confirm("Click ok to include uppercase characters");
        
       while (!selectSpecialChar && !selectNumericChar && !selectLowerCase && !selectUpperCase) {
        alert("You must select at least one character value for your password");

      selectSpecialChar = confirm("Click ok to include special characters");
      selectNumericChar = confirm("Click ok to include numeric characters");
      selectLowerCase = confirm("Click ok to include lowercase characters");
      selectUpperCase = confirm("Click ok to include uppercase characters");
     }

    }
}
  

  
  // Function for getting a random element from an array

  var passwordCharSelection = []

  if (selectSpecialChar === true) {
    passwordCharSelection = passwordCharSelection.concat(specialCharacters)
  }

  if (selectNumericChar === true) {
    passwordCharSelection = passwordCharSelection.concat(numericCharacters)
  }

  if (selectUpperCase === true) {
    passwordCharSelection = passwordCharSelection.concat(upperCasedCharacters)
  }

  if (selectLowerCase === true) {
    passwordCharSelection = passwordCharSelection.concat(lowerCasedCharacters)
  }

  var randomPassword = ""

  function getRandom(arr) { 
    for (var i=0; i < passwordLength; i++) {
        randomPassword = randomPassword + passwordCharSelection[Math.floor(math.rnadom() * passwordCharSelection.length)];
    }
    return randomPassword
  }
  
  // Function to generate password with user input
  function generatePassword() {
  
  }
  
  // Get references to the #generate element
  var generateBtn = document.querySelector('#generate');
  
  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector('#password');
  
    passwordText.value = password;
  }
  
  // Add event listener to generate button
  generateBtn.addEventListener('click', writePassword);
  
  getPasswordOptions()
  getSpecialChar()
  console.log(passwordLength)
  