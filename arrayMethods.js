//to string
const arrData = ["A", "B", "C", "D"];
console.log(arrData.toString()); 

//Push Pop
const arrData = ["A", "B", "C", "D"];
console.log(arrData.pop()); 
console.log(arrData.push(E));

//shift unshift
const arrData = ["Banana", "Orange", "Apple", "Mango"];
console.log(arrData.shift());
console.log(arrData.unshift("Kiwi"));

//Changing elements & length
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits[0] = "Kiwi"
fruits[fruits.length] = "Lemon";

//Concat
const fruits = ["Banana", "Orange", "Apple", "Mango"];
const vegetables = ["potato", "onion"];
const myChildren = fruits.concat(vegetables);

const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];
const arr4 = arr1.concat(arr2, arr3);

const arr1 = ["Emil", "Tobias", "Linus"];
const arr = arr1.concat("Peter"); 

//splice and slice
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");

const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(2);
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1, 3); //Orange,Lemon

//sort
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
  //functiona
const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a - b});
  //arrow
const numArr = [40, 100, 1, 5, 25, 10];
numArr.sort((a,b)=>a-b);
 //random sort
numArr.sort((a, b) =>0.5 - Math.random());

//Math.max Math.min
function myArrayMax(arr) {
    return Math.max.apply(null, arr);
}
const numArr = [40, 100, 1, 5, 25, 10];
console.log(myArrayMax(numArr));

function myArrayMin(arr) {
    return Math.min.apply(null, arr);
}







