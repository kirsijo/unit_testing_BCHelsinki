### **get_book_genres(searchKey)**
Returns an array of book genres based on `bookNumber`. If none found, returns an empty array.

If no genres are found for given bookNumber, an empty array is returned. If parameter is missing, an exception `missing parameter` is thrown.

For example the genres for bookNumber 3:
```json
[ "nonfiction","short story","chronic"]
```

### Test 1: genres for bookNumber 3

```js
storage.getBookGenresByNumber(3);
```

returns
```json
[ "nonfiction","short story","chronic"]
```

### Test 2A: number that is not present in the database returns an empty array.

```js
storage.getBookgenresByNumber(2000);
```

returns
```json
[]
```

### Test 2B: missing parameter returns an empty array

```js
storage.getBookgenresByNumber();
```

returns
```json
[]
```




