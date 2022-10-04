'use strict';

const books = require('../datastorage.json');
const BookStorage = require('../BookStorage');

describe('Testing constructor', () => {
    test('Test that the missing data throws an exception', () => {
        expect(()=> new BookStorage()).toThrow('data storage missing')
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

describe('Testing getInfo', () => {
    test('test 1: get info for book with bookNumber 1', () => {
        const storage = new BookStorage(books);
        const expectedResult = {
            "notes": "collectors edition",
            "booktype": "hardcover",
            "edition": "fourth edition"
          }
        expect(storage.getInfo(1)).toEqual(expectedResult);
    })
    test('test 2A: no parameter returns null', () => {
        const storage = new BookStorage(books);
        expect(storage.getInfo()).toEqual(null);
    })
    test('test 2B: searchKey with no matching parameter returns null', () => {
        const storage = new BookStorage(books);
        expect(storage.getInfo(100)).toEqual(null);
    })
})

// Assuming we are looking for total price of one of each book by author, not the total cost of the entire stock/inventory.

describe('Testing getTotalPriceOfBooksByAuthor',()=>{
    const storage = new BookStorage(books);
    test('Test 1: get total price of books for Felix Harris', () => {
        expect(storage.getTotalPriceOfBooksByAuthor('Felix Harris')).toEqual(200);
    })
    test('Test 2: get total price of books for Layla Jones', () => {
        expect(storage.getTotalPriceOfBooksByAuthor('Layla Jones')).toEqual(369);
    })
    test('Test 3: No books found with given search value', () => {
        expect(storage.getTotalPriceOfBooksByAuthor('Kirsi Jokela')).toEqual('nothing found with given');
    })
    test('Test 4: missing parameter throws an error', () => {
        expect(()=>storage.getTotalPriceOfBooksByAuthor()).toThrow('missing parameter');
    })

    describe('Testing getPrice', () => {
        const storage = new BookStorage(books);
        test('Test 1: testing getPrice for bookNumber 1 ', () => {
            expect(storage.getPrice(1)).toEqual(123)
        })
        test('Test 2: test that no parameter given returns `nothing found with given`', () => {
            expect(()=>storage.getPrice()).toThrow('nothing found with given')
        })
        test('Test 3: test that non-existing bookNumber returns `nothing found with given`', () => {
            expect(()=>storage.getPrice(1000)).toThrow('nothing found with given')
        })
    })

})

