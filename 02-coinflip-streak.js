// ------------------------
// COMP 690 - Assignment 3
// Ralph Godkin
// Part 2 - coinflip-streak
// ------------------------

// Create the variables

let coinFlip;
let x = 1;

// Initial coin flip

coinFlip = Math.round(Math.random());

// If initial flip is heads

    if (coinFlip == 0){
        console.log("\n First flip is heads, let's see how many more heads we can get:\n");

// Create the Do/While loop for heads

        do { 
            ++x;
            console.log(x + " Heads");   
        coinFlip = Math.round(Math.random());
                       }
        while (coinFlip == 0);
            }

// If initial flip is tails

    else {
        console.log("\nFirst flip is tails, let's see how many more tails we can get:\n");
        
// Create the Do/While loop for tails

        do { 
            ++x;
            console.log(x + " Tails");   
        coinFlip = Math.round(Math.random());
                       }
        while (coinFlip == 1);
            }

// Verify that the code completed

console.log("\n ***** Streak over. Streak lasted: " + x + " times. Nice! *****\n");