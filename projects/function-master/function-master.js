//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
    //returning an array of object's values via Object.values() method
    return Object.values(object);
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
    //returning an array of object's keys via the Object.keys() method
    //creating a string by joining the array
    return Object.keys(object).join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    //create new empty array
    var str = [];
    //use a for in loop to get access to object's values
    for (var key in object) {
        //pushing all of the string values into the str array
        if (typeof object[key] === 'string') {
            str.push(object[key]);
        }
    }
    //returning str array
    return str.join(' ');
    
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    //checking to see if collection is an array
    if(Array.isArray(collection)){
        return "array";
    } else {
        //returning object if collection is not an array
        return "object";
    }
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    //capitalizing the first word in the string via the toUpperCase() method
    //using .slice() to ensure that only the first letter becomes capitalized
   return string[0].toUpperCase() + string.slice(1, string.length);

}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
//      let arr = [];
//   let newArray = string.split(" ");
//   if(newArray.length === 0){
//     return arr.join(" ");
//   }
//   return arr.push(newArray[0].toUpperCase() + newArray.slice(1));
//creating empty array newArr
     let newArr = [];
     //splitting string with .split() method
  let star = string.split(" ");
  //looping over newly created star array 
  for(let i = 0; i < star.length; i++){
      //pushing each word in star array with first letter of each word capitalized
      //using bracket notation and slice method to ensure only the first letter gets capitalized
    newArr.push(star[i][0].toUpperCase() + star[i].slice(1));
  }
  //returning string of newly capitalized star array via .join() method
  return newArr.join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
//returning a string that welcomes the name in the object, with the first letter in name capitalized    
return "Welcome " + object.name[0].toUpperCase() + object.name.slice(1) + "!";
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
    // return `${object.name[0].toUpperCase() + object.name.slice(1)} is a ${object.species[0].toUpperCase() + object.species(1)}`; 
    return object.name[0].toUpperCase() + object.name.slice(1) + " is a " + object.species[0].toUpperCase() + object.species.slice(1);
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
    //checking to see if object noises exists. If not, returning "there are no noises"
    if(!object.noises){
        return "there are no noises";
    }
    //checking ot see if object.noises is an array that isn't empty
    if(!Array.isArray(object.noises) || object.noises.length === 0){
        return "there are no noises";
    }
    //returning a string of the noises array by joining them
    return object.noises.join(" ");

}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
    //creating an array of string via .split() method
    var strSplit = string.split(" ");
    //looping over strSplit array
    for(var i = 0; i < strSplit.length; i++){
        //checking to see if string array contains word in it
        //using toUpperCase() method to avoid case sensitivities
        if(strSplit[i].toUpperCase() === word.toUpperCase()){
            //returning true if such word exists within strSplit array
            return true; 
        }
    }
    return false;
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
    //adding name to object's friend array via the .push() method
    object.friends.push(name);
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
    //returning false if friend's array does not exist
  if(!object.friends){
      return false;
  }
  if(object.friends){
      //looping over friend's array if such array exists
      for(var i = 0; i < object.friends.length; i++){
          //checking to see if name exists within friend's array; 
          //using toUpperCase() method to avoid case sensitivities
          if(object.friends[i].toUpperCase() === name.toUpperCase()){
              return true;
          }
      }
  }
  return false;
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
    //creating an empty array to later push names into
   let nonHomies = [];
   //looping over array to get access to its elements
   for(let i = 0; i < array.length; i++){
       //checking to see if the name in array doesn't match the name we're looking for
       //implementing isFriend function to see if certain elements in the array are not friends with name parameter
       if(array[i].name !== name && !isFriend(name, array[i])){
           //pushing the name into nonHomies array
           nonHomies.push(array[i].name);
       }
   }
   return nonHomies;
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
    if(object[key] === null){
        object[key] = value;
    } else {
        object[key] = value;
    }
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
    let keysArr = Object.keys(object);
    let valsArr = Object.values(object);
    let propArr = valsArr.concat(keysArr);
     
     for(let i = 0; i < array.length; i++){
         if(propArr.includes(array[i])){
             delete object[array[i]];
         }
     }
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
    let newArr = [];
    for(let i = 0; i < array.length; i++){
        if(newArr.indexOf(array[i]) === -1){
            newArr.push(array[i]);
        }
    }
    return newArr;
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}