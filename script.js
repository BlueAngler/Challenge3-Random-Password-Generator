var lowercasechoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercasechoices = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numberchoices = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var specialcharacterschoices = ["%", "#", "@","^", "&", "*", "(", ")", "!"];



// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



//function generatePassword {

//}

//function UserEntry(){
var charLenght = prompt("Choose a password lenght greater than 8 and less than 128 characteres"); 




var lowercase=confirm("include lowercases in password?")
var uppercase=confirm("include uppercases in password?")
var numbers=confrim("include numbers in password?")
var specialscharacters=confirm("include special characters in password? ")