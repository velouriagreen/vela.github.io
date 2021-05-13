/**
 * CONTROL FLOW:
 * 
 * The smooth flow of our codes are an integral part of the JavaScript world, and some of the best ways we can make that happen is through something called 
 * conditional statements. Conditional statements are kind of like the if-then statements we use in our spoken language (What? You don't If-Then on the
 * daily?) in the sense that they allow us to posit different actions or possibilities whether some condition is true or not. Conditionals too allow us 
 * to perform different actions based on different conditions. 
 * 
 * To put it simply, the basic structure to a conditional statement involves:
 * -If-Statements: statements enclosed within a parenthesis that specify a specific code block which will execute be if found to be true. 
 * -Code Block: blocks of code enclosed by curly brackets that contains the code to be executed if the statement before it proves true
 * - An Else statement that concludes the entire conditional chain. The code within the code block that follows an else statement will only run if 
 *   none of the statements before it produce a true value;
 * 
 * It's important to note that the console will execute the code of the first statement that produces a truth value. Every other statement preceding 
 * the statement that produces a true value will be ignored, so order is certainly something to consider when writing conditionals. 
 * 
 * **/
 
 let number = 7; //declaring a variable hour
 
 if(number >= 7){
     console.log("Hot dang! It's my lucky number!"); //Because of the truthiness of the if-statment, the message within the console.log will print
 } else {
     console.log("Just another number");//The else statement gets ignored 
 }
 
 /**
  * Another aspect to conditionals involve Else-If Statments which are needed when we have to verify the truth value of multiple conditional statments. 
  * Else-if Statments must follow the initial If-Statement and take place before the final Else Statment. 
  * **/
  
  if(2 * 2 === 5){
   console.log("Excuse me, is this 1984?");
  }
  else if(2 * 2 === 4){
   console.log("Nothing like a good, predictable math problem");
  } else {
   console.log("Who even maths these days?");
  }
  //=> Prints out "Nothing like a good, predictable math problem"
  
  
  