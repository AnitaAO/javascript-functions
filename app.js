//--1--//
 function greetings() {
     return 'Hello John';
 }
 let message = greetings();
 console.log(message);

 // --2--// 
 function sum(num1, num2){
     return num1 + num2;
 }
 let result = sum(2);
     console.log(result);

 // --3--// 
 function printAll(){
     for(let i = 0; i < arguments.length; i++)
     {
         console.log(arguements[i]);
     }
 }
 printAll(1, 2, 3, 4, 5);
 printAll(10, 20);

 // --4--//
 function greeting(){
     let message = 'Hey';
     // --nested but undefined function-
     let sayHello = function hello() {
         console.log(message);
     };
     sayHello();
 } 
 greeting();

 // --nested & defined--//
 function greeting(){
     let message = 'hey';
     let sayHello = function hello(){
         let message = 'Hello';
     };
     sayHello();
     console.log(message);
 }
 greeting();

 // --nested & defined and print nested function variable--//
 function greeting(){
     let message = 'hey';
     let sayHello = function hello(){
         message = 'Hello';
     };
     sayHello();
     console.log(message);
 }
 greeting();


// block scope
let message = "Hello";
if (message === "Hello") {
    let count = 100;
}
console.log(count); //error

// block scope
let message = "Hello";
if (message === "Hello") {
    var count = 100;
}
console.log(count); //prints 100

// Inside if block
let message = 'Hello';
if (message === 'Hello'){
    let message = 'Inside if block';
    console.log(message); //inside if block
}
console.log(message); //Hello


// Invoke function
(function() {
    console.log('Hello');  //Hello
}) ();

// using closure to prevent object from going out of scope

// out of scope
let greeting = (function() {
    let message = 'Hello';
    let getMessage = function() {
        return message;
    };
}) ();
console.log(greeting.message); //undefined

 // using closure
let greeting = (function() {
    let message = 'Hello';
    let getMessage = function() {
        return message;
    };

    return {
        getMessage: getMessage,
    };  //--this return type is the closure
})();
console.log(greeting.getMessage());

// example 2 using closure
function setupCounter( val ) {
    return function counter() {
        return val++;
    };
}
let counter1 = setupCounter(0);
console.log(counter1());  //prints 0
console.log(counter1());  //prints 1
let counter2 = setupCounter(10);
console.log(counter2()); //prints 10

// arrow functions
// example 1
let greetings = function() {
    return "Hello World";
};
let message = greetings();
console.log(message); // prints Hello Word ...this is a normal function

// using the arrow function
let greetings () => {
    return "Hello World";
};
let message = greetings();
console.log(message);        //prints Hello World too....This used the 
//anonymous function with the parenthesis ()

// example 1 is further simplified by omitting the braces and the returned variable
let greetings = () => "Hello World";
let message = greetings();
console.log(message); //prints Hello World

// Arrow functions example 2 using one parameter
let greet = function greetings(name) {
    return 'Hello' + name;
};
let message = greet('John');
console.log(message);

// example 2 using one parameter simplified
let greetings = name => 'Hello' + name;
let message = greetings('John');
console.log(message);

// add two numbers
function sum(num1, num2) { //takes in two numbers
    return num1 + num2;     //returns their sum in the body
}
let output = sum(10, 5); //invoke some function with arguements 10 and 5 and assign the returned value to the variable output
console.log(output);    //log the output value to the console

//using the arrow function to add two numbers
let sum = (num1, num2) => num1 + num2; //done on one line with the use of let, parentheisis and braces removed
let output = sum(10, 7);
console.log(output);

// this keyword
let message = {
    name: 'John',
    regularFunction: function() {
        console.log('Hello' + this.name);
    },
    arrowFunction: function() => console.log('Hi' + this.name);
}
message.regularFunction(); // this prints the regular function with message and name 'Hello John'
message.arrowFunction();    // this prints the arrow function with message 'Hi' because when we log our message.regularFunction, out this keyword refers to the message object that holds a function

// built-in-function
// function context
function sayHi() {
    console.log('Hi');
    console.log(this);
}
sayHi(); //Hi
        //Window {...}

// built-in-function example 2
let greeting = {};
greeting.sayHi = function() {
    console.log('Hi');
    console.log(this);
}
greeting.sayHi(); //prints Hi
                // prints {sayHi:f}

// using the new keyword or constructive function
function sayHi() {
    console.log('Hi');
    console.log(this);
}
let greeting = new sayHi(); //prints Hi
                            //[obj Object]

