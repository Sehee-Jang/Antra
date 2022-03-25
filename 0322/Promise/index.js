// Chained Promises
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise


///////////// Case 01:  Resolve /////////////
// const myPromise = new Promise((resolve, reject) => { // myPromise is instance from Promise class
//     console.log('Create Promise')
//     setTimeout(() => {
//         console.log('resolve Promise')
//         resolve('foo');
//         console.log(myPromise)
//     }, 3000);
//   }); // everything inslide is 1 function and evokes immediatley  
  
//   console.log(myPromise)

// myPromise.then((resolveData)=>{console.log("resolveData", resolveData)}, () => {})

///////////// Case 01:  Reject /////////////
// const myPromise2 = new Promise((resolve, reject) => { // myPromise is instance from Promise class
//     console.log('Create Promise')
//     setTimeout(() => {
//         console.log('resolve Promise')
//         reject('foo');
//         console.log(myPromise)
//     }, 3000);
//   }); // everything inslide is 1 function and evokes immediatley  
  
//   console.log(myPromise)

// myPromise.then(
//     (resolveData) => { console.log("resolveData", resolveData) },
//     (rejectData) => { console.log("rejectData", rejectData) }
// )

///////////////////////////////////////////////////////////////////
// Using Normal Function
// class MyPromise {
//     constructor(excutionFn) {
        
//         this.PromiseState = "PENDING"
//         this.PromiseResult = undefined;

//         function resolveFn(result) {
//             this.PromiseState = "FULFILL"
//             this.PromiseResult = result;
//         }

//         function rejectFn(result) {
//             this.PromiseStat = "REJECT" 
//             this.PromiseResult = result;
//         }

//         excutionFn(resolveFn.bind(this), rejectFn.bind(this)) // excute function immediately
//     }
// }

// const myPromise = new MyPromise((resolve, reject) => { 
//     console.log('Create Promise')
//     setTimeout(() => {
//         console.log('resolve Promise')
//         resolve(5);
//         console.log(myPromise)
//     }, 3000);
//   });

  // Uncaught TypeError: Cannnot set properties of undefined 

// arrow function vs normal function
// arrow 
class MyPromise {
    constructor(excutionFn) {
        
        this.PromiseState = "PENDING"
        this.PromiseResult = undefined;

        const resolveFn = (result) => {
            if (this.PromiseState === "PENDING") {
                this.PromiseState = "FULFILL"
                this.PromiseResult = result;
                if(this.onFulFillFn) {
                    this.onFulFillFn(this.PromiseResult)
                }
            }  
        }

        const rejectFn = (result) => {
            if(this.PromiseStat === "PENDING"){
                this.PromiseStat = "REJECT" 
                this.PromiseResult = result;
                if(this.onRejectFn) {
                    this.onRejectFn(this.PromiseResult)
                }
            }      
        }
        excutionFn(resolveFn, rejectFn) // excute function immediately
    }

    then(onFulFill, onReject){
        // Store 

        return new MyPromise((res,rej) => {
            //whatever we're resolving here, 
            //when we're going to trigger res? : when it's fulfilled
            this.onFulFillFn = (PromiseResult) => {
                let nextResolveData = onFulFill(PromiseResult)
                res(nextResolveData)
            }
            this.onRejectFn = (PromiseResult) => {
                let nextRejectData = onReject(PromiseResult)
                res(nextRejectData)
            }
        })
    }
}

const myPromise = new MyPromise((resolve, reject) => { 
    console.log('Create Promise')
    setTimeout(() => {
        console.log('resolve Promise')
        resolve(5);
        console.log(myPromise)
    }, 3000);
  });
 console.log(myPromise)

myPromise
    .then(
        (resolveData) => {
            console.log("resolveData", resolveData);
        return new Promise((res,rej) => {
            setTimeout(()=> {
                res()
            }, 2000)
        })}, // we're going to receive reoslveData
        (rejectData) => { console.log("rejectData", rejectData) }
    )
    . then(
        (resolveData2) => { console.log("resolveData2", resolveData2) }, // we're going to receive reoslveData
        (rejectData2) => { console.log("rejectData2", rejectData2) }
        )
    
// because of callback hell

//////////////////////////////////////////////////////////////////////
// call vs apply vs bind
// bind creates new method not evoke method immediately
// bind returns function

// function foo() {
//     console.log(this)

// }

// const fooBind = foo.bind({name: 'Sehee'}) 
// console.log("this", fooBind)
// fooBind()
