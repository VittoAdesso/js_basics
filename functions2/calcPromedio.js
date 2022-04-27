// Iteración #4: Calcular el promedio

const numbers = [12, 21, 38, 5, 45, 37, 6];
function average(param) {

let sum = 0; 

for ( let i = 0; i < param.length ; i++){
    sum += param[i]; 
}
    return console.log( sum / param.length); 
}

average(numbers); 