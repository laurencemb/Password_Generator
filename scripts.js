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
  
  // Function to prompt user for password options
  function getPasswordOptions() {
    // Prompts the user for the desired password length, which must be between 10 and 64 characters.
    let length = prompt("How many characters would you like your password to be? (between 10 and 64)");
    while (length < 10 || length > 64) {
      alert("Password length must be between 10 and 64 characters. Please try again.");
      length = prompt("How many characters would you like your password to be? (between 10 and 64)");
    }
    // Prompts the user to confirm the inclusion of lowercase characters, uppercase characters, numeric characters, and special characters.
    let specialChar = confirm("Click OK to include special characters.");
    let numericChar = confirm("Click OK to include numeric characters.");
    let lowerChar = confirm("Click OK to include lowercase characters.");
    let upperChar = confirm("Click OK to include uppercase characters.");
    // Make sure at least one character type is selected
    while (!specialChar && !numericChar && !lowerChar && !upperChar) {
      alert("You must select at least one character type. Please try again.");
      specialChar = confirm("Click OK to include special characters.");
      numericChar = confirm("Click OK to include numeric characters.");
      lowerChar = confirm("Click OK to include lowercase characters.");
      upperChar = confirm("Click OK to include uppercase characters.");
    }
    // returns an object for `options` in `generatePassword()` so that it puts together the user's options.
    return {
      length: length,
      specialChar: specialChar,
      numericChar: numericChar,
      lowerChar: lowerChar,
      upperChar: upperChar
    }
  }
  
  // Function for getting a random element from an array
  function getRandom(arr) {
    let randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
  }
  
  // Function to generate password with user input
  function generatePassword() {
    // Creates an empty array for the password
    let result = [];
    // Calls the `getPasswordOptions()` function to get the user's desired options
    let options = getPasswordOptions();
    // Collects groups of characters based on the user's input
    let charBox = []; // this is a box of all characters matching user's options
    // puts all chosen characters into charBox
    if (options.specialChar) {
      charBox = charBox.concat(specialCharacters);
    }
    if (options.numericChar) {
      charBox = charBox.concat(numericCharacters);
    }
    if (options.lowerChar) {
      charBox = charBox.concat(lowerCasedCharacters);
    }
    if (options.upperChar) {
      charBox = charBox.concat(upperCasedCharacters);
    }
    // generates an array for random password
    for (var i = 0; i < options.length; i++) {
      result.push(getRandom(charBox));
    }
    // turns the array into a string
    let finalPassword = result.join('');
  
    return finalPassword
    
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