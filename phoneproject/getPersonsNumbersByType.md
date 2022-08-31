### **getPersonsNumbersByType(firstname,lastname,type)**

Method returns an array of phone numbers of given `type`belonging to given person with given `firstname` and `lastname`

if no person with given name is found, an empty array [] is returned. If no number with given type found, an empty array [] is returned.
If at least one parameter is missing, an exception `missing parameter` is thrown.

For example the work numbers of Leila Hökki:
```json
["87654321","05040302"]
```

Before tests create object with the default data.

### Test 1: work numbers of Leila Hökki
```js
register.getPersonsNumbersByType('Leila', 'Hökki','work');
```

returns 
```json
["87654321","05040302"]
```

### Test 2: mobile numbers of Matt River
```js
register.getPersonsNumbersByType('Matt', 'River','mobile');
```

return
```json
["045678912"]
```

### Test 2: home numbers of Matt River
```js
register.getPersonsNumbersByType('Matt', 'River','home');
```

return
```json
["567890123"]
```

### Test 3: wrong type or name return an empty array

```js
register.getPersonsNumbersByType('Matt', 'River','x');
register.getPersonsNumbersByType('Matt', 'x','mobile');
register.getPersonsNumbersByType('x', 'River','mobile');
```

### Test 4: Missing parameter throws an exeption: 'missing parameter'
```js
register.getPersonsNumbersByType('Matt','River');
register.getPersonsNumbersByType('Matt');
register.getPersonsNumbersByType();
```

## Test 5: if data is empty array (no persons found)
```js
const register=new Phoneregister([]);
register.getPersonsNumbersByType('Matt', 'River','mobile');
```
returns []
