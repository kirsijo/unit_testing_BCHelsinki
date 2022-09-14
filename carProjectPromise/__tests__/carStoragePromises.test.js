'use strict';

const search = require('../carStorageFilePromises');

describe('Testing with key licence to resolve', () => {
    const expectedResult=[
        {"model": "Bored T-model", "licence":"ABC-1"}
    ];

    test('then', () => {
        return search('licence', 'ABC-1').then(data=>expect(data).toEqual(expectedResult))
    })
})