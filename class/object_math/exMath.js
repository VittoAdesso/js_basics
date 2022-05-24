function generateNumAlleatory (maxNum) {
    // return Math.ramdon() * maxNum; 
    // para redondearlo
    return Math.round(Math.random() * maxNum); 
}

generateNumAlleatory(100); 

console.log(generateNumAlleatory(100));