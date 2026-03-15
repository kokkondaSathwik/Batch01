// JSON can be understood by any teachnology
// It is a technology neutral data format
// JSON stands for JavaScript Object Notation

// object

// let obj = {
//     firstName : 'Sathwik',
//     lastName : 'Kokkonda',
//     age : 22
// }

// JSON data

// {
// "firstName": "Sathwik",
// "lastName": "Kokkonda",
// "age": 22
// }

// The difference between the JSON data and the object 
// keys also have the double quotes
// It always uses the double quotes for the keys and values

// console.log(obj);
// getting JSON data from the object

// let jsonData = JSON.stringify(obj);
// console.log(jsonData);

// APIS

// API stands for Application Programming Interface

// This is the working of GET HTTP request/ AJAX request / API request

fetch('https://jsonplaceholder.typicode.com/users')
// fetch is a method which returns a promise
.then(response => response.json())
// response.json() is a method which converts the JSON data into a JavaScript object
.then(json => console.log(json))
// It is used to print the Javascript object in the console
.catch(error => console.log(error));
// catch is a method which can handle the error if there is any error in the fetch method



