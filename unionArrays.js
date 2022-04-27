// Spread Operator : The spread operator ... automatically "expands" an array (or any iterable object) into its individual elements.
// These individual elements can be used in situations where multiple parameters are expected.


// union two or more arrays but withouth delete duplicates 

let nump = [ 2, 4, 5 , 6]; 
let namb = [ 3, 4, 8 , 16]; 

let union = [...nump, ...namb]; 
console.log(union); 

// Method 1 - Merging & Eliminating Duplicates

var array_first = [1, 2, 3, 4];
var array_second = [3, 4, 5, 6];

// concatenation of the arrays , creating new array
var concat_array = array_first.concat(array_second);

// create Set, eliminate duplicates == set is for eliminate duplicates 
var set_ob = new Set(concat_array);

// final array that holds union , creating new array vuoto
var array_union = [];

// iterate through each element of Set
// push each element into final array
for(var element of set_ob) {    
    array_union.push(element); 
}
console.log(array_union);

// Method 2 - Using Spread Operator to Avoid Looping

let arr1 = [ 2, 4, 5 , 6]; 
let arr2 = [ 3, 4, 8 , 16]; 

// merged array
let arrSpreed = [...arr1, ...arr2];

// new array that holds union
// spread expands the Set into its individual values
let union2 = [ ...new Set(arrSpreed)]; 
console.log(union2); 