### **get_All_books_By_author(searchValue)**

Searches books with given author.

Returns an array of book objects of given author. If no book of given author is found, returns an empty array.

SearchValue is the author of the book to be searched.

If a parameter searchValue is missing, an exception `'missing parameter'` is thrown.

The format of the returned object is:

```json
[
    {
      "bookNumber": "",
      "name": "",
      "author": "",
      "price": "",
      "amount": "",
      "genres": [
        "",
        "",
        ""
      ],
      "info": {
        "notes": "",
        "booktype": "",
        "edition": ""
      }
    }
]

```

For example for author 'Layla Jones'

```json
[
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
```

Before tests create `storage` object from the class BookStorage.

### Test 1: get all books for Felix Harris

```js
storage.getAllBooksByAuthor('Felix Harris')
```

return

```json 
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
        ]
```

### Test 2: get all books for Layla Jones using default data
```js
storage.getAllBooksByAuthor('Layla Jones')
```

return

```json
[
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
```

### Test 3: author name 'x' which does not exist in the database will return an empty array

```js
storage.getAllBooksByAuthor('x');
```
return []

### Test 4: Missing parameter throws an exception

```js
storage.getAllBooksByAuthor();
```

throws an exception '`missing parameter`'

