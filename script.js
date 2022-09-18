// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerChoices = ["a", "b", "c"]
var upperChoices = ["A", "B", "C"]
var specialChoices = ["%", "$", "!"]
var numericChoices = ["1", "2", "3"]
var question1 = "password?"
var question2= "lenght between 8 and 128 characters"
var question3= "lower case?"
var question4 = "upper case?"
var question5= "numeric?"
var question6="special characters?"
var userChoice= []; 

// Write password to the #password input
function writePassword() {
  // 
    var question1Response=window.confirm(question1);
    if(!question1Response){
      return;
    }
    
  //  

  // function quest2() {
    var question2Response=window.prompt(question2);
    if (question2Response < 8 || question2Response > 128) {
      
    window.alert("passwords needs to be longer than 8 characters or shorter than 128");
    return;
    }else {
      userChoice.push(question2Response); 
      console.log(userChoice); 
    }


    var question3Response=window.confirm(question3);
    if(question3Response){
      
      userChoice.push(lowerChoices);
      console.log("thanks for comfirming lower case");
      console.log(userChoice);
      
    }


    var question4Response=window.confirm(question4);
    if(question4Response){
      console.log("thanks for comfirming upper case")
      userChoice.push(upperChoices);
    }

    
    var question5Response=window.confirm(question5);
    if(question5Response){
      console.log("thanks for choosing numeric")
      userChoice.push(numericChoices);
    }



    
    var question5Response=window.confirm(question5);
    if(question5Response){
      console.log("thanks for comfirming upper case")
      userChoice.push(specialChoices);
    }
    


    //I need to generate a random password lenght that takes in the value of question1response as it's lenght, and randomly selectes characters based of of the updated userChoice array.

   

  

  
 
  
 
  
  // var password = generatePassword() 
    
    
  
  // var passwordText = document.querySelector("#password");

  // passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
