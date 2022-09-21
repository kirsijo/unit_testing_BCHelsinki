'use strict';

const books = require('../datastorage.json');
const BookStorage = require('../BookStorage');

describe('Testing constructor', () => {
    test('Test that the missing data throws an exception', () => {
        expect(()=> new BookStorage().toThrow('phone data missing'))
    })
})

describe('Testing getAllBooksByAuthor', () => {
    test('test 1: get all books by author Felix Harris', () => {
        const storage = new BookStorage(books);
        expect(storage.getAllBooksByAuthor('Felix Harris')).toEqual(
            [
                {
                    "bookNumber": 5,
                    "name": "NoSql - New Hope",
                    "author": "Felix Harris",
                    "price": 200,
                    "amount": 5,
                    "genres": [
                      "fiction",
                      "chronic",
                      "short story"
                    ]
                  }
        ])
    });

})

describe('Testing getBookGenres', () => {
    test('test 1: get all books by authorNumber 3', () => {
        const storage = new BookStorage(books);
        const expectedResult = [
            "nonfiction",
            "short story",
            "chronic"
          ]
        expect(storage.getBookGenres(3)).toEqual(expectedResult)
    })
})