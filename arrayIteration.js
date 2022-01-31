
//forEach
const numbers = [45, 4, 9, 16, 25,19,23,34];
numbers.forEach(myFunction);

function myFunction(value, index, array) {
  console.log(value);
  console.log(array);
}


//map
const numbers1 = [45, 4, 9, 16, 25, 50, 30];
const numbers2 = numbers1.map(myFunction);

function myFunction(value, index, array) {
  return value * 2;
}
console.log(numbers2+'map array');


//filter
const numbers = [45, 4, 9, 16, 25];
const over18 = numbers.filter(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}
const filterArr = numbers.filter((value, index, array)=> value > 18);
console.log(filterArr);


//reduce
const numbers = [45, 4, 9, 16, 25];
let sum = numbers.reduce(myFunction);

function myFunction(initialValue, value, index, array) {
  return initialValue + value;
}


//reduceRight
const numbers = [45, 4, 9, 16, 25];
let sum = numbers1.reduceRight(myFunction);

function myFunction(total, value, index, array) {
  return total + value;
}

console.log(sum);


//every 
const numbers = [45, 4, 9, 16, 25];
let allOver18 = numbers.every(myFunction);

function myFunction(value) {
  return value > 18;
}

console.log(allOver18+'checked');


//some
const numbers = [45, 4, 9, 16, 25];
let someOver18 = numbers.some(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}

//indexOf
const numbers = [45, 4, 9, 16, 25];
let position = numbers.indexOf(45);
console.log(position);

//lastIndexOf
const numbers = [45, 4, 9, 16, 25];
let position = numbers.lastIndexOf("Apple") + 1;
console.log(position);


//find
const numbers = [4, 9, 16, 25, 29];
let valueFind = numbers.find(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}
console.log(valueFind);



//findIndex
const numbers = [4, 9, 16, 25, 29];
let indexFind = numbers.findIndex(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}
console.log(indexFind);


//Array.from
Array.from("ABCDEFG");



//array.keys
const fruits = ["Banana", "Orange", "Apple", "Mango"];
const keys = fruits.keys();

for (let x of keys) {
  // text += x + "<br>";
  console.log(x);
}

//array.includes
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.includes("Mango"); // is true