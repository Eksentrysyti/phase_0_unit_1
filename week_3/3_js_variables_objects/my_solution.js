// I completed this challenge by myself.

// Pseudocode
// define secretNumber as integer
// set secretNumber to 7
// define password as string
// set password to 'just open the door'
// define allowedIn as boolean
// set allowedIn to false
// define members as array
// set first element to "John"
// set fourth element to "Mary"

// __________________________________________
// Write your code below.

var secretNumber = 25;
secretNumber = 7;
var password = 'hello';
password = 'just open the door';
var allowedIn = true;
allowedIn = false;
members = Array();
members[0] = "John";
members[3] = "Mary";


// __________________________________________
// Refactored Code: Include a refactored version (or justification of your original code) here. 

// Does not need to be refactored, variables are declared and set as simple as possible.  The code is good because it is readable and very clear what each line is doing.



// __________________________________________
// Reflection: Use the reflection guidelines to write a reflection here. 

/*
  Once I figured out how to read the error messages, it was simple to create and set variables based on what was required.  I did need to check up on syntax differences from Ruby (such as the array declaration), but otherwise this challenge was very straightforward.
*/

// __________________________________________
// Driver Code:  Do not alter code below this line.

function assert(test, message, test_number) {
  if (!test) {
    console.log(test_number + "false");
    throw "ERROR: " + message;
  }
  console.log(test_number + "true");
  return true;
}

assert(
  (typeof secretNumber === 'number'),
  "The value of secretNumber should be a number.",
  "1. "
)

assert(
  secretNumber === 7,
  "The value of secretNumber should be 7.",
  "2. "
)

assert(
  typeof password === 'string',
  "The value of password should be a string.",
  "3. "
)

assert(
  password === "just open the door",
  "The value of password should be 'just open the door'.",
  "4. "
)

assert(
  typeof allowedIn === 'boolean',
  "The value of allowedIn should be a boolean.",
  "5. "
)

assert(
  allowedIn === false,
  "The value of allowedIn should be false.",
  "6. "
)

assert(
  members instanceof Array,
  "The value of members should be an array",
  "7. "
)

assert(
  members[0] === "John",
  "The first element in the value of members should be 'John'.",
  "8. "
)

assert(
  members[3] === "Mary",
  "The fourth element in the value of members should be 'Mary'.",
  "9. "
)

