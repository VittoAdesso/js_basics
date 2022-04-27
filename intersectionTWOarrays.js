let one = [ 1,2,3]; 
let two = [4,2,5]; 

// create a var and use filter 
let intersection = one.filter(num => two.includes(num)); 
console.log(intersection); 

// using for 
let interset = (one, two ) => {

    let result = []; 
    // part A
    for ( let i = 0; i < one.length ; i++){
        if (two.indexOf(one[i]) === -1){
            result.push(one[i]);
        }
    }
    for (let i = 0 ; i < two.length ; i ++){
    if (one.indexOf(a2[i]) === -1){
        result.push(a2[i]);
    }
    }
    return result; 
};
