const setData = new Set();
// Add Values to the Set
setData.add("a");
setData.add("b");
setData.add("c");

console.log(setData);


setData.forEach((value)=> console.log(value))

console.log(setData.values());

//list of
const letters = new Set(["a","b","c"]);
let text = "";
for (const x of letters.values()) {
  console.log(x);
}
letters.clear();      //{}
letters.delete("a"); //b,c

const set = new Set(["a","b","c"]);
var itr=set.entries();  
 for(let elements of itr) {  
    console.log(elements);
  } 
  
  
  

