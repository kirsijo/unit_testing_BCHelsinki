// carStorageFilePromises.js

'use strict';

const fs=require('fs');
const storageFilePath = './cars.json';

module.exports=(key,value)=> {
    return new Promise((resolve,reject)=>{
        fs.readFile(storageFilePath, 'utf-8',(err,data)=>{
            if(err) {
                reject(err);
            } else {
                let found = [];
                const cars=JSON.parse(data);
                if(key && value) {
                    for(let car of cars){
                        if(car[key]===value)
                        found.push(car);
                    }
                } else {
                    found=cars;
                }
                resolve(found);
            }
    
        })
})
}