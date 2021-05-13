/**
 * 
 * 
 * 
 * Functions
 * 
 * Functions are just one of the many JavaScript's resourceful techniques designed to produce a specific task or operation, as many times as needed. 
 * They're resourceful in the way that their code is reusable, meaning we don't have to write the same damn code over and over to produce whatever
 * necessary results. There are different kinds of functions that take on their own unique structure; for instance, some require a function keyword while others 
 * others take on funky arrow syntaxes. Regardless of their makeup, when created and used correctly, all functions operate execute some type of 
 * operation and return a value. 
 * 
 * 
 * Despite the differences in the types functions, functions must all take on the following makeup:
 * 
 * -Parameters: Paramaters are names listed in the function definition that act as placeholders for the data types that are to be passed into the function
 *              operation. All parameters must be enclosed in a parenthesis following the function declaration, but weirdly enough, not all functions 
 *              require those parameters to be filled with datatypes. Sometimes they can just be empty and still do their thing.
 * 
 * -Return: Return statements are crucial to the structure of a function for they indicate ultimately what we want the function to evaluate. Though as 
 *          I learned recently, sometimes you don't even need the return keyword to return something in a function? JavaScript is weird, and I'm still
 *          grappling with all of its complexities. 
 * 
 * -Arguments: Arguments are basically what we want to call our function with. They must match the datatype of the given parameters or else the function 
 *              either won't work or won't make sense.
 * 
 * Alrighty, let's get to function examples
 * 
 * **/
 

 /**
  * Function Declaration
  * A function declaration involves declaring a name or title for a function that is later used when calling said function. The declaration takes place
  * following the function keyword and before the parameters. Like all functions, this function requires some type of operation to take place within the
  * function block which will then be returned with a return statement. 
  * **/
 
function add(num1, num2){  //here we have the function keyword followed by the term "add", which distinguishes this function as a function declaration
    return num1 + num2;//This is the operation the add function will execute. It is using the + symbol to literally add the values of num1 and num2
}

console.log(add(8, 4))//Here we are calling our add function with two numbers that will be added and eventually return 12

/**
 * Function Expression
 * A function expression is essentially a function that's assigned to a variable. The function takes no declaration, but it still uses the function keyword
 * and can also be called with the variable name and the parameters similarly to a function declaration. 
 * 
 * **/
 
 let divide = function(num1, num2){
     return num1 / num2;
 };
 
 console.log(divide(14, 2));//=> 7
 
 
 /**
  * It's important to note that functions have their own scope, and that specific scope is known as Function Scope. Basically whatever variable gets 
  * created in a function stays within that function, meaning that we won't have access to that variable outside of that function. Function scopes are 
  * so restrictive that even nested functions don't have access to scoped variables. However, the function block itself retains access to 
  * variables that are globally or locally scoped. Heck, nested functions even have access to any outer function's parameters! But the specific process
  * of a nested function using an outer function's variable is called closure. Here's an example of that: 
  * **/
 
 
 function multiply10(){
     let num = 10;
     return function(){
         return num * 10; //this function uses the variable num from the the outer function. This is an example of closure
     };
 }
 
 multiply10()//=> 100
 
 
 /**
  * Something like this wouldn't work however:
  * **/
      
function divideby10(){
    let num = 1000; // num is defined in the outer function scope
    return function(){
        return num / 10;//using num from outer function and returning it
    }
}

console.log(num); // The console prints a reference error for num is not defined. 
  
  
/**
 * 
 * There are many other styles of functions to discuss, but for now I leave you with this. Lol
 * **/