Given a string, please make every other character uppercase and every other lowercase 

Parameters: 
string

Return:
string with every other character uppercase and every other lowercase

Example:
"test string" -- "TeSt sTrInG"

Psuedocode && Edge Cases: 
create a function and pass in string
create a variable with an empty string to push in the new string 
i % 2 === 0, use this to get every other letter uppercase 
=+ operator to add each part of the new string into my result variable
Edge case question - is it every other letter or every other character? CHARACTER. so spaces count as upperase
Edge case question -- will you give me an empty string? no 




// I am creating a function named everOtherUppercase and passing in my parameter string 
function everyOtherUppercase(str){
  // I am creating a variable where I set it to an empty string so I can eventually store my new string into this 
  var result = "";
  // I am initializing my for loop; I am setting my condition where i is less than the string length; and I am incrementing by 1 each time so I will write i++
  for (i=0; i < str.length; i++) {
    // I want to add each oart of the string into my result 
    // Using the ternary operator, I am setting my "if" to i % 2 ===0, if its true then make my character uppercase, and if it is not true, then make my character lowercase 
     result += i % 2 === 0 ? str.charAt(i).toUpperCase() : str.charAt(i).toLowerCase();
  }
  // then i want to return my result 
  return result;  
}

console.log(everyOtherUppercase("test string"));




// This is not annotated for better readability 
function everyOtherUppercase(str){
  var result = "";
  for (i=0; i < str.length; i++) {
     result += i % 2 === 0 ? str.charAt(i).toUpperCase() : str.charAt(i).toLowerCase();
  }
  return result;  
}

console.log(everyOtherUppercase("test string"));








