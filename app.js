// //--1--//
// function greetings() {
//     return 'Hello John';
// }
// let message = greetings();
// console.log(message);

// // --2--// 
// function sum(num1, num2){
//     return num1 + num2;
// }
// let result = sum(2);
//     console.log(result);

// // --3--// 
// function printAll(){
//     for(let i = 0; i < arguments.length; i++)
//     {
//         console.log(arguements[i]);
//     }
// }
// printAll(1, 2, 3, 4, 5);
// printAll(10, 20);

// // --4--//
// function greeting(){
//     let message = 'Hey';
//     // --nested but undefined function-
//     let sayHello = function hello() {
//         console.log(message);
//     };
//     sayHello();
// } 
// greeting();

// // --nested & defined--//
// function greeting(){
//     let message = 'hey';
//     let sayHello = function hello(){
//         let message = 'Hello';
//     };
//     sayHello();
//     console.log(message);
// }
// greeting();

// // --nested & defined and print nested function variable--//
// function greeting(){
//     let message = 'hey';
//     let sayHello = function hello(){
//         message = 'Hello';
//     };
//     sayHello();
//     console.log(message);
// }
// greeting();


// block scope
let message = "Hello";
if (message === "Hello") {
    let count = 100;
}
console.log(count); //error

// Inside if block
let message = 'Hello';
if (message === 'Hello'){
    let message = 'Inside if block';
    console.log(message); //inside if block
}
console.log(message); //Hello