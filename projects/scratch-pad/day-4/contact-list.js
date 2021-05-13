// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following methods:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 *      5. add a printAllContactNames() Function to your makeContactList() factory. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Kaelyn Chresfield
 *          
 *          WARNING: To pass this test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) {
//return an objectt with each property inside of it
    return {
        id: id,
        nameFirst: nameFirst,
        nameLast: nameLast
    };
} 


function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
     //creating contacts array and assigning it to an empty array
    var contacts = [];
    
    return {
        // we implemented the length api for you //
        length: function() {
            return contacts.length;
        },
        addContact: function(contact){
            contacts.push(contact);
         
    },
    findContact: function(fullName){
        //looping over contacts array
        for(let i = 0; i < contacts.length; i++){
            //creating full variable and assigning it to the nameFirst and nameLast properties
            let full = `${contacts[i].nameFirst} ${contacts[i].nameLast}`;
            //returning contact if fullName matches full variable
            if (full === fullName){
                return contacts[i];
            }
        }
    },
    removeContact: function(contact){
        //looping over contacts array to get access to each contact
        for(var i = 0; i < contacts.length; i++){
            //finding the contact index in which we want to remove
            if(contacts[i].nameFirst === contact.nameFirst){
                //using .splice method to remove the contact
               return contacts.splice(i, 1);
            }
        }
    },
    
    
    printAllContactNames: function(){
        //Declare names array
        let names = [];
        //loop over contacts to get access to each contact object
        for(var i = 0; i < contacts.length; i++){
            //add each full name to the names array
            names.push(`${contacts[i].nameFirst} ${contacts[i].nameLast}`);
        }
        //join the array together as one string using .join
        return names.join("\n");
    }
    
    
    
    
};

}




// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
