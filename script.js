// Assignment Code
var generateBtn = document.querySelector("#generate");
console.log(generateBtn)




// Write password to the #password input
function writePassword() {
  // var password = generatePassword();
  // var passwordText = document.querySelector("#password");
  var passwordLength = prompt("Enter a passowrd length");
  // passwordText.value = password;
  console.log(passwordLength);
  var passwordUpper = confirm("Do you want to use Uppercase letters?");
  var passwordLower = confirm("Do you want to use Lowercase letters?");
  var passwordSymbol = confirm("Do you want to use symbols?");
  var passwordNumber = confirm("Do you want to use numbers?");
}

function generateUpper() {
  return String.fromCharCode(Math.floor((Math.random()*26) + 65));
};



function generateLower() {
  return String.fromCharCode(Math.floor((Math.random()*26) + 97));
};

function generateSymbol(){
  var symbols = "!@#$%^&*()_-+={[}]:;\\|\"',<.>/?"
  return symbols[Math.floor(Math.random() * symbols.length)];
};

function generateNumber() {
  return Math.floor(Math.random()*10);
};
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
console.log(generateUpper());
console.log(generateLower());
console.log(generateNumber());
console.log(generateSymbol());