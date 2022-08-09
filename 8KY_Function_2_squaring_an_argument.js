// Write the "square"-function here

// parameter -- number (n) 
 
// return -- (the result of the square of the argument)

// example-- 5 --> 25

// psuedocode-- parameter, MULTIPLY, return product
// edge cases -- (what if it was empty?) -- nonempty 


Solution 1:
// I am writing a function and I am naming it square, which takes in a number as a parameter 
function square(number){
  // and here I am returning a number times itself 
  return number*number
}

Solution 2: 
// I am writing a function and I am naming it square, which takes in a number as a parameter 
function square(number){
//   // **2 operator does the square 
  return number**2
}

Solution 3 fat arrow function ES6:
// let/const/var name of function = (parameters) => { return method }
const square = (number) => { return number**2 }
