'use strict';

const search = require('./carStorageFilePromises');

// console.log(search());

// search().then(console.log).catch(console.log);
// search('model', 'GTX').then(data=>console.log(data)).catch(err=>console.log(err));

// function print(dataArray){
//     for(let car of dataArray){
//         console.log(car.licence);
//     }
// }

// (async () => {
//     try{
//         console.log(await search());
//         console.log('#### one ####');
//         const result = await search('model', 'GTX');
//         console.log(result);
//         console.log('#### two ####');
//         console.log(await search('licence','ABC-1'));
//         console.log('#### three ####');
//     }
//     catch(err){
//         console.log('Sorry!' + err)

//     }
// })();

async function run(){
    try{
        const result = await search();
        console.log(result);

    }
    catch(err){

    }
}

run()