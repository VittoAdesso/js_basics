// Iteración #2: Buscar la palabra más larga

const avengers2 = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];

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


///// or 

const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];

function findLongestWord(avengers) {
  
  let longestWord = avengers[0];
  for (let i = 1; i < avengers.length; i++) {
    if (avengers[i].length > longestWord.length) {
      longestWord = avengers[i];
    }
  }
  return console.log(longestWord);
}

findLongestWord(avengers);