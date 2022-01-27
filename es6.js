//arrow function
const x = (x, y) =>  x * y ;
console.log(x(5,6));

//for of
const cars = ["Sanjib","Sysco","BMW", "Volvo", "Mini"];
let vehicle = "";
for (let x of cars) {
  vehicle += x + " ";
}
console.log(vehicle);

let language = "JavaScript";
let text = "";
for (let x of language) {
    text += x + " ";
}

//Map object
const apples = {name: 'Apples'};
const bananas = {name: 'Bananas'};
const oranges = {name: 'Oranges'};

const fruits = new Map();
fruits.set(apples, 500);
fruits.set(bananas, 300);
fruits.set(oranges, 200);

console.log(fruits.get("apples"));

//Set
const letters = new Set();

letters.add("a");
letters.add("b");
letters.add("c");
console.log(letters);

//Promise
const myPromise = new Promise((resolve, reject) => {    
    let condition=9;       
    if(condition<0) {      
        resolve('Promise is resolved successfully');    
    } else {      
        reject('Promise is rejected and catch()');    
    }  
});  
myPromise.then((message) => {   
    console.log(message);  
}).catch((message) => {   
    console.log(message);  
});  

//Symbol
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  };
  
let id = Symbol('id');
person[id] = 140353;
console.log(person[id]); //140353

//Default parameter
function parameterFunction(x, y = 10) {
    // y is 10 if not passed or undefined
    return x + y;
  }
parameterFunction(5); // will return 15


//rest parameter
function sum(...args) {
    let sum = 0;
    for (let arg of args) sum += arg;
    return sum;
  }
 console.log(sum(4, 9, 16, 25, 29, 100, 66, 77));

 //String methods
 let text = "Hello world, welcome to the universe.";
 text.includes("world")    // Returns true

 let text = "Hello world, welcome to the universe.";
text.startsWith("Hello")   // Returns true

var text = "John Doe";
text.endsWith("Doe")    // Returns true

//Array method
Array.from("ABCDEFG")   // Returns [A,B,C,D,E,F,G]

  //array.keys()
const fruits = ["Banana", "Orange", "Apple", "Mango"];
const keys = fruits.keys();

let text = "";
for (let x of keys) {
    console.log(x);
  text += x + "<br>";
}
 
//array.find
const numbers = [4, 9, 16, 25, 29];
let checkFind = numbers.find(myFunction = (value, index, array) =>  value > 18);
console.log(checkFind);


