'use strict';

module.exports = class bookStorage{
    constructor(data){
        if(!data) throw new Error('data storage missing');
        this.bookData=data;
    }

    
}