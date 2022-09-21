### **get_total_price_of_books_by_author(searchValue)**

Returns the total sum of prices per author.
searchValue is the author of the book to be searched.
total cumulative price of books matching the searchValue.

if no book with the given searchValue is  found throws an exeption `'nothing found with given'`. If a parameter searchValue is missing, an exeption `'missing parameter'` is thrown.

# Test 1: return the total price of books for 'Felix Harris'

```js
getTotalPriceOfBooksByAuthor('Felix Harris');
```
returns 200

# Test 2: return the total price of books for 'Layla Jones'

```js 
getTotalPriceofBookByAuthor('Layla Jones')
```

returns 269

# Test 3: No book found with given search value 

```js 
getTotalPriceOfBooksByAuthor('Kirsi Jokela');
```
returns `'nothing found with given'`

# Test 4: Parameter is missing 

```js 
getTotalNumberOfBooksByAuthor();

throws `'missing parameter'`