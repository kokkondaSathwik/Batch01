// DOM
// Document Object Model

// Accessing the element of DOM

// I want to access the head of the HTML document

// let headElement = document.head;
// console.log(headElement);

// let bodyElement = document.body;
// console.log(bodyElement);

// JS can access head and body using document only
// we cant access the other elements of the HTML document using document
// To access the other elements we are going to use querySelector() method or querySelectorAll() method

// To access the h1

// let divElement = document.querySelector(".main");
// console.log(divElement);

let heading = document.querySelector(".heading");

let btn = document.querySelector("button");

// Im giving interactiveness to the button

// addEventListener() method takes 2 arguments, first is the event and second is the callback function

btn.addEventListener("mouseover",()=>{

heading.textContent = "Document Object Model";
heading.style.color = "red";
heading.style.backgroundColor = "green";
})




