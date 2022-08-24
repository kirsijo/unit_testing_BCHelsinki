'use strict';

module.exports=class Dice {
    constructor(upperBound=6){
        if(!Number.isInteger(upperBound)){
            throw new Error('upper bound must be an integer');
        }
        if(upperBound>20) {
            throw new Error('upper bound is too high');
        }
        if(upperBound<2) {
            throw new Error('upper bound is too small')
        }
        this.ubound=upperBound;
        this.dotCount=0;
    }
    get dots(){
        return this.dotCount;
    }

    get minimumValue() {
        return 1;
    }

    get maximumValue(){
        return this.ubound;
    }

    toString(){
        return this.dotCount === 0 ?'Not rolled yet' : `${this.dots}`
    }

    roll() {
        this.dotCount=Math.ceil(Math.random()*this.ubound);

    }
};