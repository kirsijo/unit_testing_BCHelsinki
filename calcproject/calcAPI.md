# Calc library API

## **sum(a,b)**

Function returns the sum of two numbers. Numbers are passed to the function as parameters.

Parameters: a and b are numbers
Returns: the sum of given numbers

-if parameter is missing, throws an exception: `'parameter missing'`
-if both paremeters are given but parameters are not numbers, throws an exception `'only numbers allowed`

### Test cases

#### 1. Integers

- sum(1,1) return 2
- sum(2,3) return 5
- sum(12,100) return 112
  [2, -4, -2],
  [0, 0, 0],
  [0, 3 ,3],
  [3, 0, 3],
  [0, -3, -3],
  [-3, 0, -3]

#### 2. Floats

sum(10,11.5) return 21.5
[2.5, 3, 5.5],
[-2.5, 3, 0.5],
[3, -2.5, 0.5],
[-2.5, -3, -5.5],
[-2.5, -2.5, -5.5],
[-2.5, 0, -2.5],
[2.5, -3, -5.5],
[2.4, -2.5, -0.1]

#### 3. Missing parameter

- sum() thow an expection `'parameter missing'`
- sum(1) thow an expection `'parameter missing'`
- sum('a') thow an expection `'parameter missing'`
- sum('') thow an expection `'parameter missing'`

#### 4. Parameters are not numbers

-sum('1','2') throws an exception `'only numbers allowed`
-sum('a',1) throws an exception `'only numbers allowed`
-sum(1,'a') throws an exception `'only numbers allowed`
-sum('a','b') throws an exception `'only numbers allowed`
-sum('','') throws an exception `'only numbers allowed`
-sum(null,1) throws an exception `'only numbers allowed`
-sum(undefined,1) throws an exception `'only numbers allowed`

['1','2'],
['a',1],
[1,'a'],
['a',b],
['',''],
[null,1]

## **SUBTRACT(a,b)**

Function returns the difference a-b of two numbers. Numbers are passed to the function as parameters.

Parameters: a and b are numbers
Returns: the difference of given numbers

-if parameter is missing, throws an exception: `'parameter missing'`
-if both paremeters are given but parameters are not numbers, throws an exception `'only numbers allowed'`

### Test cases

#### Integers

[1,1,0],
[2,3,-1],
[-2,-4,2],
[0,0,0],
[3,0,3],
[0,3,-3]
...

#### Floats

[10,11.5,-1.5],
[-2.5,3,-5.5],
[2.5,2.5,0],
[2.4,-2.5,4.9]

#### 3. Missing parameter

- subtract() thow an expection `'parameter missing'`
- subtract(1) thow an expection `'parameter missing'`
- subtract('a') thow an expection `'parameter missing'`
- subtract('') thow an expection `'parameter missing'`

#### 4. Parameters are not numbers

-subtract('1','2') throws an exception `'only numbers allowed`
-subtract('a',1) throws an exception `'only numbers allowed`
-subtract(1,'a') throws an exception `'only numbers allowed`
-subtract('a','b') throws an exception `'only numbers allowed`
-subtract('','') throws an exception `'only numbers allowed`
-subtract(null,1) throws an exception `'only numbers allowed`
-subtract(undefined,1) throws an exception `'only numbers allowed`

## division
function division(a,b) return a/b

problems:

0/0 => NaN
2/0 => Infinity
-2/0 => -Infinity

Infinity/Infinity => NaN
-Infinity/Infinity => NaN
Infinity/-Infinity => NaN
-Infinity/-Infinity => NaN

TestValues:

[0,0,Number.NaN],
[2,0,Number.POSITIVE_INFINITY],
[-2,0,Number.NEGATIVE_INFINITY]
[Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY,Number.Nan]
