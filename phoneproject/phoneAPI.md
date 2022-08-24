# Phone API

## Data

The data will be i a json file

### phones.json

```json
[
    {
        "firstname":"Leila",
        "lastname":"Hökki",
        "phones":[
            {"type":"home", "number":"12345678"},
            {"type":"work","number":"87654321"},
            {"type":"work", "number":"05040302"}
        ]
    },
    {
        "firstname":"Matt",
        "lastname":"River",
        "phones":[
            {"type":"home", "number":"567890123"},
            {"type":"mobile","number":"045678912"},
            {"type":"work", "number":"3214569"}
        ]
    }
]

```

## class Phoneregister

### **constructor(data)**

Phones valid json-array is passed as a parameter `data`. If the parameter is missing, this throws an exception `'phone data missing'`.

### **getTypes()**

Returns all phone types in an array. The type is added to the result array only once. If there are no phones or no persons, en empty array [] is returned.

For example
```json
["home", "work","mobile"]
````

