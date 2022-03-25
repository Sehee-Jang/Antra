// primitive types
// number, boolean, string, undefined, null

//Declare object
// let obj = {
//     name:'Sehee'
// };

// let str = obj.toString() // from Object Prototype
// console.log(str);

// console.log(obj);


// function foo(obj){ // We are passing by reference
//     // obj.name = 'changed';
//     obj = {name:'changed'}
//     console.log(obj) // Output: changed
// }

// foo(obj);
// console.log(obj) // Output: Sehee



////////

// javascript declare variable: var, let, const


// Deference between undifend & not defined
// undifned: if you don't assinged any value, it will be undefind
// not defined: if you don't declare, it will return 'it is not define

// Function scope & Block scope
// Function scope: 
// Block Scope

// function foo() {
//     var a = 5;
//     if(true) {
//         var a = 5;
//         let b = 6;
//     }
//     console.log(a) // output: 5
//     console.log(b) // error: b is not defined
// }

/////////////////// Hosting ///////////////////
// function foo() {
//     console.log(a);
//     if(true) {
//         var a = 5;
//     }
// }
// foo();

/////////////////// Hosting ///////////////////

// function foo() {
//     (function() {
//         var a = 5; // It will only exist in this function
//     })
//     console.log(a);
// }
// foo();

//even though you don't use any keyword, it will consider it's global varibale
// a = 5;
// console.log(a)

// "use strict";

// How to Create a class? 
class Person {
    constructor() {

    }
}

console.log(typeof Person)

// How to create a class in ES6, ES5?
