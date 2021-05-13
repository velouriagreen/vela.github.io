// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

var _ = {};


/**
* START OF OUR LIBRARY!
* Implement each function below its instructions
*/

/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/
_.identity = function(value){
    return value;
};

/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/
_.typeOf = function(value){
    //checking if value is an array via the Array.isArray method
    if(Array.isArray(value)){
        return "array";
    }
    //checking to see if value is strictly equal to undefined
    if(value === undefined){
        return "undefined";
    }
    //checking to see if value is strictly equal to null
    if(value === null){
        return "null";
        //returning string of other data types that test well with typeof
    } else {
        return typeof value; 
    }
};

/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/
_.first = function(array, number){
    //creating an empty array to return later
     let newArr = [];
     //checking to see if the array is not an array or if number is negative
    if (!Array.isArray(array) || number < 0) { 
        //returning empty array if so
        return [];
        //checking to see if typeof number is not "number"
    } else if (typeof number !== 'number') { 
        //returning the first index of the array
        return array[0]; 
        //checking to see if number is larger than the length of array and returning the array if so
    } else if (number >= array.length) { 
        return array; 
    } else { 
        //looping up to number and returning indexes in array that didn't pass conditional statements
        for (let i = 0; i < number; i++) { 
            newArr.push(array[i]);
        }
        //returning newArr
        return newArr;
    }
};


/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/
_.last = function(array, number){
   //creating an empty array to return later
     let newArr = [];
     //checking to see if the array is not an array or if number is negative
    if (!Array.isArray(array) || number < 0) { 
        //returning empty array if so
        return [];
        //checking to see if typeof number is not "number"
    } else if (typeof number !== 'number') { 
        //returning the last index of the array
        return array[array.length - 1]; 
        //checking to see if number is larger than the length of array and returning the array if so
    } else if (number >= array.length) { 
        return array; 
    } else {
        for(let i = array.length - number; i < array.length; i++){
            newArr.push(array[i]);
        }
     return newArr; 
    }
    
};

/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/
_.indexOf = function(array, value){
    //assigning variable to result to -1 which will later be returned if no index value matches value
  let result = -1;
  //looping over array
  for (let i = 0; i < array.length; i++){
      //checking to see if any array indexes match the result and if the result variable is also true
      if(array[i] === value && result === -1){
          //re-assigning result to index value
          result = i;
      }
  }
  //returning result
  return result;
};

/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/
_.contains = function(array, value){
    //assigning variable bool to equal false boolean value
    let bool = false;
    //looping over array
    for(let i = 0; i < array.length; i++){
        //checking to see if any indexes in array are equal to value
        if(array[i] === value){
            //re-assigning bool to true if any index does match value
            bool = true;
        }
    }
    //returning bool
    return bool;
};

/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/
_.each = function(collection, func){
      if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            func(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            func(collection[key], key, collection);
        }
    }
};

/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/
_.unique = function(array){
        let newArr = [];
    for(let i = 0; i < array.length; i++){
        if(newArr.indexOf(array[i]) === -1){
            newArr.push(array[i]);
        }
    }
    return newArr;

};

/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/
_.filter = function(array, func){
    //create an empty array 
    let arr = [];
    //looping over array 
    for(let i = 0; i < array.length; i++){
        //using func to see if each element in array is true, and if so, pushing those values into arr
        if(func(array[i], i, array) === true){
            arr.push(array[i]);
        }
    }
    //returning arr
    return arr; 
    
};

/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter()
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/
_.reject = function(array, func){
    let newArr = [];
    for(let i = 0; i < array.length; i++){
        if(func(array[i], i, array) === false){
            newArr.push(array[i]);
        }
    }
    
    return newArr;
};

/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/
_.partition = function(array, func){
    let partitioned = [];
    let part1 = _.filter(array, func);
    let part2 = _.reject(array, func);
    
    partitioned.push(part1);
    partitioned.push(part2);
    
    return partitioned; 
};


/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/
_.map = function(collection, func){
    let resultArr = [];
    if(Array.isArray(collection)){
        for(let i = 0; i < collection.length; i++){
            let element = collection[i];
           resultArr.push(func(element, i, collection)); 
        }
    } else {
        for(let key in collection){
            let value = collection[key];
            resultArr.push(func(value, key, collection));
        }
    }
    
    return resultArr; 
};

/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/
_.pluck = function(collection, key){
    return _.map(collection, function(item){
        return item[key];
    })
};

/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/
_.every = function(collection, func){
  let boolean = true; 
     const fxn =  typeof func === "function";
  if(Array.isArray(collection)){
      for(let i = 0; i < collection.length; i++){
         if(fxn ? !func(collection[i], i, collection) : !collection[i]){
             boolean = false; 
          }
      }
  } else {
      for(var key in collection){
          if(fxn ? !func(collection[key], key, collection) : !collection[key]){
              boolean = false; 
          }
      }
  }
    return boolean; 
}

/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/
_.some = function(collection, func){
  let bool = false;
  if(func === undefined || func === null){
      _.each(collection, function(val, i, coll){
          if(val){
              bool = true;
          }
      })
  } else {
    _.each(collection, function(val, i, coll){
        if(func(val, i, coll)){
            bool = true; 
        }
    })  
  }
    return bool; 
}

/** _.reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/
_.reduce = function(array, func, seed){
   let previousResult;
   if(seed !== undefined){
       previousResult = seed;
       _.each(array, function(element, i, array){
           previousResult = func(previousResult, element, i, array);
       })
   } else {
       previousResult = array[0];
       for(let i = 1; i < array.length; i++){
           previousResult = func(previousResult, array[i], i, array);
       }
   }
   return previousResult;
};

/** _.extend
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/
_.extend = function(object1, object2){
  let args = arguments;
  for(let i = 1; i < args.length; i++){
      let mainObj = args[i];
      for(let key in mainObj){
          object1[key] = mainObj[key];
      }
  }
  return object1;
}
//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}
