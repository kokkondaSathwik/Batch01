// Async JS can be implemented using Promises and Timer functions

// Promise has 3 imp stages
// 1. Pending
// 2. fulfilled
// 3. rejected

// Real world example regarding the promise

console.log("Friend1 promised the friend2 to call him after 5 sec ")

console.log("Friend2 is waiting for the call from friend1")

// You(friend1) promise to your friend2 that you will call him in the next 5 sec
let futureCondition = false;

// create a promise (you)
// The default stage of the promise is pending.


 let phoneCallPromise = new Promise((fulfilled,rejected)=>{
    setTimeout(() => {
        if(futureCondition === true){
            fulfilled("Hello.....friend2");
        } else {
            rejected("Sorry friend .... Im busy");
        }
        
    }, 5000);
 })


 // To consume the promise

phoneCallPromise
.then((successMessage)=>{console.log(successMessage)})
.catch((errorMessage)=>{console.log(errorMessage)})


//  console.log(phoneCallPromise)