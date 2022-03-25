// What is prototype?
// To inhertance

//Prototype
class Person{
    constructor(name, age) {
        this.name = name;
        this.age= age;
    }
}


const p = new Person('Sehee', 20) // 'p' is instance of the class 'Person'
// console.log(p.name)
// console.log(p.toString)
// const obj2 = {}

// let key = "name"
// obj2["name"] = 5; // When you use [], you can put variable
// console.log(obj2.name) // Output: undefined

///////////////////////////////
// const: We can not assign the value to it
// const obj = { // object is passying by reference
//     name:'Sehee'
// }

// obj.name = 'changed'
// obj.age = 5;
// obj = {name:'changed'} // it will be a new refence / you can not reassign 
// console.log(obj)

///////////////////////////////////////////////////////
// Undertand 'this'
// this will point 
// const obj = {
//     name:'Sehee',
//     printName: function(){
//         console.log("this", this)
//         console.log(this.name)
//     }
// }


// const myPrint = obj.printName;
// myPrint(); // 
// // obj.printName(); Which object call this prrintName? obj


// const obj2 = {
//     name:'Sehee',
//     printName: function(){
//         console.log("this", this)
//         console.log(this.name)
//     }
// }

// const obj3 = {
//     name:'Sehee',
//     printName: function(){
//         console.log("this", this)
//         console.log(this.name)
//     }
// }


// console.log("test", obj2.printName === obj.printName)// Output : false
// console.log("test2", 1 == "1") // coersion
// console.log("test3", {} == {}) // Output: false
// console.log("test3", (()=>{}) == (()=>{})) // Output: false

// const foo = function() {
//     console.log('foo')
// }

// foo.age = 28;
// console.dir(foo)



// console.log(obj.toString == obj2.toString) // because it has same prototype, it will return true.

class Person2 {
    constructor(name, age) {
        this.name = name;
        this.age= age;
        this.say = function() { 
            console.log('hello')
        }
    }
}
const p2 = new Person2('Sehee', 27)
const p3 = new Person2('Sehee3', 27)

console.log(p2.say === p3.say) // output: false
p2.say()

Person2.prototype.say2 = function(){
    console.log("hello222222222")
}

class Person3 {
    constructor(name, age) {
        this.name = name;
        this.age= age;
    }
    say(){
        console.log('hello')
    }
}
const p4 = new Person2('Sehee', 27)
const p5 = new Person2('Sehee3', 27)

console.log(p2.say === p3.say) // output: true
p2.say()