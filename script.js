// Assignment code here

//criteria variables
var lower ="abcdefghijklmnopqrstuvwxyz"
var upper ="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var number ="0123456789"
var special =" !#$%&'()*+,-./:;<=>?@][\^_`{|}~\""
var password = ""



//When Button is clicked

function generatePassword() {

    //Password Length
    var confirmLength = prompt("How many characters? (choose between 8 and 128)");
      if (confirmLength >7 && confirmLength <128) {

        //Lower Case?
        var confirmLower = confirm("Include Lowercase? (Press OK for yes, or Cancel for no)");
          if(confirmLower) {
            password = lower;
          }
        //Upper Case?
        var confirmUpper = confirm("Include Uppercase? (Press OK for yes, or Cancel for no)");
          if(confirmUpper) {
            password = password + upper;
          }

        //Numbers?
        var confirmNumber = confirm("Include Numbers? (Press OK for yes, or Cancel for no)");
          if(confirmNumber) {
            password = password + number;
        }

        //Special?
          var confirmSpecial = confirm("Include Special Characters? (Press OK for yes, or Cancel for no)");
          if(confirmSpecial) {
            password = password + special;
        }
        
        var passLength = confirmLength;

        console.log(password);
        console.log(passLength);
      }

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

