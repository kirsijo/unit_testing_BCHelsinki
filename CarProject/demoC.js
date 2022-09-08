'use strict';

const search = require('./carStorageFileCallbackV2');

try {
    search('null', 'null',console.log);
}
catch(err){
    console.log(err.message);
}

search('licence','ABC-1', console.log);