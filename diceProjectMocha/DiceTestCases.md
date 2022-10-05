# Test cases for the Dice class

## **constructor**

## 1. no upper bound given
-   creates a dice with minimumValue between 1 and  maximumValue 6
-   initializes dot count to zero

## 2. create dice with upper bounds 2-20
-   creates a dice with dot count between 1 and upper bound
    (use minimumValue and maximumValue)
-   initializes dot count to zero (tested in test case 1)


### 3. test exceptions

-   0 throws exception `'upper bound too small'`
-   1 throws exception `'upper bound too small'`
-   -1 throws exception `'upper bound too small'`
-   21 throws exception `'upper bound too big'`

-   'a' throws exception `'upper bound must be an integer'`
-   2.5  throws exception `'upper bound must be an integer'`


## **roll()**

-   create a dice with no upper bound. Upper boud should be 6. when rolled the dot count should be between 1 and 6.

-   create dice with upper bounds 2-20. => after rolling result should be between 2 and 20

## **toString()**

In both cases create a new dice (no upper bound given)
-   roll the dice. Compare result string to dots as string
-   don't roll the dice, returns `'Not rolled yet'`
