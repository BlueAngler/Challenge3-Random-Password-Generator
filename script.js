var lowercasechoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercasechoices = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numberchoices = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var specialcharacterschoices = ["%", "#", "@","^", "&", "*", "(", ")", "!"];
var choices = []


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
 


//prompts user will go through when generating password
function userchoices(){
  var Lenghtpassword = prompt("Choose a password lenght greater than 8 and less than 128 characteres");
  var lowercase=confirm("include lowercases in password?")
    if(lowercase) {choices=choices.concat(lowercasechoices)}
  var uppercase=confirm("include uppercases in password?")
    if(uppercase) {choices=choices.concat(uppercasechoices)}
  var numbers=confrim("include numbers in password?")
  if(numbers){choices=choices.concat(numberchoices)}
  var specialscharacters=confirm("include special characters in password? ")
  if(specialcharacters) {choices=choices.concat(specialcharacterschoices)}
}
//called function to see if prompts work
userchoices()

