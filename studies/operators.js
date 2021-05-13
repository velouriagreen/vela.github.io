/**
 * Operators
 * 
 * 
 * 
 * Operators act on data by comparing them or including them in some good ole mathematic equations, roughly speaking. Each operator fits into 
 * a few different categories: arithmetic, logical, string operators, unary operators, etc. 
 * 
 * three different
 * categories depending on how many operands they require for comparison: unary, binary and ternary operators.
 * **/
 
 /**
  * 1. Unary Operators
  * Unary operators consist of single operators that acts on one or two operands by being placed either before or after said operands. Here are just a few
  * examples
  * **/
  
 /**
  * Bang Operator: The bang operator looks more exciting than it actually is by way of its symbol: !. When placed before an operand, the bang operator
  * essentially negates the boolean value of such operand. 
  * **/
  
  let luckyNumber = 7;
  
  if (!luckyNumber){  // here we see the boolean value of the luckyNumber variable being negated by the bang operator
   console.log("dang");
  } else {
   console.log("hot diggity!"); // Because of the negated boolean value in the initial if-statement, the console will print the else-statement
  }
  
  
  /**
   * Typeof: The typeof operator is one that returns a string indicating the type of value of the operand that follows it. Typeof isn't foolproof however;
   * there are several datatypes that don't return the correct value, but that's a conversation for another time. Here's a few examples of how they work:
   * **/
   let earthquakeISurvived = {
    location: "Northridge",
    year: 1994,
    deaths: 57
   };
   
   console.log(typeof earthquakeISurvived);// => "object";
   
   
   /**
    * Logical Operators: 
    * Logical operators are used to determine the logic values between values or variables. They can range from being unary operators (the single and
    * double bang operators are also logical operators) or binary operators (operators that require two operands for comparison). Logical operators
    * are imperative to the construction of control-flow techniques.
    * **/
    
    /**
     * 1. The && Operator
     * The && Operator is one that does tests whether both operands are true. If they are, then the entire statement will ring true in the console. 
     * **/
     const year = 2020;
     const day = "Monday";
     console.log(year === 2020 && day === "Monday");//=> prints true
     console.log(year === 2021 && day === "Gloomy Sunday"); //=> prints false;
     
     /**
      * 2. The || Operator
      * These double pipes indicate the Or Operator and is also a binary operator. The || operator will test the two operands alongside it, and if at least
      * one of them rings true, then the console will recognize its statement as a truthey value. 
      * **/
      
      console.log(9 * 9 > 20 || 7 === 7)//=> prints true since the latter statement on the right side of the || operator is true
      
      /**
       * 3. Double !! Operator
       * While a single bang operatore negates the truthey or falsey value of the operand that follows it, the double bang operator kind of just reiterates
       * the boolean value of the operand. The double bang comes in handy when wanting to prove the boolean value of a variable without the extra work
       * of writing an if-statement. 
       * 
       * **/
       let isNumber;
       isNumber = 34; // variable which is not boolean
       !!isNumber; // returns true
       
       
 /**
 * Arithmetic Operators
 * Arithmetic operators are mostly similar to what we see in the regular math world but with just a few kinks in the syntax. Most arithmetic operators
 * are binary operators. Here's a few of them:
  * **/
  
  // / operator
  25 / 5; //The / operator is the division operator. When used properly with numbers, the console will divide the first operand by the second operand and evaluate a number
  
  // - Operator
  10 - 7; //The - operator denotes subtraction. The number 3 will be printed to the console
  
  // * Operator
  5 * 5; //The * operator multiplies two number values together. The number 25 will print to the console.
  
  // % Operator
  25 % 5 === 0; //The modulo operator is one typically used to verify the remainder of two divided numbers
  
 // + Operator 
 7 + 7;//here we are using the + operator which adds two values together. The console will evaluate the sum of 
 
 /**
  * It's important to note that the + operator also works to combine strings. This process is known as 
  * concatenation
  * **/
  
  console.log("That girl" + " " + " is on fire!");
  
  
  /**
   * Comparison Operators
   * Comparison Operators are binary operators that compare two values and return either a true or false value
   * **/
   
   console.log(8 > 19);//returns false
   console.log(10 <20);//returns true
   console.log(19 >= 4); //returns true
   console.log(3 <= 0); //returns false
   console.log(9 === 9);//returns true 
   console.log(9 == '9');//returns true
   
   
   
   /**
    * The last operator I realize I need to mention is the ternary operator. The ternary operator is one that 
    * can take the place of a simple if-then statment and takes three operands. It's syntax is as follows:
    *            (condition) ? (if true, do this) : (otherwise, do this)
    * **/
let num = 7;

if(num === 7){
 console.log("lucky");
} else {
 console.log("bad");
}
    //This entire if-statement can be written more succinctly as follows:
    
num === 7 ? console.log("lucky") : console.log("bad");

//Ternary Operators only work with two conditional statements and not three, so if ya need an else-if, it won't work.