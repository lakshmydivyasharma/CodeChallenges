Create a function that takes in an array of n length. The function should always return that last item in the array


Parameter:
  array 
  
Return:
  last element in an array

Example:
["dog", "cat", "zebra"] = "zebra

Psuedocode && edge cases:
function that takes in an argument (array)
array.length - 1 returns 2 
array[array.length - 1]returns the information inside of 2 
does slice method work? no. 
edge cases - can it be a nonempty array? no, the array will always have something 
    


// I am writing a function, and naming it lastElement since the objective is getting the last element of the array and I will be passing in my parameter array 
function lastElement(arr){
  // arr.length - 1 returns the last index spot 
  // be sure to use [] bracket notation to extrapolate the content from there 
  return arr[arr.length - 1]
}

// I am calling my function and passing in an example parameter 
console.log(lastElement(["dog", "cat", "zebra"]))



// This is the function without annotated comments for better readability
function lastElement(arr){
   return arr[arr.length - 1]
}

console.log(lastElement(["dog", "cat", "zebra"]))




