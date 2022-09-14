'use strict';

const search = require('../carStorageFileCallbackV2');

describe('testing callback', ()=>{
    test('search with licence ABC-1', (done)=>{
        function cb(data){ //cb = callback function
            try{
                expect(data).toEqual([
                    {"model": "Bored T-model", "licence":"ABC-1"}
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

describe('testing callback with test.each', () => {
    const testValues = [
        // key, value, expected result
        ['licence', 'XYZ-1', []],
        ['model','Bored T-model', [
            {"model": "Bored T-model", "licence":"ABC-1"},
            {"model": "Bored T-model", "licence":"GTF-10"}
            ]],
            ['licence', 'B-1', [{"model": "GTX", "licence": "B-1"}]]
    ];

    test.each(testValues)('%s, %s', (key,value,result,done)=>{
        function cb(data) {
            try{
                expect(data).toEqual(result);
                done();
            }
            catch(error){
                done(error);
            }
        }// end of callback function
       
        search(key,value,cb);
    })

})