// 1.1 Crea un bucle for que vaya desde 0 a 9 y muestralo por consola.

for ( let i = 0 ; i < 10 ; i ++){
    console.log(i);
};

// 1.2 Crea un bucle for que vaya desde 0 a 9 y muestralo por consola solo 
// cuando el resto del numero dividido entre 2 sea 0.

for ( let a = 0; a < 10 ; a++){
// % is important to use 
    if ( a % 2 === 0){
        console.log(a); 
    }
};

// 1.3 Crea un bucle para conseguir dormir contando ovejas. 
// Este bucle empieza en 0 y termina en 10. 
// Muestra por consola un mensaje diciendo 'Intentando dormir' en cada vuelta del bucle 
// y cambia el mensaje en la última vuelta a 'Dormido!'.

for (let sleep = 0; sleep <10 ; sleep++ ){
    if ( sleep <= 9 ){
        console.log('Intentando dormir')
    } if ( sleep === 9) {
        console.log('Dormido!')
    }
};

// better code is 

for ( let sleep = 0; sleep < 10 ; sleep ++){
    if ( sleep === 9){
        console.log('Dormido!'); 
    } else {
        console.log('Intentando dormir')
    }
};