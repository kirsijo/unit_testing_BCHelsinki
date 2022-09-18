'use strict';

const books = require('../datastorage.json');
const BookStorage = require('../BookStorage');

describe('Testing constructor', () => {
    test('Test that the missing data throws an exception', () => {
        expect(()=> new BookStorage().toThrow('phone data missing'))
    })
})