// Assignment code here

//criteria variables
var lower ="abcdefghijklmnopqrstuvwxyz"
var upper ="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var number ="0123456789"
var special =" !#$%&'()*+,-./:;<=>?@][\^_`{|}~\""

//When Button is clicked

function generatePassword() {

    prompt("How many characters? (choose between 8 and 128)");
    confirm("Include Lowercase? (Press OK for yes, or Cancel for no)");
    confirm("Include Uppercase? (Press OK for yes, or Cancel for no)");
    confirm("Include Numbers? (Press OK for yes, or Cancel for no)");
    confirm("Include Special Characters? (Press OK for yes, or Cancel for no)")
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
