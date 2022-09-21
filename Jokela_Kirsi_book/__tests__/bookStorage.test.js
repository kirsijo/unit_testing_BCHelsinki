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


    test('test 2: get all books by Layla Jones', () => {
        const storage = new BookStorage(books);
        const testData = [
            {
          "bookNumber": 1,
          "name": "Rebellion of Sophie Q. Lister",
          "author": "Layla Jones",
          "price": 123,
          "amount": 7,
          "genres": [
            "textbook",
            "poem",
            "fiction"
          ],
          "info": {
            "notes": "collectors edition",
            "booktype": "hardcover",
            "edition": "fourth edition"
          }
        },
        {
          "bookNumber": 2,
          "name": "The adventures of Mike the Millipede",
          "author": "Layla Jones",
          "price": 123,
          "amount": 1,
          "genres": [
            "humorous essay",
            "nonfiction",
            "fiction"
          ],
          "info": {
            "notes": "-",
            "booktype": "leaflet",
            "edition": "fift edition"
          }
        },
        {
          "bookNumber": 3,
          "name": "NoSql - New Hope",
          "author": "Layla Jones",
          "price": 123,
          "amount": 13,
          "genres": [
            "nonfiction",
            "short story",
            "chronic"
          ],
          "info": {
            "notes": "collectors edition",
            "booktype": "softcover",
            "edition": "first edition"
          }
        }
      ]
      expect(storage.getAllBooksByAuthor('Layla Jones')).toEqual(testData);
    })

    test('Test 3: Testing that x returns an empty array ', () => {
        const storage = new BookStorage(books);
        expect(storage.getAllBooksByAuthor('x')).toEqual([]);
    })

    test('Test 4: Testing that missing parameter returns an empty array', () => {
        const storage = new BookStorage(books);
        expect(()=>storage.getAllBooksByAuthor()).toThrow('missing parameter');
    })

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
    test('test 2A: number not present in the database returns an empty array', () => {
        const storage = new BookStorage(books);
        expect(storage.getBookGenres(2000)).toEqual([]);
    })
    test('test 2B: missing parameter returns an empty array', () => {
        const storage = new BookStorage(books);
        expect(storage.getBookGenres()).toEqual([]);
    })
})