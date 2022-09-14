'use strict';

const search = require('../carStorageFilePromises');

describe('Testing with key licence to resolve',()=>{
    const expectedResult=[
        { "model": "Bored T-model", "licence": "ABC-1" }
    ];

    test('then', ()=>{
        return search('licence','ABC-1')
            .then(data=>expect(data).toEqual(expectedResult))
    });

    test('async-await', async ()=>{
        const data = await search('licence','ABC-1');
        expect(data).toEqual(expectedResult);
    });

    test('resolves', ()=>{
        return expect(search('licence','ABC-1')).resolves.toEqual(expectedResult);
    });

    test('resolves with async', async ()=>{
        await expect(search('licence', 'ABC-1')).resolves.toEqual(expectedResult);
    });
});

describe('testing with key licence to reject',()=>{
    test('catch',()=>{
        return search().catch(err=>expect(err).toBe('parameter missing'));
    });

    test('async-await', async()=>{
        try{
            await search()
        }
        catch(err){
            expect(err).toBe('parameter missing');
        }
    });

    test('rejects',()=>{
        return expect(search()).rejects.toBe('parameter missing');
    });

    test('rejects with async', async()=>{
        await expect(search()).rejects.toBe('parameter missing');
    });
});

describe('test with key model', ()=>{
    const resultForT=[
        { "model": "Bored T-model", "licence": "ABC-1" },
        { "model": "Bored T-model", "licence": "GTF-10" }
    ];

    const resultForNova=[
        { "model": "Nova", "licence": "XYZ-123" }
    ];

    test('search model "Bored T-model"',()=>{
        return expect(search('model', 'Bored T-model')).resolves.toEqual(resultForT);
    });

    test('search model "Bored T-model"', async () => {
        await expect(search('model', 'Bored T-model')).resolves.toEqual(resultForT);
    });

    test('search model "Nova"', ()=>{
        return expect(search('model','Nova')).resolves.toEqual(resultForNova);
    });

    test('search model "X"', ()=>{
        return expect(search('model','X')).resolves.toEqual([]);
    });

    test('search with only one parameter', ()=>{
        return expect(search('model')).rejects.toBe('parameter missing');
    });
});