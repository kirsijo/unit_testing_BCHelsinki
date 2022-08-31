'use strict';

const phones = require('../phones.json');
const PhoneRegister = require('../phoneRegister.js');

describe('Testinf constructor', ()=> {
    test('Test that the missing parameter throws an exception', () => {
        expect(()=>new PhoneRegister()).toThrow('phone data missing');
    })
    // test('Just for an example. Create object with default data',()=>{
    //     const register=new PhoneRegister(phones);
    //     expect(register.phoneData).toEqual(phones);
    // })
})

describe('Testing getTypes', ()=>{
    test('Test 1: use fault data', ()=>{
        const register=new PhoneRegister(phones);
        expect(register.getTypes()).toEqual(["home", "work","mobile"]);
    });
    test('Test 2: persons have no phones', ()=>{
        const testData = [
            {
                "firstname":"Leila",
                "lastname":"Hökki",
                "phones":[]
            },
            {
                "firstname":"Matt",
                "lastname":"River",
            }
        ]
        const register=new PhoneRegister(testData);
        // test data can also be put directly in as a parameter - however using a varible makes it more legible. See below test with empty array.
        expect(register.getTypes()).toEqual([]);
    })
    test('Test 3: no persons in phoneregister', ()=>{
        const register=new PhoneRegister([]);
        expect(register.getTypes()).toEqual([]);

    })
    test('Test 4: type is missing or is in empty string',()=>{
        const testData=[
            {
                "firstname":"Leila",
                "lastname":"Hökki",
                "phones":[
                    {"type":"", "number":"12345678"},
                    {"type":"work","number":"87654321"},
                    {"type":"work", "number":"05040302"}
                ]
            },
            {
                "firstname":"Matt",
                "lastname":"River",
                "phones":[
                    {"type":"home", "number":"567890123"},
                    {"type":"mobile","number":"045678912"},
                    {"type":"work", "number":"3214569"}
                ]
            },
              {
                "firstname":"Mary",
                "lastname":"Jones",
                "phones":[
                    {"number":"567890123"},
                    {"type":"cell","number":"045333912"},
                    {"type":"work", "number":"3214669"}
                ]
            }
        ]

        const register=new PhoneRegister(testData);
        expect(register.getTypes()).toEqual(["work","home","mobile","cell"])

    });

    test('Test 5. Some phones are missing', () => {
        const testData = [
            {
                "firstname":"Leila",
                "lastname":"Hökki",
                "phones":[]
            },
            {
                "firstname":"Vera",
                "lastname":"River",
                "phones":[
                    {"type":"mobile","number":"045121912"},
                    {"type":"home", "number":"567890121"}
                ]
            }
        ]
        const register=new PhoneRegister(testData);
        expect(register.getTypes()).toEqual(["mobile","home"])

    })

})

