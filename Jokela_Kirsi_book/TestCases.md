

## Methods



### **get_info(searchKey)**
searches the book matching the searchKey and if match is found returns the info object otherwise null is returned

>Parameters:
>>searchKey is the bookNumber of the book

>Returns:
>>returns the info object of the book matching the searchKey. If no book matching the given searchKey is found or searchKey is missing, null will be returned

>Throws:
>>

### **get_total_price_of_books_by_author(searchValue)**
returns the total price of all books that have the same author than the given searchValue

>Parameters:
>>searchValue is the author of the book to be searched

>Returns:
>>total cumulative price of books matching the searchValue

>Throws:
>>if no book with the given searchValue is  found throws an exeption `'nothing found with given'`. If a parameter searchValue is missing, an exeption `'missing parameter'` is thrown

### **get_Price(bookNumber)**
get the price of the book

>Parameters:
>>bookNumber of the book which price is to be returned

>Returns:
>>returns the price of a book matching the given bookNumber

>Throws:
>>if no book with the given bookNumber is  found throws an exeption `'nothing found with given'`
