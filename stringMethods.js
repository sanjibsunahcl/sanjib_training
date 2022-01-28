// charAt
let text = "HELLO WORLD";
let letter = text.charAt(2); //L
//charCodeAt
let text = "HELLO WORLD";
let code = text.charCodeAt(6); //87
//concat
let text1 = "sea";
let text2 = "food";
let result = text1.concat(text2); //seafood
//endsWith
let text = "Hello World";
let result =  text.endsWith("World"); //true
//fromCharCode
let text = String.fromCharCode(72, 69, 76, 76, 79); //HELLO
//includes
let text = "Hello World, welcome to the universe.";
let result = text.includes("World"); //true
//indexOf
let text = "Hello world, welcome to the universe.";
let result = text.indexOf("welcome"); //13
//lastIndexOf
let text = "Hello planet earth, you are a great planet.";
let result = text.lastIndexOf("planet"); //36
//length
let text = "Hello World!";
let length = text.length;
//localeCompare
let text1 = "ab";
let text2 = "cd";
let result = text1.localeCompare(text2);
//match
let text = "The rain in SPAIN stays mainly in the plain";
let result = text.match("ain"); //ain
//repeat
let text = "Hello world!";
let result = text.repeat(2);
//replace
let text = "Hello world!";
let result = text.replace("world", "sanjib");
//search
let text = "Mr. Blue has a blue house";
let position = text.search("Blue");  //4
//slice
let text = "Hello world!";
let result = text.slice(0, 5); //Hello
let result = text.slice(3); //lo world!
//split
let text = "How are you doing today?";
const myArray = text.split(" "); // ["How","are".....]
//startsWith
let text = "Hello world, welcome to the universe.";
let result = text.startsWith("Hello"); //true
//substring
let text = "Hello world!";
let result = text.substring(1, 4);   //ell
//toLocaleLowerCase
let text = "Hello World!";
let result = text.toLocaleLowerCase(); //hello world!
//toLocaleUpperCase
let text = "Hello World!";
let result = text.toLocaleUpperCase(); //HELLO WORLD!
//toLowerCase
let text = "Hello World!";
let result = text.toLowerCase();  //hello world!
//toString
let text = ["a","b"];
let result = text.toString(); //a,b
//toUpperCase
let text = "Hello World!";
let result = text.toUpperCase();
//trim
let text = "     Hello World!     ";
let result = text.trim();
//valueOf
let text = "Hello World!";
let result = text.valueOf();





















