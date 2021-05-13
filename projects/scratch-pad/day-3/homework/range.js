// #!/usr/bin/env node

'use strict';

/**
 * 3: range()
 *
 *  a. Create a function called range that takes two integers as 
 *  parameters and returns an Array containing all integers 
 *  between the two parameters, inclusively.  For example:
 *
 *      range(8, 14);  // => [8, 9, 10, 11, 12, 13, 14]
 *
 *  If the first argument is greater than the second, 
 *  return the range in reverse order, ie:
 *
 *      range(14, 8);  // => [14, 13, 12, 11, 10, 9, 8]
 *
 *  TIPS:
 *  a. create something to collect the output you'll return.
 *  b. you'll need a loop, which one is best?
 *  c. you'll wanna make use of the push() method of Array.
 */
function range(start, end) {
    // YOUR CODE GOES BELOW HERE //
    //create an emtpy array and assign it to arr variable
        var arr = [];
        //create a conditional that checks to see if start is less than or equal to end
    if (start <= end){
        //creating for-loop that loops over values from start to end
        for(var i = start; i <= end; i++){
            //pushing those values into arr
            arr.push(i);
        }
    } else {
        //for(var i = 8; i <= 14; i++)
        //create a for-loop that loops over values from start to end backwards
        for (var i = start; i >= end; i--){
            //pushing those values into arr
            arr.push(i);
        }
    }
    //returning arr;
    return arr;
    
    
    
    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.range = range;
}
