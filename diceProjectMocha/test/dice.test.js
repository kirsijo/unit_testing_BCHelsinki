'use strict';

const expect = require('chai').expect;

// const chai = require('chai');
// const expect=chai.expect;

const Dice = require('../dice');

describe('methods defined', function(){
    const dice = new Dice();

    it('getter maximumValue defined', function(){
        expect(dice).to.have.a.property('maximumValue');
    });

    it('method roll defined', function(){
        expect(dice).to.have.a.property('roll');
    });

    //toString is always there, so no need to test that
    // it('toString is defined', function(){
    //     expect(dice).to.have.a.property('toString');
    // });
});

describe('Create dice with no upper bound given', function(){
    const dice = new Dice();

    it('maximum dot count is 6', function(){
        expect(dice.maximumValue).to.equal(6);
    });

    it('minimum dot count is 1', function(){
        expect(dice.minimumValue).to.equal(1);
    });

    it('dots is 0', function(){
        expect(dice.dots).to.equal(0);
    });
});

describe('create dice with uppere bounds 2-20', function(){
    const testCases=new Array(19).fill(2).map((value,ind)=>value+ind);

    testCases.forEach(function(uBound){
        it(`upper bound is ${uBound}`, function(){
            const dice = new Dice(uBound);
            expect(dice.maximumValue).to.equal(uBound);
        });
    });
});

describe('create with 2-20 version 2', function(){
    for(let uBound=2; uBound<21; uBound++){
        const dice = new Dice(uBound);
        it(`upper bound is ${uBound}`, function(){
            expect(dice.maximumValue).to.equal(uBound);
        });
    }
});

describe('create with 2-20 version 3', function () {
    function testUpperBound(uBound){
        const dice = new Dice(uBound);
        it(`upper bound is ${uBound}`, function () {
            expect(dice.maximumValue).to.equal(uBound);
        });
    }

    for (let uBound = 2; uBound < 21; uBound++) {
        testUpperBound(uBound);
    }
});

describe('Test exceptions', function(){
    const testCases=[
        { ubound: -1, result:'upper bound too small'},
        { ubound: 21, result: 'upper bound too big' },
        { ubound: 'a', result:'upper bound must be an integer'}
    ];

    testCases.forEach(function(testCase){
        it(`Upper bound ${testCase.ubound} throws '${testCase.result}'`,function(){
            expect(function(){
                new Dice(testCase.ubound)
            }).to.throw(testCase.result);
        });
    });
});

describe('The upper bound too small', function(){
    [-1, 0, 1].forEach(function(ubound){
        it(`Upper bound ${ubound} throws 'upper bound too small'`, function(){
            expect(function(){
                new Dice(ubound);
            }).to.throw('upper bound too small');
        });
    });
});

describe('test roll', function(){
    let dice;

    beforeEach(function(){
        dice= new Dice();
    });

    it('test when dice hasn\'t been rolled', function(){
        expect(dice.dots).to.equal(0);
    });

    it('test when rolled', function(){
        dice.roll();
        expect(dice.dots).to.be.within(1,6);
    });
});

describe('test for 2-20', function(){
    for(let ub=2; ub<21;ub++){
        for(let i=0;i<10;i++){
            it(`ubound=${ub}`, function(){
                const dice = new Dice(ub);
                dice.roll();
                expect(dice.dots).to.be.within(1, ub);
            });
        }
    }
});

describe('test toString', function(){
    let dice;

    beforeEach(function(){
        dice=new Dice();
    });

    it('dice is rolled', function(){
        dice.roll();
        expect(dice.toString()).to.equal(`${dice.dots}`);
    });

    it('dice is not rolled yet', function(){
        expect(dice.toString()).to.equal('Not rolled yet');
    });
});