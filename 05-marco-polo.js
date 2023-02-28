// ------------------------
// COMP 690 - Assignment 3
// Ralph Godkin
// Part 5 - Marco Polo
// ------------------------

// Create the variable & do/while loop

let i = 0
do {
    ++i;

//check if the number is divisible by 3 and 5

        if((i % 3 == 0) && (i % 5 == 0)){
    console.log("Marco! Polo!");
        }

//check if the number is divisible by 3 only

        else if (i % 3 == 0){
            console.log("Marco!")
        }

//check if the number is divisible by 5 only

        else if (i % 5 == 0){
            console.log("Polo!")
        }

// if not divisible by 3 and/or 5

        else {
    console.log(i);
        }
    }
while (i <= 99);