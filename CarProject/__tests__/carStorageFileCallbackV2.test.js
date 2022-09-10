'use strict';

const search = require('../carStorageFileCallbackV2');

describe('testing callback', ()=>{
    test('search with licence ABC-1', (done)=>{
        function cb(data){ //cb = callback function
            try{
                expect(data).toEqual([
                   { "model": "Bored T-model", "licence": "ABC-1"}
                ])
                done();
            }
            catch(error) {
                done(error);
            }
        } // end of cb
        search('licence','ABC-1',cb);
    })
})

describe('testing the missing callback', () => {
    test('callback missing throws an exception', () => {
        expect(()=>search('licence', 'ABC-1')).toThrow('callback function missing')
    })
})