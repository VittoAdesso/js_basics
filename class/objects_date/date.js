let date = new Date(); 
console.log(date); 

let year = date.getFullYear(); 
console.log(year); 

// always the month show one less, not the mes in course 
let month = date.getMonth(); 
console.log(month); 

let day = date.getDate(); 
console.log(day); 

// concat all 
console.log( 'Today is' +' '+ day +'/' + month + '/' + year); 