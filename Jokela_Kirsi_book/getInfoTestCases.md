### **get_info(searchKey)**

Returns an info object that matches the searchKey `bookNumber`.

If no book is matching given searchKey or searchKey is missing, null will be returned.

The format of the returned object is:

```json
"info": {
      "notes": "",
      "booktype": "",
      "edition": ""
    }
```

# Test 1: get info for bookNumber 1

```js
storage.getInfo(1);
```

return 
```json
"info": {
      "notes": "collectors edition",
      "booktype": "hardcover",
      "edition": "fourth edition"
    }
```

# Test 2A: no info given (empty parameter) returns null

```js
storage.getInfo();
```

return null

# Test 2B: searchKey with no matching parameter returns null

```js
storage.getInfo(100);
```

return null

