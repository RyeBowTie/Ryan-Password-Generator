
var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", writePassword); 

function writePassword() {
 

// storing and checking user inputs ------------------------------------
  
  var password = "";
  var passwordLength = prompt("Enter a passowrd length. Must be between 8 and 128 characters.");
  
  if (passwordLength < 8 || passwordLength > 128) {
    var passwordLength = prompt("Enter a passowrd length. Must be between 8 and 128 characters.");
  };

  if (passwordLength < 8 || passwordLength > 128) {
    return; 
  }
  
  var passwordUpper = confirm("Do you want to use Uppercase letters?");
  var passwordLower = confirm("Do you want to use Lowercase letters?");
  var passwordSymbol = confirm("Do you want to use symbols?");
  var passwordNumber = confirm("Do you want to use numbers?");
 


  if (!passwordUpper && !passwordLower && !passwordSymbol && !passwordUpper) {
    confirm("Must choose at least one charcter type.")
    return;
  };

// Password generator ------------------------------------------------ 
  for (var i = 0; i < passwordLength; i++) {
    
    var r = Math.floor(Math.random() * 3);
    
    if (passwordUpper && r === 0){
      password += generateUpper();
    } else if (passwordLower && r=== 1) {
      password += generateLower();
    } else if (passwordSymbol && r === 2) {
      password += generateSymbol();
    } else if (passwordNumber && r === 3) {
      password += generateNumber();
    } else {
      i--;
    }
  };

  // Adds password text to screen ----------------------------------------------
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

};

// Generator Functions ---------------------------------------------------- 

function generateUpper() {
  return String.fromCharCode(Math.floor((Math.random()*26) + 65));
};

function generateLower() {
  return String.fromCharCode(Math.floor((Math.random()*26) + 97));
};

function generateSymbol(){
  var symbols = "!@#$%^&*()_-+={[}]:;\\|\"',<.>/?"
  return symbols[Math.floor(Math.random() * symbols.length-1)];
};

function generateNumber() {
  return Math.floor(Math.random()*10);
};



 


