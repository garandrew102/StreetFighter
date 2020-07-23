const readlineSync = require('readline-sync');

const streetFighters = ["RYU", "KEN", "GUILE"];

const move = ["PUNCH", "KICK", "UPPERCUT"];

const choice = ["YES", "NO"];

const punch = 10;

const kick = 20;

const uppercut = 30;

let userHealth = 100;

let compHealth = 100;

const fight = () => {
    if (move[userMove] === "PUNCH") {
        if(Math.round(Math.random()) === 1) {
            console.log(`YOU CHOSE PUNCH AND DID ${punch} DAMAGE POINTS!!!`);
            compHealth = compHealth - 10        
        } else {
            console.log(`YOUR PUNCH WAS BLOCKED!!!`);
            compHealth = compHealth - 5        
        }
} else if (move[userMove] === "KICK") {
    if(Math.round(Math.random()) === 1) {
        console.log(`YOU CHOSE KICK AND DID ${kick} DAMAGE POINTS!!!`);
        compHealth = compHealth - 20        
    } else {
        console.log(`YOUR KICK WAS BLOCKED!!!`);
        compHealth = compHealth - 10        
    }
} else {
    if(Math.round(Math.random()) === 1) {
        console.log(`YOU CHOSE UPPERCUT AND DID ${uppercut} DAMAGE POINTS!!!`);
        compHealth = compHealth - 30        
    } else {
        console.log(`YOUR UPPERCUT WAS BLOCKED!!!`);
        compHealth = compHealth - 15        
    }
}     
    console.log(`THE ENEMY HAS ${compHealth} REMAINING!!!`);
};

const compMove = () => {
    let attack = move[Math.floor(Math.random()*move.length)]
    console.log(attack)
    if (attack === "PUNCH") {
        if(Math.round(Math.random()) === 1) {
            console.log(`THE ENEMY PUNCHED YOU AND ${punch} DAMAGE POINTS!!!`);
            userHealth = userHealth - 10        
        } else {
            console.log(`YOU BLOCKED THE PUNCH BUT TOOK SOME DAMAGE!!!`);
            userHealth = userHealth - 5        
        }
    }
    if (attack === "KICK") {
        if(Math.round(Math.random()) === 1) {
            console.log(`THE ENEMY KICKED YOU AND DID ${kick} DAMAGE POINTS!!!`);
            userHealth = userHealth - 20        
        } else {
            console.log(`YOU BLOCKED THE KICK BUT TOOK SOME DAMAGE!!!`);
            userHealth = userHealth - 10        
        }
    }
    if (attack === "UPPERCUT") {
        if(Math.round(Math.random()) === 1) {
            console.log(`THE ENEMY UPPERCUTTED YOU AND DID ${uppercut} DAMAGE POINTS!!!`);
            userHealth = userHealth - 30        
        } else {
            console.log(`YOU BLOCKED THE UPPERCUT BUT TOOK SOME DAMAGE!!!`);
            userHealth = userHealth - 15        
        }
    }
        console.log(`YOU HAVE ${userHealth} REMAINING!!!`);
};

const start = () => {
    let userInput = readlineSync.keyInSelect(choice);  
    if (choice[userInput] == "YES") {
        console.log("ROUND ONE!!! FIGHT!!!");
    } else {
        console.log("ARE YOU READY NOW???");
        start();
    } 
};

console.log('***********STREET FIGHTER!!!***********');
console.log("CHOOSE YOUR CHARACTER!!!");
let fighter = readlineSync.keyInSelect(streetFighters);

console.log("YOU PICKED, " + streetFighters[fighter] + "!");

console.log("ARE YOU READY???");
start();

let userMove = readlineSync.keyInSelect(move);
fight();

while(compHealth > 0 && userHealth > 0) {
    compMove();
    console.log("PICK YOUR NEXT MOVE!!!");
    userMove = readlineSync.keyInSelect(move);
    fight();
};

if (compHealth <= 0) {
    console.log('YOU WIN!!!!');
} else {
    console.log('YOU LOSE!!!');
};