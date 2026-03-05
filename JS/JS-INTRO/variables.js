// console.log('Hello World')
// console.log("Hello World")
// console.log("Hello World");


//Javascript is a Dynamically Typed Language,It can store any datatype while declaring.
// let a;
// a = 25;
// console.log("The value of a is:", a);
// console.log("The dataype of a :" , typeof a);

// a = "Hello"
// console.log("The value of a is:", a);
// console.log("The dataype of a :" , typeof a);

// a = false;
// console.log("The value of a is:", a);
// console.log("The dataype of a :" , typeof a);

// single line comments

/*
This is a multi line comment
This is a multi line comment
This is a multi line comment
*/

// let x = '10';
// let y = '20';
// let sum = x + y;
// console.log(sum);

// let a = 10;
// let b = 3;

// let result = a ** b;
// console.log(result);

// let result = a % b;
// console.log(result);

// let x = 123;
// let y = '123';

// Equal operator only checks the value and not the datatype.
// console.log(x == y)
// Strict equal operator checks both value and datatype.
// console.log(x === y)

// Decision making statements

// let a = 10;
// let b = 10;

// if (a > b){
//     console.log("a is greater than b");
// }
// else if (a == b)
// {
//     console.log("a is equal to b");
// }
// else{
//     console.log("b is greater than a");
// }

// loops
//for loop

// for(let x = 1; x<=5; x++)
// {
//     console.log("For loop", x);
// }

// while

// let x =1;
// while(x<=5)
// {
//     console.log("While loop");
//     x++;
// }

//branching statements

//switch

// let choice = 4;

// switch(choice)
// {
//     case 1:
//         console.log("First Choice");
//         break;
    
//     case 2:
//         console.log("Second Choice");
//         break;

//     case 3:
//         console.log("Third Choice");
//         break;

//     default:
//         console.log("Invalid choice and choose the choice in between 1 to 3");
// }


// normal convention

// let a = 10;
// let person = 'Sathwik'
// let age = 10;

// camel case convention

// let firstNameOfPerson = 'Sathwik';
// let ageOfThePerson = 10;

// function declaration to find the sum of two numbers
// At the time of declaring a function the variables are called as parameters.
// function findSumOfTwoNumbers(a,b)
// {
//     let sum=a+b;
//     return sum;
// }
// At the time of calling a function the variables are called as arguments.
// let result = findSumOfTwoNumbers(10,20);
// console.log(result);

// let result2 = findSumOfTwoNumbers(12345,67485);
// console.log(result2);


//Anonymous function is a function without a name and it is stored in a variable.

// let findSum = function(a,b)
// {
//     let sum=a+b;
//     return sum;
// }

// let result =findSum(10,20);
// console.log(result);

// 4 types
// 1. Function declaration
// 2. Function calling
// 3. Storing the function result into a variable
// 4. Printing to the console.

// Arrays

//definition
// Array is a collection of homogeneous data in a consecutive memory locations.

// Array Declaration



// let names = ['Sathwik','Poojitha','Hema','Vajra','Jamuna'];

// let booleanArray = [true,false,true,false];


// console.log(arr);

// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);
// console.log(arr[4]);

// for(let index = 0;index < 4;index++)
// {
//     console.log(arr[index]);
// }


// arr doesnot have a fixed dataype it takes the datatype of object.
// console.log(typeof arr);




//static array doesnt change from the start of the program.
// let students = [1,2];
//dynamic array is possible also in the compilation.
// let students = [];

// let arr = [10,20,30,40];
// console.log(arr);

// console.log(arr.length);

// let l1 = arr.unshift(1,2);

// console.log(arr);
// console.log(l1);

// insertion of elements at the end of the array

    // let l2 = arr.push(100,200);
    // console.log(arr);
    // console.log(l2);

    // arr.splice(2,0,123);
    // console.log(arr);


// Removing the first element of the array
// arr.shift();
// console.log(arr);

//Removing the last element of the array
// arr.pop();
// console.log(arr);

//Removing the element 
// arr.splice(1,1);
// console.log(arr);




// Objects

// to create the student object with the sno,name,age and city as properties.

// let student = {
//     sno : 100, //it is property - 1 sno is key and 100 is the value of the key.
//     name : 'Sathwik',
//     age : 21,
//     city : 'Hyderabad'
// }

// In Key we have to take the strings without quotes
// But in the values we can take the strings with quotes. 


// console.log(typeof student);


// accessing the properties of the object

// console.log(student.sno);
// console.log(student.name);
// console.log(student.age);
// console.log(student.city);




// Object Operations
// Objects are unordered collection of data and it stores the key value pairs in the alphabetical order.

//Accessing the properties of the object
// console.log(emp.eno);
// console.log(emp.name);
// console.log(emp.city); //undefined

//For Iteration over the properties of the object we have to use for in loop

// for(let x in emp){
//     console.log(emp[x]);
// }

// let emp = {
//     eno:100,
//     name : 'Sathwik'
// };


// Inserting the new properties dynamically

// emp.city = 'Hyderabad'
// console.log(emp);
// emp.age = 21
// console.log(emp);


//Updating the existing properties of the object
// emp.name = 'Sathwik Charry';



// deleting the properties of the object
// delete emp.eno;
// console.log(emp);


// complex object the object which contains the non primitives as its key value pairs is called as complex object.


// let student = {
//     sno : 100,
//     name : 'Sathwik',
//     marks : [98,65,68],
//     address: {
//         street : 'Bachupally X road',
//         pincode : 506313,
//         city : 'Hyderabad',
//         state : 'Telangana'
//     }
// }

// console.log(typeof student);

// console.log(student);
// console.log(student.sno);
// console.log(student.name);
// console.log(student.marks);
// console.log(student.marks[0]);
// console.log(student.marks[1]);
// console.log(student.marks[2]);
// console.log(student.address);
// console.log(student.address.street);
// console.log(student.address.pincode);
// console.log(student.address.city);
// console.log(student.address.state);

// requirements
// person object
// properties : id,name,age
// whats the best approach to create the 100 person objects with the above properties?

// so the answer is the class


// First i try to create the person object blueprint

class Person{

    constructor(id,name,age)
    {
        this.id = id;
        this.name = name;
        this.age = age;
    }
    // we are using this keyword to refer the current object which is being created by the class. eg person56 id this.id = id;
}

let person1 = new Person(1,'Sathwik',21);
console.log(person1);

let person2 = new Person(2,'Hema',20);
console.log(person2);

let person3 = new Person(3,'Poojitha',19);
console.log(person3);



// constructor is a special function but when the function which is using inside the class it becomes the method;
// function outside the class or object is called as function only
// but the same function when we are using inside the class or object it becomes the method.
























































