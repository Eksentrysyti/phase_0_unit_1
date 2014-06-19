// This is a Solo Challenge. 

// There is a section below where you will write your code.
// Do not alter this object here.


var terah = {
  name: "Terah",
  age: 32,
  height: 66,
  weight: 130,
  hairColor: "brown",
  eyeColor: "brown"
}
/* Pseudocode Section - write pseudocode for each challenge below.
1. Define a variable adam and use object literal notation to assign this variable 
   the value of a JavaScript Object object with no properties.

  > Define variable "adam"
  > Initialize as empty JavaScript object

2. Give adam a name property with the value "Adam".

  > Add name property with value of "Adam" 

3. Add a spouse property to terah and assign it the value of adam.
  
  > Add spouse property to to terah with value of "Adam"

4. Change the value of the terah weight property to 125.

  > Change weight of terah to 125

5. Remove the eyeColor property from terah.

  > Delete eyeColor from terah

6. Add a spouse property to adam and assign it the value of terah.

  > Add spouse property to adam and set it to the value of "terah"

7. Add a children property to terah and and use object literal notation to assign 
   this variable the value of a JavaScript Object object with no properties

  > Add children property to terah and initialize as empty JavaScript object

8. Add a carson property to the value of the terah children property and assign it 
  the value of an object with the property name with a value of "Carson".

  > Add carson property as a value to terah's children property and assign it an object with the property name set to "Carson"

9. Add a carter property to the value of the terah children property and assign it 
   the value of an object with the property name with a value of "Carter".

  > Add carter property as a value to terah's children property and assign it an object with the property name set to "Carter"

10. Add a colton property to the value of the terah children property and assign it 
    the value of an object with the property name with a value of "Colton".

  > Add colton property as a value to terah's children property and assign it an object with the property name set to "Colton"

11. Add a children property to adam and assign it the value of terah children.

  > Add children property to adam and assign terah children as its value


*/

// __________________________________________
// Write your code below.

var adam = {};
adam.name = "Adam";
terah.spouse = adam;
terah.weight = 125;
delete terah.eyeColor;
adam.spouse = terah;
terah.children = {};
terah.children.carson = {name: "Carson"};
terah.children.carter = {name: "Carter"};
terah.children.colton = {name: "Colton"};
adam.children = terah.children;


// __________________________________________
// Reflection: Use the reflection guidelines

/*
  Starting this challenge, I'm a bit confused as to why I would need to write pseudocode as the steps in Release 2 basically WAS the pseudocode.  It provided clear details on how each line was to be constructed.  Following the steps was very simple.  Once I figured out the notation for creating a property (object.property = value) it was very quick and easy to complete each step.  I liked seeing the final object that was output to the console and how each line of code transformed the object.  Main takeaways from this challenge was getting accustomed to the slightly different syntax (compared to Ruby) and learning how to manipulate properties of a JavaScript object.
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
  (adam instanceof Object),
  "The value of adam should be an Object.",
  "1. "
)

assert(
  (adam.name === "Adam"),
  "The value of the adam name property should be 'Adam'.",
  "2. "
)

assert(
  terah.spouse === adam,
  "terah should have a spouse property with the value of the variable adam.",
  "3. "
)

assert(
  terah.weight === 125,
  "The terah weight property should be 125.",
  "4. "
)

assert(
  terah.eyeColor === undefined,
  "The terah eyeColor property should be removed.",
  "5. "
)

assert(
  terah.spouse.spouse === terah,
  "The terah spouse property's value spouse property should be terah.",
  "6. "
)

assert(
  (terah.children instanceof Object),
  "The value of the terah children property should be an Object.",
  "7. "
)

assert(
  terah.children.carson.name === "Carson",
  "The terah children property should have a carson property with its own property name with a value of 'Carson'.",
  "8. "
)

assert(
  terah.children.carter.name === "Carter",
  "The terah children property should have a carter property with its own property name with a value of 'Carter'.",
  "9. "
)

assert(
  terah.children.colton.name === "Colton",
  "The terah children property should have a colton property with its own property name with a value of 'Colton'.",
  "10. "
)

assert(
  adam.children === terah.children,
  "The value of the adam children property should be the value of the terah children property",
  "11. "
)

console.log("\nHere is your final terah object:")
console.log(terah)