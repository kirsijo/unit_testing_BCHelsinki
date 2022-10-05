const testCases = new Array(19).fill(2).map((value, ind) => value + ind);

console.log(testCases);

//jest version
const testCasesJest = new Array(19).fill(2).map((value, ind) => [value + ind]);

console.log(testCasesJest);