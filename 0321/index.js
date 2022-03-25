
//////////////////////////////
///////////callback///////////
//////////////////////////////
// 
// setTimeout(() => {

// }, 1000);

// document.addEventListener('click', ()=>{

// })

// const arr = [1, 2, 3];

//imperative (You have to fully control everything)
// for (let value in arr) {

// }
// for (let index of arr) {
//     console.log(index)
// }
// for (let i=0; i < arr.length; i++){

// }


///////////declaritive/////////////// 

//////////////////////////////
/////////////map//////////////
//////////////////////////////
// arr.map((item)=>{

// }) // create a new array

// const array1 = [1, 4, 9, 16];

// pass a function to map
// Array.prototype.map = function(){
//     const result = []
//     for(let i = 0; i<this.length; i++) {
//         const newItem = cb(this[i])
//         result.push(newItem);
//     }
//     return result;
    
// }

// // pass a function to map
// const map1 = array1.map(x => {return x * 2});

// [1,2,3].map(()=>5);

// console.log(map1);

//////////////////////////////
///////////forEach////////////
//////////////////////////////

// function outer(){
//     //if you're not returning anythin, it returns undefined
//     console.log("outer")
// }

// function inner(){
//     console.log('inner')
// }

// outer(inner()) // output will print 'inner' first, then print 'outer'


// function outer(input){
//     console.log("outer", input)
// }

// function inner(){
//     console.log('inner')
// }

// outer(inner)
// outer(()=>inner())
// outer((()=>inner()))


// Array.prototype.foreach = function(cb){
//     for (let i=0; i<tmp.length; i++){
//         cb(this[i])
//         break; // 
//     }
// }
// const result = [1,2,3].foreach(()=>5);
// console.log(result)
// console.log(foo())
// arr.forEach((item)=>{ 

// })

// arr.filter(()=>{

// });

// arr.reduce(()=>{

// });

// arr.some(()=>{

// })

// Array.prototype.filter = function(cb) {
//     const result = []
//     for (let i=0; i<this.length; i++) {
//         if(cb(this[i])){
//             result.push(this[i])
//         }
//     }
//     return result;
// }

// benefit of using callback function
// more usuable and maintainable

//////////////////////////////
///////////closure////////////
//////////////////////////////
// function foo() {
//     console.log(a)
// } // output: It is not defined.

// function outer() {
//     let a = 5;
//     return function foo() {
//         console.log(a)
//     }
// }

// let inner = outer()
// inner() // output: 5
// console.log(inner) // output: function

// add(2)(3)(4); // "add(2)(3) will return function" / add is function


///////////////////////////////////////
///////////curring function////////////
///////////////////////////////////////
function add(num){
    return function(num1){
        return function(num2){
            return num + num1 + num2
        }
    }
}
const result = add(2)(3)(4);
console.log(result)


///////////////////////////////////
/////module pattern with IIFE//////
///////////////////////////////////
const Controller = (function(){
    function init() {
        console.log('init')
    }
    return {
        init
    }
})()
console.log(Controller)

///////////////////////////////////
//////////Arrow Function///////////
///////////////////////////////////

const arrowFn = () => {
    console.log("arrow")
}

const normalFn = function () {
    console.log(this)
    console.log("normal")
}

///////////////////////////////////
//////call vs apply vs bind////////
///////////////////////////////////

//generator | async programing 
function getResultAfterRandomTime(){
    setTimeout(()=>{
        const resultData = "resultData";
        console.log(resultData)
    },Math.random() * 10000)
}

getResultAfterRandomTime()