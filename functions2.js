// 1 - find the biggest number

let numberOne = 3; 
let numberTwo = 5; 

const bigger = () => {
    if(numberOne > numberTwo){
        return numberOne; 
    } else {
        return numberTwo; 
    }
}

console.log(bigger()); 

// 2 find the largest word

const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];

function findLongestWord(param) {
    let longestWord = param[0];
    for (let i = 1; i < param.length; i++) {
    if (param[i].length > longestWord.length) {
        longestWord = param[i];
    }
    }
    return console.log(longestWord);
}
findLongestWord(avengers);

// sum 

const numbers = [1, 2, 3, 5, 45, 37, 58];

const sumArray = (caja) => {
    let sum = 0;
    for (let i = 0; i < caja.length; i++) {
    sum += caja[i];
    }
    return console.log(sum);
}
sumArray(numbers); 