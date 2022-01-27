
//closure
function greet() {

  let name = 'John';
  function displayName() {
      // accessing name variable
      return 'Hi' + ' ' + name;   
  }
  return displayName;
}

const g1 = greet();
console.log(g1); // returns the function definition
console.log(g1()); // returns the value 'Hi John'


mainFunc = (outData)=> {
 
  function inner(innData) {
      return outData * innData;
  }
  return inner;
}
var callInerr = mainFunc(6);

console.log(callInerr(4)); //24
