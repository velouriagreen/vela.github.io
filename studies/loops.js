/**
 * 
 * 
 * Loops are handy, if you want to run the same code over and over again, each time with a different value. They're also an excellent way to access the 
 * elements of iterables, like strings and arrays. There are different types of loop, each with a specific syntax, but generally speaking, they do
 * similar things.
 * 
 * 
 * First thing we're gonna go over are the ever-so-famous For-Loop!
 * The for-loop is perhaps most used of all of the loops as it works well with accessing the elements of arrays. 
 * 
 * The for loop has the following syntax:
 * for (statement 1; statement 2; statement 3) {
  //code block to be executed
}
Statement 1 is executed (one time) before the execution of the code block.

Statement 2 defines the condition for executing the code block.

Statement 3 is executed (every time) after the code block has been executed.

Here's an example of that it really looks like though:
 * **/
 
 for(let i = 0; i < 8; i++){
     console.log("hi");
 }//prints "hi" to the console eight times.
 
 
 //And here's an example of using a for-loop over an array
let arrayOfNums = [1, 2, 3, 4, 5, 6, 7];
 for(let i = 1; i <= arrayOfNums.length; i++){
     console.log(i);
 }// => 1, 2, 3, 4, 5, 6, 7
 
 
 /**
  * In the previous example, we looped over the array and printed the array's indexes. Here's an example of using a for-loop to print an array's values
  * **/
  
  let arrayOfNumsAndStrings = [1, "two", 3, 4, "five", 6, 7];
 for(let i = 0; i <= arrayOfNumsAndStrings.length; i++){
     console.log(arrayOfNums[i]);
 }// prints the array's values => 1, "two", 3, 4, "five", 6, 7
 
 
 /**
  * While Loops
  * 
  * While loops are the less-used and often forgotten sibling of the for-loop, but they're still convenient when we want to use a loop simply to execute 
  * a block of code WHILE some truth is applicable. 
  * 
  * The syntax for a while loop is as follows:
  * 
  *        while (condition) {
         // code block to be executed
                }
  * **/
    
 while (i < 10) {
  text += "The number is " + i;
  i++;
}
  