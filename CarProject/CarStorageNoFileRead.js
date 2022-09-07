// carStorageNoFileRead

'use strict';

const cars = require('./cars.json');

module.exports = (key, value) => {
    let found = [];

    if(key && value) {
        for(let car of cars){
            if(car[key]===value)
            found.push(car);
        }
    } else {
        found=cars;
    }
    return found;
} 