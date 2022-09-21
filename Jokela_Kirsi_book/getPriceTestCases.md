### **get_Price(bookNumber)**

Gets the price of the book by bookNumber.

If no book with the given bookNumber is  found throws an exception `'nothing found with given'`.

# Test 1: Get price for book number 1 

```js
getPrice(1);
```

returns 123;

# Test 2: Test that empty parameter throws exception

```js
getPrice();
```

returns `'nothing found with given'`

# Test 3: Test that non-existing bookNumber throws exception

```js
getPrice(1000);
```

returns `'nothing found with given'`
