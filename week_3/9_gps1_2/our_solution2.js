// GPS 1.2 - JavaScript

// YOUR FULL NAMES:
//  1. Jeremy Wong
//  2. Steven Leu

// Pseudocode
// 1. Store Information
//  1.1 Name
//  1.2 Age
//  1.3 Quote

var clientOne = {
    name: "Frank Sinatra",
    age: 85,
    quote: "Fly me to the moon."
}

var clientTwo = {
    name: "Michael Jackson",
    age: 54,
    quote: "Billie Jean"
}
//  1.4 Call back new client information

console.log(clientTwo.quote);

// 2. Create constructor function for client information
//  2.1 Call new constructor function

var Client = function(name, age, quote) {
    this.name = name;
    this.age = age;
    this.quote = quote;
    this.showQuote = function() {
        return this.quote;
    };
};

//  2.2 Add values to properties / Create clients
// Test line
var shooterMcGavin = new Client("Shooter McGavin", 48, "Just stay out of my way... or you'll pay. Listen to what I say.");
shooterMcGavin.constructor === Client;
shooterMcGavin.age === 48;
shooterMcGavin.quote === "Just stay out of my way... or you'll pay. Listen to what I say.";
//  2.3 Call back new client information

console.log(shooterMcGavin);

// 3. Display Client Information
//  3.1 Create generic output for any Client

function displayClient(clientInfo){
    console.log("I am " + clientInfo.name + ". I am " + clientInfo.age + " years old and my quote is, '" + clientInfo.quote + ".'");
}

displayClient(shooterMcGavin);

// 4. Store functions in objects
//  4.1 Add showQuote
//  4.2 Call Quote

console.log(shooterMcGavin.showQuote());

//  Your Reflection:
