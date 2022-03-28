const runTimeOut = async () => {

    await new Promise((resolve) => {
        setTimeout(function () {
            resolve();
        }, 2000);
    })

    promise.then(() => {console.log('Time out!')})
};

runTimeOut();

// async function getCharacters () {
//     const res = await fetch('https://rickandmortyapi.com/api/character'); 
//     const characters = await res.json() ;
//     console.log(characters); 
// }

// getCharacters();

async function getCharacters () {
    const res = await fetch('https://rickandmortyapi.com/api/character');
    const characters = await res.json();
    console.log(characters);
}

getCharacters();
