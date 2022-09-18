// Assignment Code
var generateBtn = document.querySelector("#generate");
var choices = ["A", "B", "C"]
var question1 = "password?"
var question2= "lenght between 8 and 128 characters"
var question3= "lower case?"
var question4 = "upper case?"
var question5= "numeric?"
var question6="special characters?"

// Write password to the #password input
function writePassword() {
  // console.log("hi");
  // function quest1() {
  //   window.prompt(question1);
  //   if(question1){
  //   // console.log("good answer to quetsoins1");
  //   }
  // }
  // quest1();

  // function quest2() {
    window.prompt(question2);
    if (question2 < 8) {
      
    window.alert("needs longer");
    }


  // }
  // quest2();

  

  
 
  
 
  
  // var password = generatePassword() 
    
    
  
  // var passwordText = document.querySelector("#password");

  // passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
