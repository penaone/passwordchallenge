// Assignment code here

var smallCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "F", "G", "H", "I", "J", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specialCharacters = ["#", "%", "*","!","@","^","$"];
var numberChoices = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
console.log(smallCase);
console.log(upperCase);
console.log(specialCharacters);
console.log(numberChoices);



function pswdChoices() {
  var length = parseInt(
    window.prompt("How long would you like your password?(Please use numerical digits)")
  );

  if (length > 128 || length < 8) {
    window.alert("Password must be from 8 to 128 characters long");
    return;
  }
  

  var smallCaseletters = window.confirm(
    "Push Okay if including lower case letters."
  );

  var upperCaseletters = window.confirm(
    "Push Okay if including upper case letters."
  );

  var specialKeyCharacters = window.confirm(
    "Push Okay if you are including special characters (&,*,#,%, etc.)."
  );

  var wholenumbers = window.confirm(
    "Push Okay if you are including numbers (0-9)"
  );

  if (
    smallCaseletters === false &&
    upperCaseletters === false &&
    specialKeyCharacters === false &&
    wholenumbers === false)

  {
    window.alert("Please enter 1 or more types of character");
    return;
  }

  // store user input in a Object
  var pswdChoices = {
  length: length,
  specialKeyCharacters: specialKeyCharacters,
  smallCaseletters: smallCaseletters,
  upperCaseletters: upperCaseletters,
  wholenumbers: wholenumbers
  };

  return pswdChoices;
}

  function gtRndm(arr) {
    var rndIdx = Math.floor(Math.random() * arr.length);
    var rndElm = arr[rndIdx];

    return rndElm;
    consolelog(rndElm)
  }

  // password generation Function from input
  function generatePassword() {
    var choices = pswdChoices();

    // store concatenated password 

    var result = [];

    // store types of items for password in array

    var potentialitems = [];

    // array for ensuring each chosen item type will be in password
    var actualitems = [];

    // Pushing each individual array into larger array using 'if' statement
    if (choices.specialKeyCharacters) {
      potentialitems = potentialitems.concat(specialCharacters);
      actualitems.push(gtRndm(specialCharacters));
    }

    //Pushing upper Case array into larger array using 'if' statement
    if (choices.upperCaseletters) {
      potentialitems = potentialitems.concat(upperCase);
      actualitems.push(gtRndm(upperCase));
    }

    //Pushing lower Case array into larger array using 'if' statement
    if (choices.smallCaseletters) {
      potentialitems = potentialitems.concat(smallCase);
      actualitems.push(gtRndm(smallCase));

    }


    // Pushing number array into larger array using if statement
    if (choices.wholenumbers) {
      potentialitems = potentialitems.concat(numberChoices);
      actualitems.push(gtRndm(numberChoices));
    }
    // iteration using password length
    for (var i = 0; i < choices.length; i++) {
      var potentialitems = gtRndm(potentialitems);

      result.push(potentialitems);
    }

    // Make sure one of each requested item in the result
    for (var i = 0; i < actualitems.length; i++) {
      result[i] = actualitems[i];
    }

    return result.join("");

  }

  // Get references to the #generate element
  var generateBtn = document.querySelector("#generate");

  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
    return;
  }
  


  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
