/**
 * DATATYPES
 * 
 * 
 *The JavaScript language bares different data types that are used to build other data structures. At their core, the many different data types 
 * of this language are split into two different categories that constitute how they operate: Primitive and Complex.
 * 
 * 
 * Primitive Data Types: primitive data types are atomic or immutable. This means that they do not hold, collect, or aggregate other values and that operations
 * done unto them simply returns new, simple values as they do not alter the the original value. This is a relief when we think about it, for simple 
 * data types like numbers will never mean anything other than their arithmetic value. The number 5 will always strictly evaluate to the number 5. 
 * 
 * Another thing to note about primitive data types involves the way they are referenced. Primitive data types are copied by value, which means when they're
 * assinged, simple data types are copied from one value to the next. 
 * 
 * 
 * Here's a list of the different primitive data types the JavaScript language holds:
 * 
 * 1. Number
 * Strictly speaking, numbers in the JavaScript world represent the same numeric data we use in our everyday lives, and thank goodness for that predictability. 
 * As mentioned previously, their inherent meaning will not change, though their values may change when computing. 
 * 
 * **/
 var age = 30;
 console.log(age);//=> prints 30
 
 
 /**
  * 2. String
  * According to the internet, "the String object is used to represent and manipulate a sequence of characters." What this really means is that strings 
  * are an excellent way for us to produce regular texts within this convoluted, data entry world. Like arrays, strings are indexed-iterables whose elements
  * can be accessed via bracket notation as well as other various, manipulative methods(terrible pun, I know). In order to declare a string, we must 
  * first assign it to a variable which acts as a placeholder for our string value as seen below:
  * **/
   let nameStr = "Sam";//an example of my name, Sam as a string that's assigned to the nameStr variable
   console.log(nameStr[0]);//=> prints the letter "S";
   
   
   
   /**
    * 3. Booleans
    * Booleans represent two completely unnuanced values: true or false. They are integral to the logic of JavaScript's control flow (if-then statments) in 
    * which specific codes are either executed or not based on their boolean values. Here's a brief example:
    * **/
    
    
    const scoobyDoo = "dog";
    if(scoobyDoo === "cat"){
        console.log ("Look what the cat dragged in!");//although the boolean value of true is not written, it's clear that the initial if statment produces a false value
    } else {
        console.log("Scooby Dooby Doo, where are you?");//the console will print this message
    }
    
    
    /**
     * 4. NaN
     * NaN, also known as not a number, is a simple data type that appears in the console when using a math operation  on data types that aren't
     * real numbers. 
     * **/

 
    console.log(7 / "Heaven"); //prints NaN because you can't divide a number by a string. I mean maybe it's possible somewhere, but not in JavaScript
    
    /**
     * 5. Undefined
     * Undefined is another primitive that appears in the console whenever there's a variable being used that hasn't been assigned to anything yet.
     * Basically, undefined pops up whenever we accidentally mispell the name of a variable or something like that. They're annoying, but they serve as 
     * a helpful reminder to get your damn spelling right at the very least. 
     *  **/
     
     const city = "New Orleans";
     
     console.log(`I live in ${ctiy}`);// since ctiy is undefined;
     
     
     
     /**
      * 6. Null
      * Null denotes the intentional absence of value while also being treated as a falsey boolean value. We can assign something to a null value as a placeholder
      * for another value we wish to replace it with later in our code. The main difference between undefined and null involves their reference; whereas 
      * undefined doesn't point to a global object, null indicates a variable that points to no object.
      * 
      * **/
      
      function isEmpty(value) {
      return value == null;
      isEmpty(42);                // => false
     isEmpty({ prop: 'Value' }); // => false
     isEmpty(null);              // => true
     isEmpty(undefined);         // => true
 
 
 /**
 * Complex Data Types: Unlike primitive data types, complex data types are immutable as they aggregate other values and are indefinite in size. Complex
 * data types are also copy by reference. This is because variables are limited in of which they are able to store in memory, meaning that 
 * when complex data types are assigned to a variable, they can only be done so by a memory address and not the value itself.
 * 
 * Examples of complex data types include the following:
 * 
 * 1. Arrays
 * Arrays are indexed iterables whose elements are contained within square brackets. Once declared to a variable, arrays can store just 
 * about any data type while also having an indefinite size.  
 **/
 
const newArray = [1, 2, 3, ["inner array"], function(){return "Inner Function"}];

console.log(newArray[3]);//=> prints ["inner array"];

newArray.push(2021));//using an array method to add to the end of the array
console.log(newArray)//=> [1, 2, 3, ["inner array"], function(){return "Inner Function"}, 2021];


/** 
 * 2. Objects
 * Technically speaking, almost everything in JavaScript is an object. The objects I'm gonna talk about right now though are collections
 * of named values. Ojects hold key-value pairs (also known as properties), which makes them ideal candidates to list things. The keys are 
 * generally strings whereas the values can be any datatype at all--even another object! Like arrays, they can grow up to immense sizes or stay small.
 * And though they can't be accessed through their indexes (because they don't bare any), objects can be accessed through bracket or dot notation. 
 * 
 **/
 
 let personObj = {
  name: "Sam",
  age: 200,
  isHuman: true,
  location: {currentCity: "NOLA",
             birthplace: "Los Angeles"
  }
 }
 
 /**
  * 3. Functions
  * Functions are reusable code designed to perform specific tasks. Check out my functions section for more on functions! Any way, here's an example:
  * **/
  function add(num1, num2){
   return num1 + num2
  };
  
  console.log(add(8, 14)) //prints the sum of 8 and 14, which is 22
  
  
  
  
  
 