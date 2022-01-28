let map1 = new Map();
map1.set('info', {name: 'Jack', age: "26"});
console.log(map1.get('info'));

//has
console.log(map1.has('info')); // true

//delete & clear
map1.delete('info'); // true
console.log(map1); // Map {}

map1.clear(); // removing all element
console.log(map1); // Map {}

//size
console.log(map1.size); // 1

//Iterate Through a Map
let map1 = new Map();
map1.set('name', 'Jack');
map1.set('age', '27');

for (let [key, value] of map1) {
    console.log(key + '- ' + value); //name- Jack 
}

for (let key of map1.keys()) {
    console.log(key) // name  age
}

// looping through the Map
for (let elem of map1.entries()) {
    console.log(`${elem[0]}: ${elem[1]}`);  //name: Jack age: 27
}

//weakmap
const weakMap = new WeakMap();
console.log(weakMap); // WeakMap {} 
let obj = {};
weakMap.set(obj, 'hello');
console.log(weakMap); // WeakMap {{} => "hello"}