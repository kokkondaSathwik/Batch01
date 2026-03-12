// Async Behaviour can be implemented using two ways:
// Timerfunctions and Promises

// Promise means which happens in the future.

// You Promise to your friend that to call him in the next 5 min

console.log("You promised your friend to call him in the next 5 min");

console.log("Yor friend is waiting for your call...");



let futureCondition = false;

// Create a Promise (you)


let phoneCallPromise = new Promise((fulfilled, rejected)=>{
    setTimeout(() => {
        if(futureCondition === true){
            fulfilled("Hello....friend");
        }
        else{
            rejected("Sorry...I can't call you");
        }
    }, 5000);
})



// Consume a Promise (your friend)

phoneCallPromise
.then((successMessage)=>{console.log(successMessage);})
.catch((errorMessage)=>{console.log(errorMessage);})