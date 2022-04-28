let persona = {
    // atrubuto
    name : 'Jhon', 
    age: 34, 
    // function
    sayHello : function () {
        console.log('Hola');
    }
}

// to see
console.log(persona);
// to see name
console.log(persona.name);
/// to see 
console.log(persona.sayHello());
// better use 
persona.sayHello(); 

// 2nd ex
let pet = {
    // atrubuto
    name : 'Kala', 
    age: 4, 
    // function
    sayHello2 : function () {
        console.log('Hola' + ' ' + this.name);
    }
}

pet.sayHello2(); 