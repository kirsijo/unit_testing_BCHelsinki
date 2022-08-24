'use strict';

const Dice=require('./dice');

const diceA=new Dice();
const diceB=new Dice();

console.log('diceA: ', diceA.toString());
console.log('diceB', diceB);
// below automatically uses toString method
console.log('diceB:' +diceB); 

diceA.roll();
diceB.roll();

console.log(`A:${diceA}, B:${diceB}`);