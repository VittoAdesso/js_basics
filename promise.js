

// A 
// simple structure (i have to know is usual consume promise not created).
const promise = new Promise((resolve, reject) => {
    // i want to executed in any time 
    setTimeout(() =>{
        // say the function 
        resolve(); 
        // i have to declare the time 
    }, 3000); 
}); 

// to consume the promise
promise.then(() =>{
    console.log('i get it'); 
}); 

// is usually to use with fecth 
// structure
fecth('url').then(res => res.json())
.then((resData) => {
    console.log('done'); 
})

// B 

const addItem = (item, list) => {
    const promise = new Promise ((resolve, reject) => {
        if(!list){
            reject('Doesnt existe array'); 
        }

        setTimeout(() => {
            list.push(item);
            resolve(list); 
        }, 2000);
    }); 

    return promise;
}; 

const list = ['bmw', 'audi', "fiat"]; 

addItem('Volvo', list)
    .then((list) => {
        console.log(`Final list: ${list.join(', ')}`);
    })
    .catch((err) => {
        throw new Error(err);
    })

//c

const ticket = getFood();

ticket
	.then(food => eatFood(food))
	.catch(error => getRefund(error));

// D
const promise = new Promise((resolve, reject) => {
    const number = Math.floor(Math.random() * 10);
    
    setTimeout(
        () => number > 5
            ? resolve(number)
            : reject(new Error('Menor a 5')),
        1000
    );
});
    
promise
    .then(number => console.log(number))
    .catch(error => console.error(error));