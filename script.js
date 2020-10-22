// Assignment code here

//criteria variables
var lower ="abcdefghijklmnopqrstuvwxyz"
var upper ="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var number ="0123456789"
var special =" !#$%&'()*+,-./:;<=>?@][\^_`{|}~\""
var options = ""
var password = ""



//When Button is clicked

function generatePassword() {

    //Reset password and character options
    password = ""
    options = ""

    //Password Length
    var confirmLength = prompt("How many characters? (choose between 8 and 128)");

      if (confirmLength >7 && confirmLength <128) {

        //Lower Case?
        var confirmLower = confirm("Include Lowercase? (Press OK for yes, or Cancel for no)");
          if(confirmLower) {
            options = lower;
          }
        //Upper Case?
        var confirmUpper = confirm("Include Uppercase? (Press OK for yes, or Cancel for no)");
          if(confirmUpper) {
            options = options + upper;
          }

        //Numbers?
        var confirmNumber = confirm("Include Numbers? (Press OK for yes, or Cancel for no)");
          if(confirmNumber) {
            options = options + number;
        }

        //Special?
          var confirmSpecial = confirm("Include Special Characters? (Press OK for yes, or Cancel for no)");
          if(confirmSpecial) {
            options = options + special;
        }
        
        //Password Length
        var passLength = confirmLength;

       //Generate Random Character from selected Characters and add them to password based on passLength
        for (i = 0; i < passLength; i ++) {
        randomChar = options[Math.floor(Math.random()*options.length)];
        password = password + randomChar;
        }


      
        console.log(options);
        console.log(passLength);
        console.log(password);
      }

      //If no value/invalid value entered for password length
      else {
        alert("Invalide length. must be between 8-128.  Please try again!");
        generatePassword();
      }

      writePassword();
}




// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);

