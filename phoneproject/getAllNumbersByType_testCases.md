### **getAllNumbersByType(type)**

Returns an array of objects consisting of names and numbers of given type.

If no number of given type is found, an empty array [] is returned.
If person has a type which has no number or number is empty, then it is not added to the result.

if a person has multiple numbers of given type, each of them will be in its own object.

If a parameter is missing an exception `'missing parameter'` is thrown.

The format of the returned object is:

```json
[
    {"firstname":"", "lastname":"", "number":{"type":"","tel":""}}
    {"firstname":"", "lastname":"", "number":{"type":"","tel":""}}
]
```

For example type work
```json
[
    {"firstname":"Leila", "lastname":"Hökki", "number":{"type":"work","tel":"87654321"}}
    {"firstname":"Leila", "lastname":"Hökki", "number":{"type":"work","tel":"05040302"}}
    {"firstname":"Matt", "lastname":"River", "number":{"type":"work","tel":"3214569"}}
    
]
```

### Test 1: get all work numbers using default data
```js
register.getAllNumbersByType('work');
```
return
```json
[
    {"firstname":"Leila", "lastname":"Hökki", "number":{"type":"work","tel":"87654321"}}
    {"firstname":"Leila", "lastname":"Hökki", "number":{"type":"work","tel":"05040302"}}
    {"firstname":"Matt", "lastname":"River", "number":{"type":"work","tel":"3214569"}}   
]
```

### Test 2A: get all mobile numbers using data

```js
register.getAllNumbersBytype('mobile');
```
return 
```json
[
    {"firstname":"Matt", "lastname":"River", "number":{"type":"mobile","tel":"3214569"},
    }    
]
```

### Test 2B: get all home numbers using data

```js
register.getAllNumbersBytype('home');
```
return 
```json
[
    {"firstname":"Matt", "lastname":"River", "number":{"type":"home","tel":"567890123"},
    }    
]
```


### Test 3: type 'x' will return an empty array

```js
register.getAllNumbersBytype('x');
```
return []

### Test 4: missing parameter parameter throws an exception
```js
register.getAllNumbersBytype();
```
throws an exception `'missing parameter'``

### Test 5: person has type but the corresponding number is missing

testData:
```json
[
    {
        "firstname":"Vera ",
        "lastname":"Jones",
        "phones":[
            {"type":"home", "number":""},
            {"type":"home"},
            {"type":"home", "number":"123456654"}
        ]
    }
]

```

```js
register.getAllNumbersByType("home")
```
expect to return
```json
[
    {
        "firstname":"Vera ",
        "lastname":"Jones",
        "number":
            {"type":"home", "number":"123456654"}   
    }
]
```





