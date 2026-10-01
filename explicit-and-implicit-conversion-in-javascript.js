/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/

// This doesn't need to be changed because the "5" is implicitly converted to a number to perform the subtraction
let result = "5" - 2;
console.log("The result is: " + result);

// This change works to get a falsy value because Number("false") returns NaN, which is false when converted to a boolean
let isValid = Boolean(Number("false"));
console.log(isValid);
if (isValid) {
    console.log("This is valid!");
}

// This change works to calculate the total age because it converts age to a number to avoid string concatenation.
let age = "25";
let totalAge = Number(age) + 5;
console.log("Total Age: " + totalAge);

// Explicit type conversion example
let product; // undefined
let conversion = Boolean(product); // Evaluates to false
console.log(conversion);

// Implicit type conversion example
let user = null;
if (user) {
    console.log("User registered.")
}
else {
  console.log("User not registered.");
}



