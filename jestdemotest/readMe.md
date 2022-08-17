# Jest project

## 1. Create a project folder

## 2. Create package.json with `npm init` command

```shell
npm init -y
```

or

```shell
npm init
```

and answer questions (latter option)

## 3. Install jest devDependency

```shell
npm install jest --save-dev
```

this modified package.json by adding devDependencies to it

```json
"devDependencies": {
    "jest": "^28.1.3"
  }
```

## 4. Modify test script in package.json

```json
"scripts": {
    "test": "jest"
  }
```

## 5. Create test folder named `__tests__` (2x underscore each side)

## 6. Write tests

## 7. to run tests

```shell
npm test
```

## 7B. run only one test file

```shell
npm test --testFile fileTobeTested.test.js
```
