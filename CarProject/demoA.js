'use strict';

//const search=require('./CarStorageNoFileRead');
//const search=require('./carStorageFileVersionNotWorking');

const search=require('./carStorageFilePromises');

console.log(search());
console.log('#### one ####');
console.log(search('model','Nova'));
console.log('#### two ####');
console.log(search('licence','ABC-1'));
console.log('#### three ####');
