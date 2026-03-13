// Accessing elements using DOM

// Using DOM

// let headElement = document.head;
// console.log(headElement);

// let bodyElement = document.body;
// console.log(bodyElement);

// let h1 = document.querySelectorAll("h1");
// console.log(h1);

// let heading = document.querySelector('#heading');
// console.log(heading);

// let classProduct = document.querySelector('.heading');
// console.log(classProduct);

// let divProduct = document.querySelector('.main');
// console.log(divProduct);


//access the h1 element

let heading = document.querySelector('.heading');
//access the button

let btn = document.querySelector('button');

//add event listener to the button

btn.addEventListener('click',()=>{
heading.textContent = "Document Object Model";
heading.style.color = 'red';
heading.style.backgroundColor = 'green';
})



