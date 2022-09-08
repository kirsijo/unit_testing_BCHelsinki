//carStorageFileCallbackV2.js

'use strict';

const fs=require('fs');

const storageFilePath = './cars.json';

//cbf is a callback function
module.exports=(cbf,key,value)=>{
    if(typeof cbf !=='function'){
        throw new Error('callback function missing');
    }
    // readfile method takes path, format and 
    fs.readFile(storageFilePath, 'utf-8',(err,data)=>{
        if(err) {
            cbf(err);
        } else {
            let found = [];
            const cars=JSON.parse(data);
            if (key && value) {
                for(let car of cars){
                    if(car[key]===value) {
                    found.push(car);
                    }
                }
            } else {
                found=cars;
            }
            cbf(found);
        }
    })
}