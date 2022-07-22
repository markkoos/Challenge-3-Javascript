// Assignment Code
var generateBtn = document.querySelector("#generate");

var passArray = [];
var specialChars = [`!, @, #, $, %, ^, &, *, (, ),`];
var numChars = [`1, 2, 3, 4, 5, 6, 7, 8, 9, 0,`];
var lowChars = [`a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z,`];
var uppChars = [`A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z,`];


// function for the promps and confirms
function specialConfirm() {
  window.confirm(`Do you want to include special characters?`);
}

function numConfirm() {
  window.confirm(`Do you also want to include numerical characters?`);
}

function lowConfirm() {
  window.confirm(`Do you also want to include lowercase characters?`);
}

function uppConfirm() {
  window.confirm(`Do you also want to include uppercase characters?`)
}

// Write password to the #password input
function writePassword() {

  // if-statement defining the parameters of the generated password
  function generatePassword() {

    passwordLength = window.prompt(`How many characters do you want your password to have?`);  
  
    if (passwordLength < 8 || passwordLength > 128) {
      window.alert(`lmao the minimum is 8 and the maximum is 128; try again`)
      return;

    } if (!passwordLength) {
      window.alert(`you need to specify how many characters you want; try again`)
      return;

    } if (specialConfirm()) {
        passArray = passArray.push(specialChars);
        console.log(passArray);

    } if (numConfirm()) {
        passArray = passArray.push(numChars);
        console.log(passArray);

    } if (lowConfirm()) {
        passArray = passArray.push(lowChars);
        console.log(passArray);

    } if (uppConfirm()) {
        passArray = passArray.push(uppChars);
        console.log(passArray);

    } console.log(passArray);

    

    
    
  // for-loop that creates the password being generated

  // for (var i = 0; i == passwordLength; i++) {
  //   var passRandom = Math.floor(Math.random() * passArray);
    

  // }

  }

    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

