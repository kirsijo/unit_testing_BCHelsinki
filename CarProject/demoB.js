'use strict';

const search=require('./carStorageFileCallback');

search(console.log);
console.log('#### one ###');
search(console.log, 'model', 'Bored T-model');
console.log('#### two ####');
search(data=>console.log(data),'licence','ABC-1');
console.log('##### three ####');
search(printData, 'model','Nova');

function printData(data){
    console.log('############');
    console.log(data);
    console.log('############')
}