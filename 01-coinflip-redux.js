// -----------------------
// COMP 690 - Assignment 3
// Ralph Godkin
// Part 1 - coinflip-redux
// -----------------------

const prompt = require('prompt-sync')();

// Create the variable

let coinFlip;

// Ask how many times to flip the coin

let flips = parseInt(prompt("How many coin flips are we going to do (10 max)?"));

// Check the number of flips is between 1 & 10

if ((flips >= 11) || (flips <= 0)){
    console.log(" I'm sorry {flips} is not in range.")
}

// Start flipping

else {
    console.log("Ok, here are {flips} coin flips:")

// Create the loop to run the inputted number of times & display the results

    for (var i = 0; i < flips; i++){
    coinFlip = Math.round(Math.random())
        if (coinFlip == 0){
            console.log("({i}) Heads")
        }
        else {
                console.log("({i}) Tails")      
            }
        }
}

// Verify the code completed succesfully

console.log(" -- Game Complete --")