// the call function/method
let person1 = { name: 'John', age: 22 }
let person2 = { name: 'Mary', age: 26 }
let sayHi = function(){
    console.log('Hi, ', + this.name);
}
sayHi.call(person1) // prints Hi, John
sayHi.call(person2) // prints Hi, Mary

// passing additional arguements to the call method
let person1 = { name: 'John', age: 22 }
let sayHi = function(message){
    console.log( message + ', ' + this.name);
}
sayHi.call(person1, 'Hi')   //prints Hi, John
//sayHi.call() is same as line 219 and would print as line 219
//but calling person1.call() won't execute as person1 is not a function

//The apply method
//the call method takes less of arguements
//the apply method takes in more arguements/an array
//use the apply() method when the input parameter is an array, 2. has similar elements(related)
//use the call() method when the input parameter is individual arguments, 2. has varying type(not related)

//apply method example
function introduction(name, profession) {
    console.log("My name is " + name " and I am a " + profession + ".");
}
introduction("John", "student");

introduction.apply(undefined, 
    ["Mary", "lawyer"]),

introduction.call(undefined,
    "James", "artist");

//the Bind method
let person1 = {name: 'Mary',
                getName: function(){
                    return this.name;
                }
};
let person2 = {name: 'John'};
let getNameCopy = person1.getName.bind(person2);
console.log(getNameCopy()); //this prints John
//if we just print console.log(getNameCopy); it prints the body of the anonymous function below:
// f() {
//     return this.name;
// }

// Using built-in-javascript functions
// 1. Eval functions
// example 1
let x = 1; //variable x initialized to 1
let y = 2;
console.log(eval ('x + y + 1')); //prints 4

// example 2
let x = 2; //variable x initialized to 1
let y = 3;
let s = 'abc';
console.log(eval ('x + y + s')); //prints 5abc

//parseIn - passes an integer
console.log(parseInt('F', 16)); //prints 15
console.log(parseInt('15', 10)); //prints 15 --prints first number
console.log(parseInt('Hi', 10)); //prints NaN - Not a number - if the value cannot be converted to a number

//parseFloat 
console.log(parseFloat('3.99')); //prints 3.99
console.log(parseFloat('3.99e-1')); //prints 39.9
console.log(parseFloat('')); //prints NaN - empty string cannot be parsed to a floating point number

//escape
console.log(escape('text')); //prints text
console.log(escape(' ')); //prints 20%
console.log(escape('abc&%')); //prints abc%26%25

//unescape --does the opposite of escape
console.log(unescape('text')); //prints text
console.log(unescape('%20')); //prints nothing
console.log(unescape('abc%26%25')); //prints abc&%

//Default| Rest Parameters | Spread Operators
//Default Parameters - Allows you to give a default value to a parameter in a function
//Example 1
function sayHi(name = 'World'){
    console.log('Hello ' + name);
}
sayHi(); //prints Hello World
sayHi('John'); //prints Hello John

//Example 2
function sayHi(message, name = 'World'){
    console.log(message + name);
}
sayHi('Hello'); //prints Hello World
sayHi('Hi', 'John'); //prints Hi John
//NOTE: Default parameter in the function should always come after the regular parameters 
//so message cannot come after the name parameter

//Constructing Rest parameters - Used especially when invoking a function with multiple arguements
//Rest Parameter uses ... to express its parameters
//Example 1
let sayHi = function greet(...names){
    names.forEach(name => console.log('Hi ' + name));
}
greet('Mary', 'John', 'James'); //prints Hi Mary
                                        //Hi John
                                        //Hi James

//Example 2
let sayHi = function greet(message, ...names){
    console.log(message + 'everyone!');
    names.forEach(name => console.log('Hi ' + name));
}
greet('Welcome', 'Mary', 'John', 'James'); //prints Welcome everyone!
                                             // Hi Mary
                                             //Hi John
                                             //Hi James
//NOTE: Rest store the 'rest' or remaining arguements as an arry

//The Spread Operator
//Spread operator is an opposite of how Rest works
//Spread allows a function to take an array as an arguement and spread out its
//its elements so that they can be assigned to individual parameters
//Example 1
function greet(person1, person2) {
    console.log('Hello ' + person1 + ' and ' + person2);
}
let names = ('John', 'Mary');
greet(...names); // prints Hello John and Mary

//Example 2
function display(char1, char2, char3, char4) {
    console.log(char1, char2, char3, char4);
}
let letters = ('abcd');
display(...letters); // prints a b c d