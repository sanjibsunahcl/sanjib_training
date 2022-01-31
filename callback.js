function myDisplayer(some) {
  document.getElementById("demo").innerHTML = some;
}
function myCalculator(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum);
}
myCalculator(5, 5, myDisplayer);


//callback in asynchronous
function myDisplayer(some) {
    console.log(some);
  }
  
  function getFile(myCallback) {
    let req = new XMLHttpRequest();  //server interaction
    req.open('GET', "mycar.html");
    req.onload = function() {
      if (req.status == 200) {
        myCallback(this.responseText);
      } else {
        myCallback("Error: " + req.status);
      }
    }
    req.send();
  }
  
  getFile(myDisplayer); 