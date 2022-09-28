'use strict';

const expect = require('chai').expect;

const calculate = require('../calclibrary');

describe('Test if functions are defined', function() {
    it('sum is a function', function(){
        expect(calculate.sum).to.be.a('function');
    });
});