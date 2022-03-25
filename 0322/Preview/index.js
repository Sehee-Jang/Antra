// async 

// let result = []
// function fetchData() {
//     setTimeout(()=> {
//         result = [{name: 'a', age: 18}, {name: 'a', age: 18}]
//     }, 0)
// }

// fetchData();
// console.log(result) // return empty array

// callback

let result2 = []
function fetchData(cb) {
    setTimeout(()=> {
        result2 = [{name: 'a', age: 18}, {name: 'a', age: 18}]
        cb(result2)
    }, 0)
}





function fetchUserData(cb) {
    setTimeout(()=> {
        result = [{name: 'a', age: 18}, {name: 'a', age: 18}]
        cb(result)
    }, 1000)
}



function fetchCompanyData(cb) {
    setTimeout(()=> {
        result = [{companyName: 'google', address: asbd}, {companyName: 'meta', address: cvds}]
        cb(result)
    }, 2000)
}

fetchUserData((userData) => {
    console.log("userData", userData)
    fetchUserData((companyData) => {console.log("companyData", companyData)})
}) 

fetchUserData((userData) => {
    console.log("userData", userData)
    fetchCompanyData((companyData) => {console.log("companyData", companyData);
    alert('hello');
}) 
}) 
// (companyData) => {console.log("companyData", companyData)}
// console.log

