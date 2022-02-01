 //async function
 async function myDisplay() {
  let myPromise = new Promise(function(resolve, reject) {
    resolve("Welcome");
  });
  console.log(await myPromise);
}
myDisplay();
 
 
getFile = async() => {
    let myPromise = new Promise((resolve,reject) => {
    let req = new XMLHttpRequest();
    req.open('GET', "mycar.html");
    req.onload = function() {
        if (req.status == 200) {
          resolve(req.response);
        } else {
          resolve("File not Found");
        }
      };
      req.send();
    });
    console.log(await myPromise);
  }

  getFile();