# Test Cases for constructor

## Test that the missing paramter throws an exception

```js
new Phoneregister()
```

this will throw an exception `'phone data missing'``

#########
You could test also if the data passed to the constructor is assigned to an inner field, but that requires knowledge of objects inner workings (name of the field) so let's just stick to the API and test this later as a side effect of other tests. 