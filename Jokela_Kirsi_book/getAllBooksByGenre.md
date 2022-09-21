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