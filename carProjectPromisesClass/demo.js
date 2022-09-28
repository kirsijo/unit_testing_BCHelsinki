'use strict';

const Storage = require('./carStorageClass');

const carStorage=new Storage('./cars.json');

carStorage.find('model','Nova').then(console.log).catch(console.log);

