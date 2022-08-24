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

if(diceA.dots===diceB.dots) {
    console.log('same dots');
}
else if(diceA.dots>diceB.dots){
    console.log('A wins');
}
else {
    console.log('B wins');
}

console.log('##### array of dices #####');
const diceArray=[new Dice(), new Dice(), new Dice()];

diceArray.forEach(dice=>console.log(dice.toString()));
diceArray.forEach(dice=>dice.roll());
diceArray.forEach(dice => console.log(dice.toString()));

const result=diceArray.reduce((sum,dice)=>sum+dice.dots,0);
console.log(`Sum of dots is ${result}`);