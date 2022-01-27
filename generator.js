  //generator function
  function * number() {
    var num = 10;  
    while (true) {
       yield num--; 
    }
 }
 var genObj = number();
 console.log(genObj.next().value); //10
 console.log(genObj.next().value); //9
 console.log(genObj.next().value);  //8


 //generator iterable 
 function* generateSequence() {
   yield 1;
   yield 2;
   return 3;
 }
 
 let generator = generateSequence();
 for(let value of generator) {
   console.log(value); // 1, then 2
 }