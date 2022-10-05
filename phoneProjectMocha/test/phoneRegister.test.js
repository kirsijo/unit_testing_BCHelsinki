'use strict';

const expect = require('chai').expect;

const PhoneRegister = require('../phoneRegister');
const phones = require('../phones.json');

describe('test getTypes', function(){
    it('using the default data', function(){
        const register=new PhoneRegister(phones);
        expect(register.getTypes()).to.deep.equal(['home','work','mobile']);
    });

    it('test equal', function(){
        const a=[1,2,3];
        expect(a).to.equal(a);
    });

    it('test equal', function () {
        const a = [1, 2, 3];
        expect(a).to.not.equal([1, 2, 3]);
    });

    it('test equal', function () {
        const a = [1, 2, 3];
        expect(a).to.deep.equal([1, 2, 3]);
    });
});

describe('non-default data',function(){
    it('persons have no phones', function(){
        const testData=[
            {
                "firstname": "Leila",
                "lastname": "Hökki",
                "phones": []
            },
            {
                "firstname": "Matt",
                "lastname": "River",
                "phones": []
            },
            {
                "firstname": "Vera",
                "lastname": "River"
            }
        ];

        const register = new PhoneRegister(testData);
        expect(register.getTypes()).to.deep.equal([]);
        // expect(register.getTypes()).is.empty;
    });

    it('empty register', function(){
        const register = new PhoneRegister([]);
        expect(register.getTypes()).is.empty;
    })
})