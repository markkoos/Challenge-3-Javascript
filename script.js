// Assignment Code
var generateBtn = document.querySelector("#generate");

var passArray = [];
var specialChars = [`!`, `@`, `#`, `$`, `%`, `^`, `&`, `*`, `(`, `)`,];
var numChars = [`1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `0`,];
var lowChars = [`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`, `j`, `k`, `l`, `m`, `n`, `o`, `p`, `q`, `r`, `s`, `t`, `u`, `v`, `w`, `x`, `y`, `z`,];
var uppChars = [`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`, `L`, `M`, `N`, `O`, `P`, `Q`, `R`, `S`, `T`, `U`, `V`, `W`, `X`, `Y`, `Z`,];
var madePass = ``

// Write password to the #password input
function writePassword() {

  // if-statement defining the parameters of the generated password
  function generatePassword() {

    // parseInt() changes the value to an integer for the for-loop
    passwordLength = parseInt(window.prompt(`How many characters do you want your password to have?`));  
  
    if (passwordLength < 8 || passwordLength > 128) {
      window.alert(`lmao the minimum is 8 and the maximum is 128; try again`)
      return;

    } if (!passwordLength) {
      window.alert(`you need to specify how many characters you want; try again`)
      return; 

    } specialConfirm = window.confirm(`Do you want to include special characters?`); {

    } if (specialConfirm) {
        passArray = passArray.concat(specialChars);

    } numConfirm = window.confirm(`Do you also want to include numerical characters?`); {
      
    } if (numConfirm) {
        passArray = passArray.concat(numChars);

    } lowConfirm = window.confirm(`Do you also want to include lowercase characters?`); {
    
    } if (lowConfirm) {
        passArray = passArray.concat(lowChars);

    } uppConfirm = window.confirm(`Do you also want to include uppercase characters?`); {
    
    } if (uppConfirm) {
        passArray = passArray.concat(uppChars);

    } 
    
    // for-loop that creates the password being generated

    for (var i = 0; i < passwordLength; i++) {
      var passRandom = Math.floor(Math.random() * passArray.length);
      madePass += passArray.slice(passRandom, passRandom +1);
      
      
    }
    
    console.log(passwordLength);
    console.log(passArray);
    console.log(madePass);
    

  } var password = generatePassword();
    var passwordText = document.querySelector("#password");
    // change assignment to new variable; (not var password)
    passwordText.value = madePass;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

